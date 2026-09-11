import useReveal from "../hooks/useReveal";

const DEFAULT_STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "1200+", label: "Happy Families" },
  { value: "18", label: "Signature Developments" },
  { value: "04", label: "Cities" },
];

export default function Stats({ stats = DEFAULT_STATS, light = false }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-10 reveal ${visible ? "is-visible" : ""}`}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`border-l ${light ? "border-ivory/20" : "border-ink/15"} pl-5`}
        >
          <p className={`text-[34px] md:text-[42px] font-light ${light ? "text-ivory" : "text-ink"}`}>
            {stat.value}
          </p>
          <p
            className={`mt-2 text-[11px] tracking-[0.16em] uppercase ${
              light ? "text-ivory/60" : "text-muted"
            }`}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
