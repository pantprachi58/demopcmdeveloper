import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import { faqs } from "../data/properties";

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        heading={"Common\nQuestions."}
        image="https://images.unsplash.com/photo-1600585153990-df1a1c1b8b64?q=80&w=2000&auto=format&fit=crop"
        supporting="Answers to what prospective owners and investors ask us most."
      />

      <section className="max-w-4xl mx-auto px-6 md:px-10 py-24 md:py-32">
        <SectionHeading
          eyebrow="Frequently Asked"
          heading={"Everything You\nNeed To Know."}
          className="mb-16"
        />
        <FAQAccordion faqs={faqs} />

        <div className="mt-16 text-center">
          <p className="text-[15px] text-muted mb-6">
            Can&rsquo;t find what you&rsquo;re looking for?
          </p>
          <Button as={Link} to="/contact" variant="outline" className="mx-auto">
            Contact Our Team
          </Button>
        </div>
      </section>

      <CTASection />
    </>
  );
}
