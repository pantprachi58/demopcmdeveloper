import useReveal from "../hooks/useReveal";

/**
 * Consistent editorial section heading: optional eyebrow label,
 * large heading (supports line breaks via \n), optional supporting copy.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = "left",
  light = false,
  className = "",
}) {
  const [ref, visible] = useReveal();
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const textColor = light ? "text-ivory" : "text-ink";
  const mutedColor = light ? "text-ivory/70" : "text-muted";

  return (
    <div ref={ref} className={`flex flex-col ${alignment} ${className} reveal ${visible ? "is-visible" : ""}`}>
      {eyebrow && (
        <span
          className={`text-[12px] tracking-[0.28em] uppercase mb-5 ${
            light ? "text-gold" : "text-gold"
          } font-medium`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-light ${textColor} text-[38px] leading-[1.12] sm:text-[46px] md:text-[56px] whitespace-pre-line max-w-2xl`}
      >
        {heading}
      </h2>
      {supporting && (
        <p className={`mt-6 max-w-md text-[15px] leading-relaxed ${mutedColor}`}>
          {supporting}
        </p>
      )}
    </div>
  );
}
