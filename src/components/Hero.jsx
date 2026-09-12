import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Button from "./Button";
import SearchSelect from "./SearchSelect";
import {
  LOCATION_OPTIONS,
  TYPE_OPTIONS,
  BUDGET_OPTIONS,
  DEFAULT_FILTERS,
  filtersToSearchParams,
} from "../utils/filters";

export default function Hero() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const update = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));
  const searchHref = `/properties?${filtersToSearchParams(filters)}`;

  return (
    <section className="relative w-full overflow-hidden md:h-screen md:min-h-[720px]">
      {/* Backdrop is clipped on its own so the search console below can overflow */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="PCM Developers luxury residence at dusk"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-ink/10" />
      </div>

      <div className="relative max-w-8xl mx-auto px-6 pt-32 pb-10 sm:pt-36 md:h-full md:px-10 md:pt-0 md:pb-48 flex min-h-[560px] flex-col justify-end">
        <span className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-gold mb-5 md:mb-6">
          PCM Developers
        </span>
        <h1 className="text-ivory font-light text-[40px] leading-[1.08] sm:text-[58px] md:text-[84px] max-w-3xl">
          A Higher Standard
          <br />
          <span className="italic font-extralight">Legacy In</span>
          <br />
          The Making.
        </h1>
        <p className="mt-6 md:mt-8 max-w-md text-ivory/75 text-[15px] md:text-[16px] leading-relaxed font-light">
          Crafting exceptional residences where architecture, nature and
          modern living come together.
        </p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-6 sm:gap-8">
          <Button
            as={Link}
            to="/properties"
            className="!bg-ivory !text-ink hover:!bg-gold justify-center sm:justify-start"
          >
            Explore Residences
          </Button>
          <Link
            to="/philosophy"
            className="text-[13px] tracking-[0.14em] uppercase text-ivory/80 border-b border-ivory/30 pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Search console */}
      <div className="relative z-30 pb-8 md:absolute md:bottom-0 md:left-0 md:right-0 md:translate-y-1/2 md:pb-0">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-ivory shadow-[0_20px_60px_rgba(0,0,0,0.25)] grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto]">
            <SearchSelect
              label="Location"
              value={filters.city}
              onChange={update("city")}
              options={LOCATION_OPTIONS}
              border
            />
            <SearchSelect
              label="Property Type"
              value={filters.type}
              onChange={update("type")}
              options={TYPE_OPTIONS}
              border
            />
            <SearchSelect
              label="Budget"
              value={filters.budget}
              onChange={update("budget")}
              options={BUDGET_OPTIONS}
            />
            <Link
              to={searchHref}
              className="group flex items-center justify-center gap-3 bg-ink text-ivory px-8 py-5 md:py-0 text-[12px] tracking-[0.16em] uppercase font-medium hover:bg-gold hover:text-ink transition-colors duration-300"
            >
              <Search size={15} strokeWidth={1.5} />
              Find Your Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
