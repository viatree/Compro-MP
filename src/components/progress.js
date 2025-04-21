import { useState } from "react";

export default function Progress() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    "Inquiry",
    "Quotation",
    "Packaging Development",
    "Production & Finishing",
    "Shipment",
  ];

  const stepContents = [
    "Share your packaging requirements with our team.",
    "Receive a customised quotation based on your specifications.",
    "Create samples and prototypes for approval (optional).",
    "Complete in-house production from printing to final packaging.",
    "On-time delivery to your location, ready for market launch.",
  ];

  return (
    <section className="relative w-full py-6 px-8 md:px-16 lg:px-24 xl:px-43 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          HOW IT WORKS
        </h1>
      </div>

      {/* Steps + Content */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Step list */}
        <div className="flex flex-col items-start md:w-1/4 space-y-6">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center space-x-3 ${
                  isActive
                    ? "font-bold text-[var(--color-primary)]"
                    : "text-[var(--color-text)]"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-white"
                  }`}
                >
                  {index + 1}
                </div>
                <span>{step}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Content Area */}
        <div className="md:w-3/4">
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2 text-[var(--color-primary)]">
              {steps[activeIndex]}
            </h2>
            <p className="text-[var(--color-text)]">
              {stepContents[activeIndex]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
