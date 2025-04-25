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
      description: "Share your packaging requirements with our team.",
      icon: <Briefcase className="h-15 w-15 text-[var(--color-primary)] " />,
    },
    {
      description:
        "Receive a customised quotation based on your specifications.",
      icon: <Calculator className="h-15 w-15 text-[var(--color-primary)] " />,
    },
    {
      description:
        "Create samples and prototypes for approval (optional).",
      icon: <PackageOpen className="h-15 w-15 text-[var(--color-primary)] " />,
    },
    {
      description:
        "Complete in-house production from printing to final packaging.",
      icon: <CheckCircle className="h-15 w-15 text-[var(--color-primary)] " />,
    },
    {
      description:
        "On-time delivery to your location, ready for market launch.",
      icon: <Truck className="h-15 w-15 text-[var(--color-primary)] " />,
    },
  ];

  return (
    <section className="relative w-full py-6 px-8 md:px-16 lg:px-24 xl:px-43 bg-white">
      {/* Heading */}
      <div className="text-left mb-10">
        <h1 className="text-3xl font-bold text-[var(--color-primary)]">
          HOW IT WORKS
        </h1>
      </div>

      {/* Steps + Content */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Step list (kiri) */}
        <div className="flex flex-col items-start md:w-1/4 space-y-6">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center space-x-3 transition-all duration-300 ${
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

        {/* Dynamic Card Content (kanan) */}
        <div className="md:w-3/6 flex flex-col items-center -mt-4 pl-20">
          <div className="p-8 bg-white rounded-xl shadow-xl text-center flex flex-col items-center transition-all duration-300 ease-in-out border">
            <div className="mb-4">{stepContents[activeIndex].icon}</div>
            <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
              {steps[activeIndex]}
            </h2>
            <p className="text-gray-600 text-md max-w-md">
              {stepContents[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
