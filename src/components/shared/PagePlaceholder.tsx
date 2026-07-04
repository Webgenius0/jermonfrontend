import type { Metadata } from "next";

type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
      <h1 className="text-4xl font-bold text-brand-dark">{title}</h1>
      {description && (
        <p className="mt-4 max-w-2xl text-brand-muted">{description}</p>
      )}
      <p className="mt-8 rounded-lg border border-dashed border-brand-gray bg-brand-light px-6 py-8 text-sm text-brand-muted">
        Page sections will be built component-by-component from the legacy HTML.
      </p>
    </div>
  );
}

export function createPageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description ?? `${title} — BAGIA RD`,
  };
}
