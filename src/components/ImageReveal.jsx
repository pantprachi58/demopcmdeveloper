import useReveal from "../hooks/useReveal";

export default function ImageReveal({ src, alt, className = "", imgClassName = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-all duration-[1400ms] ease-premium ${
          visible ? "scale-100 opacity-100" : "scale-110 opacity-0"
        } ${imgClassName}`}
      />
    </div>
  );
}
