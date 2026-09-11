import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import useReveal from "../hooks/useReveal";

const statusStyles = {
  AVAILABLE: "bg-ivory text-ink",
  "NEW LAUNCH": "bg-gold text-ink",
  "SOLD OUT": "bg-ink/80 text-ivory",
};

export default function PropertyCard({ property, size = "default" }) {
  const [ref, visible] = useReveal();
  const tall = size === "large";

  return (
    <Link
      to={`/properties/${property.id}`}
      ref={ref}
      className={`group block reveal ${visible ? "is-visible" : ""}`}
    >
      <div className={`relative overflow-hidden ${tall ? "aspect-[4/5]" : "aspect-[5/6]"}`}>
        <img
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-premium group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-70" />
        <span
          className={`absolute top-5 left-5 text-[10px] tracking-[0.18em] uppercase font-medium px-3 py-1.5 ${
            statusStyles[property.status]
          }`}
        >
          {property.status}
        </span>
        <span className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight size={16} strokeWidth={1.5} className="text-ink" />
        </span>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] tracking-[0.16em] uppercase text-muted mb-1.5">
            {property.location}
          </p>
          <h3 className="text-[19px] font-normal text-ink group-hover:text-gold transition-colors duration-300">
            {property.name}
          </h3>
          <p className="mt-1.5 text-[13px] text-muted font-light">
            {property.bhk} &middot; {property.area}
          </p>
        </div>
        <p className="text-[17px] font-light text-ink whitespace-nowrap">{property.price}</p>
      </div>
    </Link>
  );
}
