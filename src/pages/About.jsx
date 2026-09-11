import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import CTASection from "../components/CTASection";
import { testimonials } from "../data/properties";

const TIMELINE = [
  {
    year: "2010",
    copy: "PCM Developers founded, with a single residential project in Dehradun.",
  },
  {
    year: "2015",
    copy: "Expansion into premium residential developments across the Doon valley.",
  },
  {
    year: "2020",
    copy: "Introduction of smart-living residences with integrated home automation.",
  },
  {
    year: "2026",
    copy: "15+ years of creating exceptional homes across four cities.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About PCM"
        heading={"Building\nA Legacy."}
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop"
        supporting="A decade and a half spent building homes that outlast trends."
      />

      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <ImageReveal
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop"
            alt="PCM Developers founding site"
            className="aspect-[4/5] lg:order-1"
          />
          <SectionHeading
            eyebrow="Our Origin"
            heading={"Founded On A\nSingle Idea."}
            supporting="PCM Developers began with a conviction that Dehradun deserved residences built to the same standard as anywhere in the world — without losing the character of the hills they sit in. Every project since has carried that founding brief forward."
          />
        </div>
      </section>

      <section className="bg-beige/40 py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading eyebrow="Milestones" heading={"Fifteen Years\nIn The Making."} className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {TIMELINE.map((item, i) => (
              <div key={item.year} className="border-t border-ink/15 pt-6 relative">
                <p className="text-[34px] font-light text-ink mb-4">{item.year}</p>
                <p className="text-[14px] text-muted leading-relaxed font-light">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading eyebrow="By The Numbers" heading={"A Track Record\nThat Speaks."} className="mb-16" />
        <Stats />
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            heading={"What Our Clients\nSay."}
            align="center"
            light
            className="mb-16"
          />
          <Testimonial testimonials={testimonials} light />
        </div>
      </section>

      <CTASection />
    </>
  );
}
