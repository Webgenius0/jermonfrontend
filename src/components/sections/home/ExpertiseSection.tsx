import { homeExpertise } from "@/data/pages/home";
import { GoldDivider, SectionHeading } from "@/components/ui/HomeUi";

type ExpertiseIconProps = {
  type: "rocket" | "package" | "headset";
};

function ExpertiseIcon({ type }: ExpertiseIconProps) {
  const className = "h-10 w-10 shrink-0 text-brand-dark";

  if (type === "rocket") {
    return (
      <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M14 46L28 32L36 40L50 14L44 50L32 44L20 52L14 46Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M20 52L28 32" stroke="#c9a227" strokeWidth="2" />
        <circle cx="38" cy="26" r="2.5" fill="#c9a227" />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path
          d="M32 8L54 20V44L32 56L10 44V20L32 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M32 8V56M10 20L32 32L54 20" stroke="currentColor" strokeWidth="2" />
        <path d="M32 32V56" stroke="#c9a227" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M20 28C20 20.268 26.268 14 34 14C41.732 14 48 20.268 48 28V32H52V46C52 48.209 50.209 50 48 50H20C17.791 50 16 48.209 16 46V32H20V28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M24 50V54C24 56.209 25.791 58 28 58H40C42.209 58 44 56.209 44 54V50" stroke="currentColor" strokeWidth="2" />
      <path d="M34 14V10" stroke="#c9a227" strokeWidth="2" />
      <circle cx="34" cy="36" r="2" fill="#c9a227" />
    </svg>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={homeExpertise.title} />
        <GoldDivider />

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {homeExpertise.items.map((item) => (
            <article
              key={item.number}
              className="grid grid-cols-[3.25rem_1fr] grid-rows-[auto_1fr] bg-white"
            >
              <div className="row-span-2 flex min-h-[9.5rem] flex-col justify-end bg-brand-gold px-2 pb-3 pt-6">
                <span className="text-3xl font-bold leading-none text-brand-black">
                  {item.number}
                </span>
              </div>

              <div className="flex items-start gap-3 pb-3 pl-4 pt-1">
                <ExpertiseIcon type={item.icon} />
                <h3 className="pt-1 text-lg font-bold leading-snug text-brand-black">
                  {item.title}
                </h3>
              </div>

              <p className="pb-2 pl-4 pr-2 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
