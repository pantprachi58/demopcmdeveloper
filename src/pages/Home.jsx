import { Link } from "react-router-dom";
import { ArrowUpRight, Wind, ShieldCheck, Waves } from "lucide-react";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import Stats from "../components/Stats";
import PropertyCard from "../components/PropertyCard";
import Testimonial from "../components/Testimonial";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import ImageReveal from "../components/ImageReveal";
import Button from "../components/Button";
import useReveal from "../hooks/useReveal";
import { properties, propertyCategories, testimonials, faqs } from "../data/properties";

export default function Home() {
  const featured = properties.slice(0, 3);
  const [philRef, philVisible] = useReveal();

  return (
    <>
      <Hero />

      {/* Spacer for the overlapping search console */}
      <div className="h-24 md:h-20" />

      {/* Brand story */}
      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <SectionHeading
            eyebrow="01 — Our Philosophy"
            heading={"We Don't Just\nBuild.\nWe Articulate."}
            supporting="For over a decade, PCM Developers has been the silent force behind the city's most iconic skylines. We believe that a home is more than square footage — it is a canvas for your life's greatest moments."
          />
          <div ref={philRef} className={`reveal ${philVisible ? "is-visible" : ""}`}>
            <ImageReveal
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop"
              alt="PCM Developers signature architecture"
              className="aspect-[4/5]"
            />
          </div>
        </div>
        <div className="mt-20 md:mt-28">
          <Stats />
        </div>
      </section>

      {/* Property categories */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Portfolio"
            heading={"Find Your\nPlace."}
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {propertyCategories.map((cat) => (
              <Link
                to="/properties"
                key={cat.name}
                className="group relative overflow-hidden aspect-[3/4] block"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div className="transition-transform duration-300 group-hover:translate-x-1">
                    <p className="text-ivory text-[16px] font-normal leading-tight">
                      {cat.name}
                    </p>
                    <p className="text-ivory/60 text-[11px] tracking-[0.1em] uppercase mt-1">
                      {cat.count}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="text-ivory opacity-0 -translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Curated residences */}
      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Selected Works"
            heading={"Curated\nResidences."}
            supporting="A collection of addresses designed for those who expect more."
          />
          <Button as={Link} to="/properties" variant="outline" className="shrink-0">
            View All Residences
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Lifestyle / signature features */}
      <section className="bg-ink text-ivory py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Signature Details"
            heading={"Uncompromised\nLifestyle."}
            supporting="Every PCM residence is designed around the details that transform everyday living into something exceptional."
            light
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
              {
                icon: Wind,
                title: "Smart Ventilation",
                copy: "Advanced air purification systems integrated into every room for 24/7 fresh air.",
                image:
                  "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop",
              },
              {
                icon: ShieldCheck,
                title: "Ironclad Security",
                copy: "Biometric access and intelligent surveillance designed to protect what matters most.",
                image:
                  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
              },
              {
                icon: Waves,
                title: "Infinity Pools",
                copy: "Temperature-controlled rooftop pools with panoramic views.",
                image:
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((feature) => (
              <div key={feature.title} className="group relative overflow-hidden aspect-[4/5]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/55" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <feature.icon size={22} strokeWidth={1.2} className="text-gold mb-5" />
                  <h3 className="text-[19px] font-normal text-ivory">{feature.title}</h3>
                  <p className="mt-3 text-[14px] text-ivory/65 leading-relaxed font-light max-w-xs">
                    {feature.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured estates - asymmetric */}
      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading eyebrow="Spotlight" heading={"Featured\nEstates."} className="mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <Link
            to="/properties/pcm-veridian"
            className="group relative overflow-hidden aspect-[4/5] lg:aspect-auto lg:col-span-3 block"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
              alt="PCM Veridian"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 p-10">
              <p className="text-gold text-[12px] tracking-[0.16em] uppercase mb-3">Bangalore</p>
              <h3 className="text-ivory text-[30px] md:text-[38px] font-light">PCM Veridian</h3>
              <p className="text-ivory/70 text-[15px] mt-3 max-w-sm font-light">
                Sustainable 4 BHK smart residences.
              </p>
              <p className="text-ivory text-[16px] mt-4">₹3.5 Cr onwards</p>
            </div>
          </Link>
          <Link
            to="/properties/sky-loft"
            className="group relative overflow-hidden aspect-[4/5] lg:col-span-2 block"
          >
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop"
              alt="The Sky Loft"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="text-gold text-[12px] tracking-[0.16em] uppercase mb-3">
                Central Dehradun
              </p>
              <h3 className="text-ivory text-[26px] font-light">The Sky Loft</h3>
              <p className="text-ivory/70 text-[14px] mt-3 max-w-xs font-light">
                Limited-edition penthouses in Central Dehradun.
              </p>
              <p className="text-ivory text-[15px] mt-4">₹5.8 Cr onwards</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Full-width architecture image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2000&auto=format&fit=crop"
          alt="Architecture that belongs to its landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative max-w-8xl mx-auto px-6 md:px-10 w-full">
          <p className="text-gold text-[12px] tracking-[0.24em] uppercase mb-6">
            Designed with intention. Built to endure.
          </p>
          <h2 className="text-ivory text-[38px] md:text-[58px] font-light leading-[1.1] max-w-2xl">
            Architecture That Belongs
            <br />
            To Its Landscape.
          </h2>
          <Link
            to="/philosophy"
            className="inline-flex items-center gap-3 mt-10 text-[13px] tracking-[0.14em] uppercase text-ivory border-b border-ivory/40 pb-1 hover:border-gold hover:text-gold transition-colors group"
          >
            Discover Our Philosophy
            <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>

      {/* Why PCM */}
      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading eyebrow="Why PCM" heading={"The PCM\nDifference."} className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              n: "01",
              title: "Designed With Intent",
              copy: "Every detail begins with purpose.",
            },
            {
              n: "02",
              title: "Built To Last",
              copy: "Materials and craftsmanship selected for longevity.",
            },
            {
              n: "03",
              title: "Locations That Matter",
              copy: "Addresses chosen for lifestyle and long-term value.",
            },
            {
              n: "04",
              title: "Service Beyond Handover",
              copy: "Our relationship continues long after the keys are delivered.",
            },
          ].map((item) => (
            <div key={item.n} className="border-t border-ink/15 pt-6">
              <p className="text-[13px] text-gold mb-8">{item.n}</p>
              <h3 className="text-[18px] font-normal text-ink mb-3">{item.title}</h3>
              <p className="text-[14px] text-muted leading-relaxed font-light">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <SectionHeading
            eyebrow="Testimonials"
            heading={"Trusted By\nFamilies."}
            align="center"
            className="mb-16"
          />
          <Testimonial testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="Frequently Asked"
          heading={"Common\nQuestions."}
          align="center"
          className="mb-16 mx-auto"
        />
        <FAQAccordion faqs={faqs} />
      </section>

      <CTASection />
    </>
  );
}
