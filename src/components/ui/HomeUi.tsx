import Link from "next/link";

type GoldButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "dark";
  className?: string;
};

export function GoldButton({
  href,
  children,
  variant = "solid",
  className = "",
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-brand-gold text-brand-black hover:bg-brand-gold-light"
      : variant === "dark"
        ? "border border-brand-gold bg-brand-charcoal text-white hover:bg-brand-black"
        : "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-wider ${light ? "text-brand-gold" : "text-brand-gold"}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold capitalize md:text-4xl ${light ? "text-white" : "text-brand-dark"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base ${light ? "text-white/80" : "text-brand-muted"} ${center ? "" : "mx-0"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function GoldDivider() {
  return (
    <div className="mx-auto mb-8 flex w-24 items-center gap-2">
      <span className="h-px flex-1 bg-brand-gold/50" />
      <span className="h-2 w-2 rotate-45 bg-brand-gold" />
      <span className="h-px flex-1 bg-brand-gold/50" />
    </div>
  );
}

type ImageDividerProps = {
  src: string;
  alt?: string;
};

export function ImageDivider({ src, alt = "" }: ImageDividerProps) {
  return (
    <div className="mx-auto my-8 flex max-w-md items-center gap-4">
      <span className="h-px flex-1 bg-brand-gold/40" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-8 w-auto object-contain" />
      <span className="h-px flex-1 bg-brand-gold/40" />
    </div>
  );
}
