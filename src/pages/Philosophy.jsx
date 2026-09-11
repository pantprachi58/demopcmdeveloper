import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/CTASection";

const PRINCIPLES = [
  {
    n: "01",
    title: "Site Before Structure",
    copy: "We study light, wind and slope before a single drawing is made — every PCM residence is a response to where it stands.",
  },
  {
    n: "02",
    title: "Material Honesty",
    copy: "Stone reads as stone, wood as wood. We avoid finishes that pretend to be something they are not.",
  },
  {
    n: "03",
    title: "Space Over Square Footage",
    copy: "A well-proportioned room outperforms a larger, poorly lit one. We design for how a space feels, not just its area.",
  },
  {
    n: "04",
    title: "Craft That Outlasts Trends",
    copy: "Finishes and layouts are chosen to still feel considered twenty years from now, not just at handover.",
  },
];

export default function Philosophy() {
  return (
    <>
      <PageHero
        eyebrow="Our Philosophy"
        heading={"We Don't Just\nBuild."}
        image="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop"
        supporting="Every PCM residence starts as a question about the land it stands on, long before it becomes a plan."
      />

      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <SectionHeading
            eyebrow="Our Approach"
            heading={"Architecture As\nA Conversation."}
            supporting="We treat every commission as a conversation between the landscape, the client and the craftsmen who bring the design to life. Nothing is drawn in isolation — the mountain, the light and the family who will live there all shape the outcome."
          />
          <ImageReveal
            src="https://images.unsplash.com/photo-1600607688066-890987f19a02?q=80&w=1400&auto=format&fit=crop"
            alt="Architectural detail"
            className="aspect-[4/5]"
          />
        </div>
      </section>

      <section className="bg-beige/40 py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Guiding Principles"
            heading={"What We Hold\nOurselves To."}
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {PRINCIPLES.map((item) => (
              <div key={item.n} className="flex gap-8">
                <span className="text-[42px] font-light text-gold leading-none shrink-0">
                  {item.n}
                </span>
                <div>
                  <h3 className="text-[19px] font-normal text-ink mb-3">{item.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed font-light max-w-sm">
                    {item.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop"
          alt="PCM design studio"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative max-w-8xl mx-auto px-6 md:px-10">
          <p className="text-ivory text-[26px] md:text-[36px] font-light leading-relaxed max-w-2xl">
            &ldquo;A home should feel inevitable — as though no other design could
            have belonged to that piece of land.&rdquo;
          </p>
          <p className="mt-6 text-gold text-[13px] tracking-[0.14em] uppercase">
            PCM Design Studio
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
