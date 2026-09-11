import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

function FormField({ label, type = "text", name, textarea, value, onChange }) {
  const Component = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <label className="block text-[11px] tracking-[0.14em] uppercase text-muted mb-3">
        {label}
      </label>
      <Component
        name={name}
        type={type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border-b border-ink/20 pb-3 text-[15px] text-ink focus:outline-none focus:border-gold transition-colors resize-none"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading={"Get In\nTouch."}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
        supporting="Our team is available for private consultations, site visits and investment queries."
      />

      <section className="max-w-8xl mx-auto px-6 md:px-10 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
        <div>
          <SectionHeading eyebrow="Reach Us" heading={"Our\nOffice."} className="mb-12" />

          <div className="space-y-10">
            <div className="flex gap-5">
              <MapPin size={20} strokeWidth={1.5} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-[13px] tracking-[0.1em] uppercase text-muted mb-2">
                  Our Office
                </h4>
                <p className="text-[15px] text-ink leading-relaxed font-light">
                  Bansal Plaza, 1st Floor
                  <br />
                  Near Drone Vatika
                  <br />
                  Sahastradhara Road
                  <br />
                  Dehradun, India — 248001
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Phone size={20} strokeWidth={1.5} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-[13px] tracking-[0.1em] uppercase text-muted mb-2">
                  Call Us
                </h4>
                <p className="text-[15px] text-ink leading-relaxed font-light">
                  +91 6397056741
                  <br />
                  +91 6397057662
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail size={20} strokeWidth={1.5} className="text-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-[13px] tracking-[0.1em] uppercase text-muted mb-2">
                  Email
                </h4>
                <p className="text-[15px] text-ink leading-relaxed font-light">
                  info@pcmdevelopers.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-ink/10 p-8 md:p-12">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-start py-16">
              <p className="text-[26px] font-light text-ink mb-3">Thank you.</p>
              <p className="text-[15px] text-muted font-light max-w-sm">
                Your enquiry has been received. A member of our team will be in touch
                within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <FormField label="Your Name" name="name" value={form.name} onChange={onChange} />
              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
              />
              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
              />
              <FormField
                label="Your Message"
                name="message"
                textarea
                value={form.message}
                onChange={onChange}
              />
              <Button type="submit" className="w-full justify-center mt-2">
                Send Enquiry
              </Button>
            </form>
          )}
        </div>
      </section>

      <section className="h-[420px] w-full relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop"
          alt="Map location near Sahastradhara Road, Dehradun"
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
          <div className="bg-ivory px-8 py-6 text-center">
            <p className="text-[13px] tracking-[0.1em] uppercase text-ink">
              Sahastradhara Road, Dehradun
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
