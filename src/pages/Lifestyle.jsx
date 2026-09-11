import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/CTASection";

const SECTIONS = [
  {
    label: "Architecture",
    heading: "Structures That Read The Land.",
    copy: "Rooflines, orientation and massing are drawn from the contours of each site — never a repeated template.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Interiors",
    heading: "Warm Materials, Quiet Palettes.",
    copy: "Oak, limestone and brushed brass form a restrained material language that runs through every residence.",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Wellness",
    heading: "Space To Slow Down.",
    copy: "Courtyards, natural light and cross-ventilation are treated as essential — not optional additions.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Security",
    heading: "Protection, Unobtrusive.",
    copy: "Biometric access and intelligent surveillance are integrated so discreetly they disappear into the design.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Technology",
    heading: "Smart, Not Showy.",
    copy: "Home automation is pre-wired into every residence, controlling climate, lighting and access from a single interface.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
  },
  {
    label: "Landscape",
    heading: "Gardens As Architecture.",
    copy: "Landscaping is designed alongside the building, not after it — native planting chosen to mature with the property.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Lifestyle() {
  return (
    <>
      <PageHero
        eyebrow="Lifestyle"
        heading={"Living\nElevated."}
        image="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2000&auto=format&fit=crop"
        supporting="A look inside the details that define everyday life in a PCM residence."
      />

      {SECTIONS.map((section, i) => (
        <section
          key={section.label}
          className={`max-w-8xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center ${
            i % 2 === 1 ? "" : ""
          }`}
        >
          <div className={i % 2 === 1 ? "lg:order-2" : ""}>
            <SectionHeading
              eyebrow={section.label}
              heading={section.heading}
              supporting={section.copy}
            />
          </div>
          <ImageReveal
            src={section.image}
            alt={section.heading}
            className={`aspect-[4/5] ${i % 2 === 1 ? "lg:order-1" : ""}`}
          />
        </section>
      ))}

      <CTASection />
    </>
  );
}
