"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/images/tech.png",
  "/images/tech2.png",
  "/images/tech3.png",
  "/images/tech.png",
  "/images/tech2.png",
];

export default function TechnologySection() {
  const containerRef = useRef(null);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  useEffect(() => {
    const updateMaxScrollWidth = () => {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth;
        const offsetWidth = containerRef.current.offsetWidth;
        setMaxScrollWidth(scrollWidth - offsetWidth + 50); // Tambahkan ekstra padding
      }
    };

    updateMaxScrollWidth();
    window.addEventListener("resize", updateMaxScrollWidth);

    return () => {
      window.removeEventListener("resize", updateMaxScrollWidth);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden relative">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] text-center">
        Our Technology
      </h1>
      <p className="mt-4 text-[var(--color-text)] text-center px-4">
        We use advanced printing and packaging machines from Japan and Germany, ensuring precision, color accuracy, and high-quality results.
      </p>

      {/* Slider Section */}
      <div className="w-full overflow-x-hidden mt-6">
        <motion.div
          ref={containerRef}
          className="flex cursor-grab active:cursor-grabbing space-x-4"
          drag="x"
          dragConstraints={{ right: 0, left: -maxScrollWidth }}
        >
          {images.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              className="min-w-[70vw] md:min-w-[50vw] flex-shrink-5"
              onContextMenu={(e) => e.preventDefault()} // Blokir klik kanan
              onDragStart={(e) => e.preventDefault()} // Blokir drag
              onMouseDown={(e) => e.preventDefault()} // Blokir klik
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
