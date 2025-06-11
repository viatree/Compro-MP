"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";

const imageData = [
  "/images/tech.png",
  "/images/tech2.png",
  "/images/tech3.png",
  "/images/tech.png",
];

export default function ImageTimeline() {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const cardWidth = 350;
  const containerPadding = 12;
  const extraPadding = 1050;

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxScroll = useMemo(() => (imageData.length - 1) * cardWidth, []);
  const adjustedMaxOffset = useMemo(
    () => Math.max(0, maxScroll - (viewportWidth - cardWidth - containerPadding - extraPadding)),
    [viewportWidth, maxScroll]
  );

  useEffect(() => {
    const newX = Math.min(activeIndex * cardWidth, adjustedMaxOffset);
    controls.start({ x: -newX, transition: { duration: 0.8, ease: "easeInOut" } });
    setProgress((activeIndex + 1) / imageData.length);
  }, [activeIndex, controls, adjustedMaxOffset]);

  const handleDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const sensitivity = 100;

    if (Math.abs(offset) > sensitivity || Math.abs(velocity) > 300) {
      const direction = offset + velocity > 0 ? -1 : 1;
      setActiveIndex((prevIndex) =>
        Math.max(0, Math.min(prevIndex + direction, imageData.length - 1))
      );
    }
  };

  const handleWheelScroll = (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) return;
    event.preventDefault();
    const direction = event.deltaY > 0 ? 1 : -1;
    setActiveIndex((prevIndex) =>
      Math.max(0, Math.min(prevIndex + direction, imageData.length - 1))
    );
  };

  return (
    <section className="relative w-full bg-white px-6 pl-43" onWheel={handleWheelScroll}>
      <h1 className=" text-[40px] font-medium text-left text-[var(--color-primary)]">
         Our Technology
        </h1>
        <h2 className="my-2 text-[24px] font-light text-left text-[var(--color-text)]">
        We use advanced printing and packaging machines to ensure precision and quality.
        </h2>
      <div className="overflow-hidden relative mt-6">
        <motion.div
          ref={containerRef}
          className="flex space-x-6 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -adjustedMaxOffset, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
        >
          {imageData.map((src, index) => (
            <motion.div key={index} className="flex-shrink-0">
              <img
                src={src}
                alt="Technology"
                className="w-auto h-auto"
                onContextMenu={(e) => e.preventDefault()} // Blokir klik kanan
                onDragStart={(e) => e.preventDefault()} // Blokir drag
                onMouseDown={(e) => e.preventDefault()} // Blokir klik
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scrollbar */}
      <div className="mt-4 w-1/3 relative h-1 bg-[var(--color-card)]">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-[var(--color-primary)]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </section>
  );
}