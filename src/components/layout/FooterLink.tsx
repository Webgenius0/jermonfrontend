import type { ReactNode } from "react";
import Link from "next/link";
import { isExternalHref } from "@/lib/links";

type FooterLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function FooterLink({ href, className, children }: FooterLinkProps) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
