"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const timelineData = [
  { year: "1997", text: "Mega Putra was founded with a vision to provide high-quality printing and packaging solutions." },
  { year: "2000", text: "Expanded production with advanced printing machinery." },
  { year: "2003", text: "Upgraded ink facilities and color standards for higher precision and consistency." },
  { year: "2014", text: "Opened a new manufacturing facility to meet growing demand." },
  { year: "2019", text: "Earned recognition for quality and innovation in packaging solutions." },
  { year: "2025", text: "Expanding to global markets with sustainable packaging." }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const [progress, setProgress] = useState(0);

  const cardWidth = 350; // Lebar kartu
  const containerPadding = 32; // Padding container agar tidak terpotong
  const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200; // Lebar layar default 1200 jika SSR

  useEffect(() => {
    if (containerRef.current) {
      const maxScroll = (timelineData.length - 1) * cardWidth;
      const remainingSpace = viewportWidth - cardWidth - containerPadding;
      const adjustedMaxOffset = Math.max(0, maxScroll - remainingSpace);

      const newX = Math.min(activeIndex * cardWidth, adjustedMaxOffset);

      controls.start({ x: -newX, transition: { duration: 0.5, ease: "easeInOut" } });

      // Update progress bar sesuai dengan kartu yang aktif
      setProgress(activeIndex / (timelineData.length - 1));
    }
  }, [activeIndex, controls, viewportWidth]);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const direction = offset + velocity > 0 ? -1 : 1; // Tentukan arah swipe

    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, timelineData.length - 1));
    });
  };

  return (
    <section className="relative w-full py-12 bg-white">
      {/* Timeline */}
      <div className="overflow-hidden relative">
        <motion.div
          ref={containerRef}
          className="flex space-x-6 px-8 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -((timelineData.length - 1) * cardWidth), right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`min-w-[280px] md:min-w-[320px] lg:min-w-[350px] p-6  shadow-lg transition-all duration-300 ${
                index === activeIndex ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              whileTap={{ scale: 1.05 }}
              onClick={() => setActiveIndex(index)}
            >
              <h3 className="text-lg font-bold">{item.year}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrollbar */}
      <div className="mt-4 ml-8 w-1/3 relative h-1 bg-gray-300 rounded">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-blue-500 rounded"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </section>
  );
}
