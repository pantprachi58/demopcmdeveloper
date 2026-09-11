import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Download, MapPin } from "lucide-react";
import Button from "../components/Button";
import PropertyGrid from "../components/PropertyGrid";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { getPropertyById, properties } from "../data/properties";

const SECTIONS = ["Overview", "Architecture", "Amenities", "Floor Plans", "Location", "Specifications"];

export default function PropertyDetail() {
  const { id } = useParams();
  const property = getPropertyById(id);
  const [activeImage, setActiveImage] = useState(0);
  const [activeSection, setActiveSection] = useState("Overview");

  if (!property) return <Navigate to="/properties" replace />;

  const related = properties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <>
      <div className="pt-28 md:pt-36 max-w-8xl mx-auto px-6 md:px-10">
        <p className="text-[12px] tracking-[0.16em] uppercase text-muted mb-4 flex items-center gap-2">
          <MapPin size={13} strokeWidth={1.5} className="text-gold" />
          {property.location}
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h1 className="text-[38px] md:text-[56px] font-light text-ink leading-tight">
            {property.name}
          </h1>
          <span
            className={`inline-flex w-fit text-[11px] tracking-[0.16em] uppercase font-medium px-4 py-2 ${
              property.status === "SOLD OUT"
                ? "bg-ink text-ivory"
                : property.status === "NEW LAUNCH"
                ? "bg-gold text-ink"
                : "bg-beige text-ink"
            }`}
          >
            {property.status}
          </span>
        </div>

        {/* Gallery */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-2">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={property.gallery[activeImage]}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-2 gap-2">
            {property.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`aspect-square overflow-hidden ${
                  activeImage === i ? "ring-2 ring-gold" : ""
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
        {/* Main content */}
        <div>
          <div className="flex gap-8 border-b border-ink/10 overflow-x-auto mb-14">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`whitespace-nowrap pb-4 text-[13px] tracking-[0.1em] uppercase transition-colors border-b-2 -mb-px ${
                  activeSection === s
                    ? "text-ink border-gold"
                    : "text-muted border-transparent hover:text-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {activeSection === "Overview" && (
            <div>
              <SectionHeading eyebrow="Overview" heading="Designed To Live In." />
              <p className="mt-8 text-[15px] leading-relaxed text-muted max-w-2xl font-light">
                {property.description}
              </p>
            </div>
          )}

          {activeSection === "Architecture" && (
            <div>
              <SectionHeading eyebrow="Architecture" heading="Form Follows Landscape." />
              <p className="mt-8 text-[15px] leading-relaxed text-muted max-w-2xl font-light">
                Every elevation at {property.name} responds to its site — orientation, light
                and material chosen to work with the surrounding landscape rather than
                against it, a principle that runs through every PCM development.
              </p>
            </div>
          )}

          {activeSection === "Amenities" && (
            <div>
              <SectionHeading eyebrow="Amenities" heading="Every Detail, Considered." />
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-2xl">
                {property.amenities.map((a) => (
                  <li
                    key={a}
                    className="text-[15px] text-ink font-light border-b border-ink/10 pb-4"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === "Floor Plans" && (
            <div>
              <SectionHeading eyebrow="Floor Plans" heading="Considered Layouts." />
              <p className="mt-8 text-[15px] leading-relaxed text-muted max-w-2xl font-light mb-8">
                Detailed floor plans for {property.name} are available on request following a
                private consultation.
              </p>
              <Button as={Link} to="/contact" variant="outline">
                Request Floor Plans
              </Button>
            </div>
          )}

          {activeSection === "Location" && (
            <div>
              <SectionHeading eyebrow="Location" heading={property.location} />
              <p className="mt-8 text-[15px] leading-relaxed text-muted max-w-2xl font-light">
                Positioned within easy reach of {property.city}&rsquo;s key landmarks,
                schools and hospitals, while remaining shielded from the noise of the
                city centre.
              </p>
            </div>
          )}

          {activeSection === "Specifications" && (
            <div>
              <SectionHeading eyebrow="Specifications" heading="Built To A Standard." />
              <div className="mt-8 divide-y divide-ink/10 max-w-2xl">
                {property.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-4 gap-6">
                    <span className="text-[13px] tracking-[0.08em] uppercase text-muted shrink-0">
                      {spec.label}
                    </span>
                    <span className="text-[15px] text-ink text-right font-light">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky info panel */}
        <aside className="lg:sticky lg:top-32 h-fit border border-ink/10 p-8">
          <p className="text-[30px] font-light text-ink">{property.price}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 pb-6 border-b border-ink/10">
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted mb-1">
                Configuration
              </p>
              <p className="text-[15px] text-ink">{property.bhk}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted mb-1">Area</p>
              <p className="text-[15px] text-ink">{property.area}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted mb-1">
                Possession
              </p>
              <p className="text-[15px] text-ink">{property.possession}</p>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.14em] uppercase text-muted mb-1">Type</p>
              <p className="text-[15px] text-ink">{property.type}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <Button as={Link} to="/contact" className="w-full justify-center">
              Request Private Viewing
            </Button>
            <button className="w-full flex items-center justify-center gap-3 border border-ink/20 text-ink text-[13px] tracking-[0.1em] uppercase py-4 hover:border-gold hover:text-gold transition-colors">
              <Download size={15} strokeWidth={1.5} />
              Download Brochure
            </button>
          </div>
        </aside>
      </div>

      <section className="max-w-8xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <SectionHeading eyebrow="Related" heading={"You May Also\nConsider."} className="mb-14" />
        <PropertyGrid properties={related} />
      </section>

      <CTASection />
    </>
  );
}
