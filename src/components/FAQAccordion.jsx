import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-6 py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[17px] md:text-[19px] font-normal text-ink">
                {faq.question}
              </span>
              <Plus
                size={20}
                strokeWidth={1.5}
                className={`shrink-0 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-500 ease-premium"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-7 text-[15px] leading-relaxed text-muted max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
