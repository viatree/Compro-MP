import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the recruitment process like?",
    answer: "The recruitment process involves application, interview, assessment, final interview, and onboarding."
  },
  {
    question: "Do you offer internships?",
    answer: "Yes, we offer internship programs for students and fresh graduates."
  },
  {
    question: "I didn’t get selected. Can I apply again in the future?",
    answer: "Yes, you can apply again after a certain period based on the role's requirements."
  },
  {
    question: "What’s the work culture like?",
    answer: "Our work culture promotes collaboration, innovation, and continuous learning."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto py-10 px-6 md:px-20 flex flex-col md:flex-row ml-26 items-start">
      {/* FAQ Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-[var(--color-primary)] text-[34px] font-semibold mb-4 border-b-4 border-[var(--color-primary)] pb-2">
          FAQ (Frequently Asked Questions)
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

      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-6 mr-52 md:mt-14 md:pl-10">
        <img
          src="/images/pict9.png"
          alt="Office Culture"
          className="w-full shadow-md"
        />
      </div>
    </section>
  );
}
