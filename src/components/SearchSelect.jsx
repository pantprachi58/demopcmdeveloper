import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * Dropdown used inside the hero search console.
 * Custom-rendered (not a native <select>) so the open panel can be styled
 * to match the rest of the console.
 */
export default function SearchSelect({ label, value, onChange, options, border }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={`relative ${
        border
          ? "md:border-r border-ink/10 border-b md:border-b-0"
          : "border-b md:border-b-0 border-ink/10"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`w-full text-left px-8 py-6 transition-colors duration-200 ${
          open ? "bg-beige/40" : "hover:bg-beige/20"
        }`}
      >
        <span className="block text-[10px] tracking-[0.18em] uppercase text-muted mb-2">
          {label}
        </span>
        <span className="flex items-center justify-between gap-4">
          <span className="text-[15px] text-ink truncate">{value}</span>
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            className={`shrink-0 text-ink/60 transition-transform duration-300 ease-premium ${
              open ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={label}
          className="absolute left-0 right-0 top-full z-50 bg-ivory shadow-[0_24px_60px_rgba(0,0,0,0.18)] py-3 max-h-74 overflow-y-auto"
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === value}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full text-left px-8 py-3 text-[15px] transition-colors duration-200 hover:bg-beige/50 ${
                  option === value ? "text-gold" : "text-ink"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
