import { useState } from "react";

export default function Progress() {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    "Sign Up",
    "Invite People",
    "Create Training",
    "Publish & Enroll",
  ];

  return (
    <section className="relative w-full  py-6 px-8 md:px-16 lg:px-24 xl:px-43 bg-white">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          How Rise works
        </h1>
        <p className="text-start text-justify text-[var(--color-text)]">
          Prepare to fall in love. Rise makes online training easy and delightful for everyone.
          And it takes just minutes to get started.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition  text-[var(--color-text)]">
          Contact Us
        </button>
      </div>

      {/* Steps + Content */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Step list */}
        <div className="flex flex-col items-start md:w-1/4 space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer flex items-center space-x-3 ${
                activeIndex === index ? "font-bold text-orange-500" : "text-gray-700"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                  activeIndex === index ? "bg-orange-500 text-white" : "bg-white"
                }`}
              >
                {index + 1}
              </div>
              <span>{step}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="md:w-3/4">
          {activeIndex !== null && (
            <div className="p-6 border rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2 text-[var(--color-primary)]">
                {steps[activeIndex]}
              </h2>
              <p className="text-gray-600">
                {/** Isi bisa diganti sesuai kebutuhan */}
                This is the content for <strong>{steps[activeIndex]}</strong>. Here you can explain more details about this step in your process.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
