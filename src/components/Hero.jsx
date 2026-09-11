import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Button from "./Button";

export default function Hero() {
  const [location, setLocation] = useState("Central Dehradun");
  const [type, setType] = useState("Boutique Villa");
  const [budget, setBudget] = useState("₹2 Cr — ₹5 Cr");

  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
        alt="PCM Developers luxury residence at dusk"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-ink/10" />

      <div className="relative h-full max-w-8xl mx-auto px-6 md:px-10 flex flex-col justify-end pb-40 md:pb-48">
        <span className="text-[12px] tracking-[0.3em] uppercase text-gold mb-6">
          PCM Developers
        </span>
        <h1 className="text-ivory font-light text-[46px] leading-[1.06] sm:text-[64px] md:text-[84px] max-w-3xl">
          A Higher Standard
          <br />
          <span className="italic font-extralight">Legacy In</span>
          <br />
          The Making.
        </h1>
        <p className="mt-8 max-w-md text-ivory/70 text-[16px] leading-relaxed font-light">
          Crafting exceptional residences where architecture, nature and
          modern living come together.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Button as={Link} to="/properties" className="!bg-ivory !text-ink hover:!bg-gold">
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
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-ivory shadow-[0_20px_60px_rgba(0,0,0,0.25)] grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto]">
            <Field label="Location" value={location} onChange={setLocation} border />
            <Field label="Property Type" value={type} onChange={setType} border />
            <Field label="Budget" value={budget} onChange={setBudget} />
            <Link
              to="/properties"
              className="group flex items-center justify-center gap-3 bg-ink text-ivory px-8 py-6 md:py-0 text-[12px] tracking-[0.16em] uppercase font-medium hover:bg-gold hover:text-ink transition-colors duration-300"
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

function Field({ label, value, onChange, border }) {
  return (
    <div
      className={`px-8 py-6 ${
        border ? "md:border-r border-ink/10 border-b md:border-b-0" : "border-b md:border-b-0 border-ink/10"
      }`}
    >
      <label className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-[15px] text-ink focus:outline-none placeholder:text-muted"
      />
    </div>
  );
}
