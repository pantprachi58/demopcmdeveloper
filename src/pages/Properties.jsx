import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "../components/PageHero";
import PropertyFilter from "../components/PropertyFilter";
import PropertyGrid from "../components/PropertyGrid";
import CTASection from "../components/CTASection";
import { properties } from "../data/properties";

function matchesBudget(priceValue, budget) {
  if (budget === "Under ₹3 Cr") return priceValue < 30000000;
  if (budget === "₹3 Cr – ₹5 Cr") return priceValue >= 30000000 && priceValue <= 50000000;
  if (budget === "Above ₹5 Cr") return priceValue > 50000000;
  return true;
}

export default function Properties() {
  const [filters, setFilters] = useState({
    city: "All Locations",
    type: "All Types",
    budget: "Any Budget",
    status: "All Status",
  });
  const [view, setView] = useState("grid");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.city !== "All Locations" && p.city !== filters.city) return false;
      if (filters.type !== "All Types" && p.type !== filters.type) return false;
      if (filters.status !== "All Status" && p.status !== filters.status) return false;
      if (!matchesBudget(p.priceValue, filters.budget)) return false;
      return true;
    });
  }, [filters]);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        heading={"Exceptional\nAddresses."}
        image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop"
        supporting="Every residence in our portfolio is selected, designed and built to a single standard — ours."
      />

      <section className="max-w-8xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <PropertyFilter
          filters={filters}
          setFilters={setFilters}
          view={view}
          setView={setView}
          resultCount={filtered.length}
        />

        {view === "grid" ? (
          <PropertyGrid properties={filtered} />
        ) : (
          <div className="flex flex-col divide-y divide-ink/10">
            {filtered.map((property) => (
              <Link
                to={`/properties/${property.id}`}
                key={property.id}
                className="group flex flex-col sm:flex-row gap-6 sm:gap-10 py-8 items-start"
              >
                <div className="w-full sm:w-64 aspect-[4/3] overflow-hidden shrink-0">
                  <img
                    src={property.image}
                    alt={property.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full">
                  <div>
                    <p className="text-[11px] tracking-[0.16em] uppercase text-muted mb-2">
                      {property.location} &middot; {property.status}
                    </p>
                    <h3 className="text-[22px] font-normal text-ink group-hover:text-gold transition-colors">
                      {property.name}
                    </h3>
                    <p className="mt-2 text-[14px] text-muted font-light">
                      {property.bhk} &middot; {property.area}
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <p className="text-[18px] font-light text-ink">{property.price}</p>
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-ink/40 transition-all duration-300 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="py-24 text-center text-[15px] text-muted">
                No residences match your current filters. Try adjusting your search.
              </p>
            )}
          </div>
        )}
      </section>

      <CTASection />
    </>
  );
}
