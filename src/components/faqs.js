import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our minimum order quantity varies depending on product specifications, materials, and finishes. Please contact us directly for detailed information."
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order by contacting our sales team directly via email or phone. Our team will guide you through the ordering process, from consultation to final delivery."
  },
  {
    question: "What materials and finishes are available?",
    answer: "We offer a wide variety of materials, including ivory board, duplex board, art carton, FSC-certified paper, kraft paper, and specialty textured papers. Finishing options include hot stamping, embossing, spot UV, lamination, and more. Please refer to our 'Material & Finishing Options' section for detailed information."
  },
  {
    question: "Do you offer sustainable packaging solutions?",
    answer: "Yes, sustainability is central to our operations. We provide FSC-certified paper, recycled materials, water-based coatings, and continuously implement practices to minimise environmental impact."
  },
  {
    question: "Can you provide packaging prototypes or samples?",
    answer: "Absolutely. We offer rapid prototyping using flatbed cutter technology, allowing clients to preview packaging designs and test compatibility before mass production. Blank samples produced via die-cutting boards and printed samples are also available upon request and are chargeable."   },
  {
    question: "Do you have industry certifications?",
    answer: "Yes, PT Mega Putra is certified to ISO 9001:2015, FSC Certification, and Indonesian Halal Certification. We have also successfully completed a Disney ILS audit."
  },
  {
    question: "What industries do you specialise in?",
    answer: "Our expertise spans multiple industries including cosmetics, pharmaceuticals, FMCG, automotive, food, and stationery."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-start">
      {/* FAQ Content */}
      <div className="w-full">
        <h2 className="text-[var(--color-primary)] text-[34px] font-semibold mb-4 border-b-4 border-[var(--color-primary)] pb-2">
        Frequently Asked Questions (FAQS)
        </h2>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-3 border-[var(--color-text25)]">
              <button
                className="w-full text-left flex justify-between items-center py-4 text-lg font-semibold focus:outline-none text-[var(--color-text)]"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus size={34} className="text-[var(--color-primary)]" />
                ) : (
                  <Plus size={34} className="text-[var(--color-primary)]" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-md text-[var(--color-text)] pb-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
