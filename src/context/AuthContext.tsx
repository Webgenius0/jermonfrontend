"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type UserRole = "client" | "merchant" | "collector" | "admin";
export type SubscriptionTier = "ESSENTIAL" | "PRO COLLECTION" | "PRIVATE CONCIERGE";

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  companyName?: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  avatar?: string;
  createdAt: string;
};

export type AuthModalView = "login" | "register" | "forgot";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  authModalOpen: boolean;
  authModalView: AuthModalView;
  openAuthModal: (view?: AuthModalView) => void;
  closeAuthModal: () => void;
  setAuthModalView: (view: AuthModalView) => void;
  login: (email: string, pass: string) => { success: boolean; error?: string };
  register: (data: {
    name: string;
    email: string;
    phone?: string;
    companyName?: string;
    password?: string;
    role?: UserRole;
    subscriptionTier?: SubscriptionTier;
  }) => { success: boolean; error?: string };
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
  demoLogin: (role: "client" | "merchant") => void;
};

const DEMO_USERS: User[] = [
  {
    id: "usr_demo_client_101",
    name: "Dominique Vance",
    email: "client@bagiard.com",
    phone: "+1 (809) 425-2964",
    companyName: "Vance Fine Art Collection",
    role: "collector",
    subscriptionTier: "PRO COLLECTION",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    createdAt: "2024-01-15",
  },
  {
    id: "usr_demo_merchant_102",
    name: "Galerie Royale Paris",
    email: "merchant@bagiard.com",
    phone: "+33 1 42 68 55 00",
    companyName: "Maison de Luxe S.A.",
    role: "merchant",
    subscriptionTier: "PRIVATE CONCIERGE",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    createdAt: "2023-11-20",
  },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_USER_KEY = "bagiard_auth_user";
const LOCAL_STORAGE_DB_KEY = "bagiard_auth_db";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<AuthModalView>("login");

  // Hydrate session from localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      // Ensure demo database exists
      const storedDb = localStorage.getItem(LOCAL_STORAGE_DB_KEY);
      if (!storedDb) {
        localStorage.setItem(LOCAL_STORAGE_DB_KEY, JSON.stringify(DEMO_USERS));
      }
    } catch {
      // Storage access disabled or corrupt JSON
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save session state to localStorage & document cookie
  const saveSession = (userData: User | null) => {
    setUser(userData);
    try {
      if (userData) {
        localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
        document.cookie = `bagiard_auth=true; path=/; max-age=2592000; SameSite=Lax`;
      } else {
        localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        document.cookie = `bagiard_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
    } catch {
      // Storage write error ignored
    }
  };

  const getUsersDb = (): User[] => {
    try {
      const db = localStorage.getItem(LOCAL_STORAGE_DB_KEY);
      if (db) return JSON.parse(db);
    } catch {
      // Return fallback
    }
    return DEMO_USERS;
  };

  const login = (email: string, pass: string) => {
    const db = getUsersDb();
    const normalizedEmail = email.toLowerCase().trim();
    
    // Check against DB or default password check
    const matchedUser = db.find((u) => u.email.toLowerCase() === normalizedEmail);

    if (matchedUser && pass.length >= 4) {
      saveSession(matchedUser);
      setAuthModalOpen(false);
      return { success: true };
    }

    // Direct check for demo login if DB wasn't updated
    const demo = DEMO_USERS.find((u) => u.email.toLowerCase() === normalizedEmail);
    if (demo && pass.length >= 4) {
      saveSession(demo);
      setAuthModalOpen(false);
      return { success: true };
    }

    return { success: false, error: "invalidCredentials" };
  };

  const register = (data: {
    name: string;
    email: string;
    phone?: string;
    companyName?: string;
    password?: string;
    role?: UserRole;
    subscriptionTier?: SubscriptionTier;
  }) => {
    const db = getUsersDb();
    const normalizedEmail = data.email.toLowerCase().trim();

    const exists = db.some((u) => u.email.toLowerCase() === normalizedEmail);
    if (exists) {
      return { success: false, error: "userExists" };
    }

    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: data.name,
      email: data.email,
      phone: data.phone || "+1 (809) 555-0100",
      companyName: data.companyName || "",
      role: data.role || "client",
      subscriptionTier: data.subscriptionTier || "ESSENTIAL",
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(data.name)}`,
      createdAt: new Date().toISOString().split("T")[0],
    };

    const updatedDb = [...db, newUser];
    try {
      localStorage.setItem(LOCAL_STORAGE_DB_KEY, JSON.stringify(updatedDb));
    } catch {
      // Storage error
    }

    saveSession(newUser);
    setAuthModalOpen(false);
    return { success: true };
  };

  const logout = () => {
    saveSession(null);
  };

  const updateProfile = (updatedData: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...updatedData };
    saveSession(updatedUser);

    // Update in local db
    const db = getUsersDb();
    const updatedDb = db.map((u) => (u.id === user.id ? updatedUser : u));
    try {
      localStorage.setItem(LOCAL_STORAGE_DB_KEY, JSON.stringify(updatedDb));
    } catch {
      // Ignore write errors
    }
  };

  const demoLogin = (role: "client" | "merchant") => {
    const target = role === "client" ? DEMO_USERS[0] : DEMO_USERS[1];
    saveSession(target);
    setAuthModalOpen(false);
  };

  const openAuthModal = (view: AuthModalView = "login") => {
    setAuthModalView(view);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        authModalOpen,
        authModalView,
        openAuthModal,
        closeAuthModal,
        setAuthModalView,
        login,
        register,
        logout,
        updateProfile,
        demoLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
