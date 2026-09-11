export default function PageHero({ eyebrow, heading, image, supporting }) {
  return (
    <section className="relative h-[62vh] min-h-[440px] flex items-end overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
      <div className="relative max-w-8xl mx-auto w-full px-6 md:px-10 pb-16">
        {eyebrow && (
          <span className="block text-[12px] tracking-[0.28em] uppercase text-gold mb-5">
            {eyebrow}
          </span>
        )}
        <h1 className="text-[42px] md:text-[64px] font-light text-ivory leading-[1.08] whitespace-pre-line max-w-2xl">
          {heading}
        </h1>
        {supporting && (
          <p className="mt-6 max-w-md text-ivory/70 text-[15px] leading-relaxed font-light">
            {supporting}
          </p>
        )}
      </div>
    </section>
  );
}
