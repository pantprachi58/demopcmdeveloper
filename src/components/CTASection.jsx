import Button from "./Button";
import useReveal from "../hooks/useReveal";

export default function CTASection() {
  const [ref, visible] = useReveal();

  return (
    <section className="bg-ink text-ivory">
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div
          ref={ref}
          className={`px-6 md:px-16 py-24 md:py-32 flex flex-col justify-center reveal ${
            visible ? "is-visible" : ""
          }`}
        >
          <h2 className="text-[38px] md:text-[52px] font-light leading-[1.12]">
            Schedule a
            <br />
            Private
            <br />
            Consultation.
          </h2>
          <p className="mt-7 max-w-md text-ivory/60 text-[15px] leading-relaxed font-light">
            Whether you&rsquo;re looking for your dream home or a smart investment, our
            team is ready to guide you every step of the way.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Button
              as="a"
              href="/contact"
              className="!bg-gold !text-ink hover:!bg-ivory"
            >
              Book a Consultation
            </Button>
            <a
              href="tel:+916397056741"
              className="text-[14px] tracking-[0.08em] text-ivory/70 hover:text-ivory transition-colors"
            >
              Call +91 6397056741
            </a>
          </div>
        </div>
        <div className="h-72 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
            alt="PCM luxury residence interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
