import { ArrowRight } from "lucide-react";

/**
 * Premium text-link style button used across the site.
 * variant: "solid" | "outline" | "text"
 */
export default function Button({
  children,
  variant = "solid",
  arrow = true,
  className = "",
  as: Component = "button",
  ...props
}) {
  const base =
    "group inline-flex items-center gap-3 text-[13px] tracking-[0.18em] uppercase font-medium transition-colors duration-300";

  const variants = {
    solid:
      "bg-ink text-ivory px-8 py-4 hover:bg-gold hover:text-ink",
    outline:
      "border border-ink/70 text-ink px-8 py-4 hover:border-gold hover:text-gold",
    text: "text-ink border-b border-ink/30 pb-1 hover:border-gold hover:text-gold",
  };

  return (
    <Component className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={15}
          strokeWidth={1.5}
          className="transition-transform duration-300 ease-premium group-hover:translate-x-1.5"
        />
      )}
    </Component>
  );
}
