import Link from "next/link";

export default function TrackOrderSection() {
  return (
    <section className="border-y border-brand-light bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          Siga su pedido
        </h2>
        <Link
          href="/seguimiento"
          className="rounded-full bg-brand-gold px-8 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
        >
          Seguimiento
        </Link>
      </div>
    </section>
  );
}
