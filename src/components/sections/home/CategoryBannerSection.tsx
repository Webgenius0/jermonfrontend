import Link from "next/link";

type CategoryBannerProps = {
  id: "jewelry" | "painting";
  title: string;
  cta: string;
  button: string;
  href: string;
};

function JewelryIcon() {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      className="h-36 w-28 md:h-44 md:w-32"
      aria-hidden="true"
    >
      <path
        d="M60 18c-14 0-26 10-26 24v8c0 8 4 14 10 18v52c0 6 5 10 16 10s16-4 16-10V68c6-4 10-10 10-18v-8c0-14-12-24-26-24Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M34 50c0 0 12 10 26 10s26-10 26-10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 60v18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48 78h24"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 148h36"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M48 148v8M72 148v8"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M60 72 54 84h12L60 72Z"
        fill="#c9a227"
        stroke="#c9a227"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PaintingIcon() {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      className="h-36 w-28 md:h-44 md:w-32"
      aria-hidden="true"
    >
      <rect
        x="22"
        y="24"
        width="76"
        height="96"
        rx="2"
        stroke="white"
        strokeWidth="2.5"
      />
      <rect
        x="30"
        y="32"
        width="60"
        height="72"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle cx="52" cy="58" r="10" stroke="white" strokeWidth="2" />
      <path
        d="M38 96 56 72 68 84 82 64"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 120v20M44 140h32"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M78 52 84 46 90 52 84 58 78 52Z"
        fill="#c9a227"
        stroke="#c9a227"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function CategoryBannerSection({
  id,
  title,
  cta,
  button,
  href,
}: CategoryBannerProps) {
  return (
    <section className="bg-[#2d2d2d] py-12 md:py-14">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-14 lg:gap-20">
          <div className="shrink-0">
            {id === "jewelry" ? <JewelryIcon /> : <PaintingIcon />}
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {title}
            </h2>
            <p className="mt-2 text-sm text-white/75 md:text-base">{cta}</p>
            <Link
              href={href}
              className="mt-6 inline-flex rounded-full border border-brand-gold px-8 py-2.5 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
