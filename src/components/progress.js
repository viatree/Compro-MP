import { useState } from "react";

export default function Progress() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleStepClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative flex flex-col items-center w-full overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">
        How It Works
      </h1>

      <div className="relative w-full">
        {/* Progress Bar Container */}
        <div className="w-full bg-[#29a0da] h-26 flex items-center justify-between px-6 md:px-12 lg:px-16 xl:px-20 relative text-lg">
          
          {/* Progress Line (SVG) */}
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <image href="/images/line.png" x="10%" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="30%" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="50%" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="70%" y="-100" width="65" height="300" />
            <image href="/images/line.png" x="90%" y="-100" width="65" height="300" />
          </svg>

          {/* Progress Steps */}
          <span className="text-white font-bold">Inquiry</span>
          <span className="text-white font-bold">Quotation</span>
          <span className="text-white font-bold">Development</span>
          <span className="text-white font-bold">Production</span>
          <span className="text-white font-bold">Shipment</span>
        </div>
      </div>
    </section>
  );
}
