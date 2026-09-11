import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/CTASection";

const PILLARS = [
  {
    title: "Location Strategy",
    copy: "We acquire land in corridors ahead of infrastructure growth — Rajpur Road, Sahastradhara and Whitefield were all early calls that have since appreciated well beyond the city average.",
    stat: "4",
    statLabel: "Growth corridors tracked",
  },
  {
    title: "Construction Quality",
    copy: "Every development is built to the same structural and material specification, independent of ticket size, protecting resale value over the long term.",
    stat: "0",
    statLabel: "Structural defects reported since 2010",
  },
  {
    title: "Rental Potential",
    copy: "PCM residences are designed with layouts that perform well in both the ownership and rental markets, supporting steady yield for investors.",
    stat: "4-6%",
    statLabel: "Typical annual rental yield",
  },
  {
    title: "Capital Appreciation",
    copy: "Early buyers in PCM Grandeur and The Azure Heights have seen appreciation well ahead of the regional residential average.",
    stat: "~11%",
    statLabel: "Average annual appreciation, flagship projects",
  },
  {
    title: "Long-Term Ownership",
    copy: "Our post-handover team manages maintenance, documentation and resale support for as long as you hold the property.",
    stat: "15+",
    statLabel: "Years of continuous service",
  },
];

export default function Investment() {
  return (
    <>
      <PageHero
        eyebrow="Investment"
        heading={"Invest In\nWhat Lasts."}
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop"
        supporting="Real estate that holds its value starts with decisions made long before construction."
      />

      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="Our Approach"
          heading={"Five Principles\nBehind Every Project."}
          className="mb-16"
        />
        <div className="divide-y divide-ink/10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr_220px] gap-8 md:gap-14 py-12"
            >
              <h3 className="text-[22px] font-normal text-ink">{pillar.title}</h3>
              <p className="text-[15px] text-muted leading-relaxed font-light max-w-xl">
                {pillar.copy}
              </p>
              <div className="md:text-right">
                <p className="text-[30px] font-light text-gold">{pillar.stat}</p>
                <p className="text-[11px] tracking-[0.1em] uppercase text-muted mt-1 md:ml-auto max-w-[180px]">
                  {pillar.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <ImageReveal
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1400&auto=format&fit=crop"
            alt="PCM Sky Loft investment property"
            className="aspect-[4/5]"
          />
          <SectionHeading
            eyebrow="For NRI Investors"
            heading={"Invest From\nAnywhere."}
            supporting="Our investment desk manages FEMA-compliant documentation, virtual property tours and power-of-attorney based transactions for buyers based outside India."
            light
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
