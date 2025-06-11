import { useState } from "react";
import {
  Briefcase,
  Calculator,
  PackageOpen,
  CheckCircle,
  Truck,
} from "lucide-react";

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
    {
      description:
        "Share your packaging requirements with our team.",
      icon: <Briefcase className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      description:
        "Receive a customised quotation based on your specifications.",
      icon: <Calculator className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      description:
        "Create samples and prototypes for approval (optional).",
      icon: <PackageOpen className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      description:
        "Complete in-house production from printing to final packaging.",
      icon: <CheckCircle className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      description: "On-time delivery to your location, ready for market launch.",
      icon: <Truck className="h-10 w-10 text-[var(--color-primary)]" />,
    },
  ];

  return (
    <section className="relative w-full px-8 py-15 px-8 md:px-16 lg:px-24 xl:px-43 bg-white">
      {/* Heading */}
      <div className="text-left mb-10">
        <h1 className="text-[40px] font-medium text-[var(--color-primary)] tracking-wide">
          How It Works
        </h1>
      </div>

      {/* Steps + Content */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Step list (Left) */}
        <div className="flex flex-col space-y-6 md:w-1/3">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center space-x-3 transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-[var(--color-primary)]"
                    : "text-[var(--color-primary)]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border text-sm font-reguler ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-primary)]"
                  }`}
                >
                  {index + 1}
                </div>
                <span>{step}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Content (Right) */}
        <div className="w-full md:w-2/3">
          <div className="bg-[#E6F6FC] p-6 md:p-10 flex items-start gap-5 shadow-md">
            <div>{stepContents[activeIndex].icon}</div>
            <div>
              <h2 className="text-[20px] font-reguler text-gray-900 mb-2 ">
                {steps[activeIndex]}
              </h2>
              <p className="text-[var(--color-text)] leading-relaxed text-[16px] font-light md:text-base">
                {stepContents[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}