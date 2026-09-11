import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonial({ testimonials, light = false }) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const go = (dir) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const textColor = light ? "text-ivory" : "text-ink";
  const mutedColor = light ? "text-ivory/60" : "text-muted";
  const borderColor = light ? "border-ivory/25" : "border-ink/20";
  const hoverColor = light ? "hover:text-gold hover:border-gold" : "hover:border-gold hover:text-gold";
  const inactiveDot = light ? "bg-ivory/25" : "bg-ink/20";

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Quote size={34} strokeWidth={1} className="mx-auto text-gold mb-8" />
      <p
        className={`text-[22px] md:text-[26px] font-light leading-relaxed ${textColor} min-h-[160px] md:min-h-[130px] transition-opacity duration-500`}
      >
        “{current.quote}”
      </p>
      <p className={`mt-8 text-[13px] tracking-[0.12em] uppercase ${textColor}`}>{current.name}</p>
      <p className={`mt-1 text-[13px] ${mutedColor}`}>{current.role}</p>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className={`w-10 h-10 rounded-full border ${borderColor} flex items-center justify-center transition-colors ${textColor} ${hoverColor}`}
        >
          <ChevronLeft size={16} strokeWidth={1.5} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-6 h-px transition-colors ${i === index ? "bg-gold" : inactiveDot}`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className={`w-10 h-10 rounded-full border ${borderColor} flex items-center justify-center transition-colors ${textColor} ${hoverColor}`}
        >
          <ChevronRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
