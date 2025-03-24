"use client";

import { useState, useRef, useEffect, useMemo } from "react";
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
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const cardWidth = 350; // Width of each card
  const containerPadding = 12; // Padding of the container
  const extraPadding = 350; // Ensure last card is fully visible

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxScroll = useMemo(() => (timelineData.length - 1) * cardWidth, []);
  const adjustedMaxOffset = useMemo(
    () => Math.max(0, maxScroll - (viewportWidth - cardWidth - containerPadding - extraPadding)),
    [viewportWidth, maxScroll]
  );

  useEffect(() => {
    const newX = Math.min(activeIndex * cardWidth, adjustedMaxOffset);
    controls.start({ x: -newX, transition: { duration: 0.8, ease: "easeInOut" } });
    setProgress((activeIndex + 1) / timelineData.length);
  }, [activeIndex, controls, adjustedMaxOffset]);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const sensitivity = 100; // Adjust sensitivity for better interaction

    if (Math.abs(offset) > sensitivity || Math.abs(velocity) > 300) {
      const direction = offset + velocity > 0 ? -1 : 1;
      setActiveIndex((prevIndex) =>
        Math.max(0, Math.min(prevIndex + direction, timelineData.length - 1))
      );
    }
  };

  const handleWheelScroll = (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    setActiveIndex((prevIndex) =>
      Math.max(0, Math.min(prevIndex + direction, timelineData.length - 1))
    );
  };

  return (
    <section className="relative w-full py-12 bg-white px-6 pl-43" onWheel={handleWheelScroll}>
      {/* Timeline */}
      <div className="overflow-hidden relative">
        <motion.div
          ref={containerRef}
          className="flex space-x-6 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -adjustedMaxOffset, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {timelineData.map((item, index) => (
            <motion.div
            key={index}
            className={`min-w-[280px] md:min-w-[320px] lg:min-w-[350px] p-6 transition-all duration-300 
              ${index === activeIndex ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-card)] text-[var(--color-text)]"} 
              hover:bg-[var(--color-darker)] hover:text-white`}
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
      <div className="mt-4 w-1/3 relative h-1 bg-gray-300 ">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-blue-500 "
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </section>
  );
}
