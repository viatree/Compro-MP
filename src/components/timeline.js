"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  EN: {
    title: "From Brokerage to Full-Service Packaging Solutions",
    subtitle: "Key Milestones in Our Growth and Transformation",
    timelineData: [
      { year: "1997", text: "Mega Putra was founded as a printing brokerage company, focusing on connecting customers with printing solutions." },
      { year: "2000", text: "Expanded production capacity with advanced offset printing technology to meet increasing client needs." },
      { year: "2004", text: "Built the first manufacturing facility to support growing demand and control production quality directly." },
      { year: "2008", text: "Established a second manufacturing facility to increase capacity and serve a broader range of industries." },
      { year: "2010", text: "Achieved ISO 9001 certification for quality management systems." },
      { year: "2014", text: "Relocated to a new, purpose-built facility at Jl. Puspiptek Raya No.18, consolidating two factories into one to enhance efficiency and advance capabilities in ink development, finishing, and UV printing." },
      { year: "2014", text: "Earned FSC® certification, supporting responsible forestry and sustainable packaging." },
      { year: "2025", text: "Achieved Halal certification, ensuring compliance with Indonesian Halal packaging standards." },
      { year: "Today", text: "Serving leading brands across cosmetics, pharmaceuticals, FMCG, automotive, and food industries with complete in-house capabilities." },
    ]
  },
  ID: {
    title: "Dari Broker Menjadi Penyedia Solusi Pengemasan Lengkap",
    subtitle: "Tonggak Penting dalam Pertumbuhan dan Transformasi Kami",
    timelineData: [
      { year: "1997", text: "Mega Putra didirikan sebagai perusahaan broker percetakan, menghubungkan pelanggan dengan solusi cetak." },
      { year: "2000", text: "Meningkatkan kapasitas produksi dengan teknologi offset canggih untuk memenuhi kebutuhan klien yang meningkat." },
      { year: "2004", text: "Membangun fasilitas manufaktur pertama untuk mendukung permintaan dan mengontrol kualitas produksi secara langsung." },
      { year: "2008", text: "Mendirikan fasilitas manufaktur kedua untuk meningkatkan kapasitas dan melayani lebih banyak industri." },
      { year: "2010", text: "Meraih sertifikasi ISO 9001 untuk sistem manajemen mutu." },
      { year: "2014", text: "Pindah ke fasilitas baru di Jl. Puspiptek Raya No.18, menggabungkan dua pabrik menjadi satu untuk meningkatkan efisiensi dan kemampuan dalam pengembangan tinta, finishing, dan UV printing." },
      { year: "2014", text: "Meraih sertifikasi FSC®, mendukung pengelolaan hutan berkelanjutan." },
      { year: "2025", text: "Meraih sertifikasi Halal, memastikan kepatuhan terhadap standar pengemasan Halal di Indonesia." },
      { year: "Hari Ini", text: "Melayani merek-merek terkemuka di bidang kosmetik, farmasi, FMCG, otomotif, dan makanan dengan kemampuan produksi in-house yang lengkap." },
    ]
  }
};

export default function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];

  const cardWidth = 350;
  const spacing = 24;
  const shiftDistance = cardWidth + spacing;
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalContentWidth = t.timelineData.length * shiftDistance;
      setMaxDrag(Math.max(0, totalContentWidth - containerWidth));
    }
  }, [t.timelineData.length]);

  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    let newIndex = activeIndex;

    if ((offset.x > 100 || velocity.x > 2) && activeIndex > 0) {
      newIndex = activeIndex - 1;
    } else if ((offset.x < -100 || velocity.x < -2) && activeIndex < t.timelineData.length - 1) {
      newIndex = activeIndex + 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <section className="relative w-full bg-white text-justify pl-8 md:pl-16 lg:pl-24 xl:pl-43">
      <h1 className="text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
        {t.title}
      </h1>
      <h2 className="my-4 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left text-[var(--color-text)] pr-8">
        {t.subtitle}
      </h2>

      {/* Timeline Cards */}
      <div ref={containerRef} className="overflow-hidden relative w-full mx-auto">
        <motion.div
          className="flex space-x-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}
          animate={{ x: -activeIndex * shiftDistance }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t.timelineData.map((item, index) => (
            <motion.div
              key={index}
              className={`min-w-[350px] p-6 shadow-md transition-all duration-300 
                ${index === activeIndex
                  ? "bg-[var(--color-primary)] text-white scale-105 text-[16px]"
                  : "bg-[var(--color-card)] text-[var(--color-text)]"} 
                hover:bg-[var(--color-darker)] hover:text-white`}
            >
              <h3 className="text-[24px] font-bold">{item.year}</h3>
              <p className="text-[14px] font-light">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrollbar */}
      <div className="mt-4 w-1/3 relative h-1 bg-[var(--color-card)] pl-43">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-[var(--color-primary)]"
          animate={{ width: `${((activeIndex + 1) / t.timelineData.length) * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
