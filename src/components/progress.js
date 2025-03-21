import { useState } from "react";

export default function Progress() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative flex flex-col items-center w-full">
      <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">
        How It Works
      </h1>

      <div className="relative w-screen max-w-full">
        <div className="w-full bg-[#29a0da] h-26 flex items-center justify-between md:px-16 lg:px-24 xl:px-47 relative text-lg">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/line.png" x="120" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="360" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="650" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="880" y="-100" width="65" height="300" />
          </svg>

          <span className="text-white font-bold ">Inquiry</span>
          <span className="text-white font-bold ">Quotation</span>
          <span className="text-white font-bold ">Development</span>
          <span className="text-white font-bold ">Production</span>
          <span className="text-white font-bold">Shipment</span>
        </div>
      </div>
    </section>
  );
}
