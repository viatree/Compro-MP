"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const timelineData = [
  { year: "1997", text: "Mega Putra was founded with a vision to provide high-quality printing and packaging solutions." },
  { year: "2000", text: "Expanded production with advanced printing machinery." },
  { year: "2003", text: "Upgraded ink facilities and color standards for higher precision and consistency." },
  { year: "2014", text: "Opened a new manufacturing facility to meet growing demand." },
  { year: "2019", text: "Earned recognition for quality and innovation in packaging solutions." },
  { year: "2025", text: "Expanding to global markets with sustainable packaging." }
];

export default function Timeline() {
  const cardWidth = 350;
  const spacing = 24;
  const shiftDistance = cardWidth + spacing;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalContentWidth = timelineData.length * shiftDistance;
      setMaxDrag(Math.max(0, totalContentWidth - containerWidth));
    }
  }, []);

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    let newIndex = activeIndex;

    // Swipe ke kanan (kembali ke sebelumnya) jika belum di index 0
    if ((offset.x > 100 || velocity.x > 2) && activeIndex > 0) {
      newIndex = activeIndex - 1;
    }
    // Swipe ke kiri (maju ke berikutnya) jika belum mencapai kartu terakhir
    else if ((offset.x < -100 || velocity.x < -2) && activeIndex < timelineData.length - 1) {
      newIndex = activeIndex + 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <section className="relative w-full py-12 bg-white px-6 pl-43">
      {/* Timeline */}
      <div ref={containerRef} className="overflow-hidden relative w-full mx-auto">
        <motion.div
          className="flex space-x-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }} // Batas swipe
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{ x: -activeIndex * shiftDistance }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`min-w-[350px] p-6 shadow-md transition-all duration-300 
                ${index === activeIndex ? "bg-[var(--color-primary)] text-white scale-105" : "bg-[var(--color-card)] text-[var(--color-text)]"} 
                hover:bg-[var(--color-darker)] hover:text-white`}
            >
              <h3 className="text-lg font-bold">{item.year}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrollbar */}
      <div className="mt-4 w-1/3 relative h-1 bg-[var(--color-card)] pl-43">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-[var(--color-primary)]"
          animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
