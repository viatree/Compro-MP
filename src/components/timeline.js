"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    ],
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
    ],
  },
};

export default function Timeline() {
  const { language } = useLanguage();
  const t = translations[language] || translations["EN"];

  // ===== Responsiveness (tanpa ubah tampilan/animasi) =====
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(3); // default sama seperti sebelumnya
  const [stride, setStride] = useState(360); // default 360px seperti animasi awal

  const [startIndex, setStartIndex] = useState(0);
  const scrollInterval = useRef(null);

  // Mode: buttons only on desktop (>=1024px), swipe on tablet & mobile
  const [isTouchMode, setIsTouchMode] = useState(false);

  const clampIndex = useCallback(
    (idx, ipp = itemsPerPage) => {
      const max = Math.max(t.timelineData.length - ipp, 0);
      return Math.min(Math.max(idx, 0), max);
    },
    [t.timelineData.length, itemsPerPage]
  );

  // Hitung itemsPerPage berdasarkan lebar container (1 mobile, 2 tablet, 3 desktop)
  const recomputeLayout = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.clientWidth;
    let ipp = 3;
    if (w < 640) ipp = 1; // mobile
    else if (w < 1024) ipp = 2; // tablet
    setItemsPerPage(ipp);

    // Tentukan mode interaksi
    setIsTouchMode(w < 1024); // swipe untuk tablet & mobile

    // Ukur jarak antar kartu (stride) dari DOM agar animasi tetap sama arah & tempo
    if (trackRef.current) {
      const cards = trackRef.current.querySelectorAll("[data-timeline-card]");
      if (cards.length) {
        const first = cards[0].getBoundingClientRect();
        let dist = first.width; // fallback
        if (cards.length > 1) {
          const second = cards[1].getBoundingClientRect();
          const gap = second.left - first.left;
          dist = gap > 0 ? gap : first.width;
        }
        setStride(Math.round(dist));
      }
    }

    setStartIndex((prev) => clampIndex(prev, ipp));
  }, [clampIndex]);

  useEffect(() => {
    recomputeLayout();
    if (typeof window !== "undefined") {
      const onResize = () => recomputeLayout();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, [recomputeLayout, language]);

  const handleScroll = (direction) => {
    setStartIndex((prev) => {
      if (direction === "left") return clampIndex(prev - 1);
      if (direction === "right") return clampIndex(prev + 1);
      return prev;
    });
  };

  const startAutoScroll = (dir) => {
    stopAutoScroll();
    scrollInterval.current = setInterval(() => handleScroll(dir), 1000);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  // === Swipe handlers (aktif hanya saat touch mode) ===
  const onDragEnd = (_e, info) => {
    if (!isTouchMode) return;
    const threshold = Math.min(120, Math.max(40, stride * 0.25));
    const vx = info.velocity.x || 0;
    const dx = info.offset.x || 0; // negatif jika geser ke kiri

    if (dx <= -threshold || vx < -300) {
      handleScroll("right"); // geser kartu ke kiri => pindah index ke kanan
    } else if (dx >= threshold || vx > 300) {
      handleScroll("left"); // geser kartu ke kanan => pindah index ke kiri
    }
    // jika tidak melewati ambang, akan snap kembali via animate ke startIndex
  };

  return (
    <section
      ref={containerRef}
      className="overflow-x-hidden relative w-full bg-white px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43"
    >
      <h1 className="text-[28px] md:text-[36px] font-medium text-[var(--color-primary)] mb-2">
        {t.title}
      </h1>
      <h2 className="text-[18px] md:text-[24px] font-light text-[var(--color-text)] mb-6">
        {t.subtitle}
      </h2>

      <div className="relative flex items-center">
        {/* Gradient Fades (tetap sama) */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white via-blue/30 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white via-blue/30 to-transparent pointer-events-none z-10" />

        {/* Left Button: tampilkan hanya di desktop */}
        {!isTouchMode && startIndex > 0 && (
          <button
            onClick={() => handleScroll("left")}
            onMouseEnter={() => startAutoScroll("left")}
            onMouseLeave={stopAutoScroll}
            className="absolute left- sm:left-0 z-20 p-2 md:p-3 rounded-full bg-[var(--color-primary)] text-white hover:scale-110 transition sm:-translate-x-1/2 md:-translate-x-full top-1/2 -translate-y-1/2"
          >
            <FaChevronLeft className="text-[16px] md:text-[20px]" />
          </button>
        )}

        {/* Timeline Cards: tambah drag di mobile/tablet, tampilan kartu tetap sama */}
        <div className="overflow-hidden flex-1 px-4">
          <motion.div
            ref={trackRef}
            className={`flex space-x-6 transition-transform duration-500 ease-out ${
              isTouchMode ? "cursor-grab active:cursor-grabbing select-none" : ""
            }`}
            animate={{ x: -startIndex * stride }}
            drag={isTouchMode ? "x" : false}
            dragElastic={0.05}
            dragMomentum={false}
            onDragEnd={onDragEnd}
          >
            {t.timelineData.map((item, index) => (
              <div
                key={index}
                data-timeline-card
                className="min-w-[320px] max-w-[360px] bg-[var(--color-card)] p-6 shadow-md text-[var(--color-text)] hover:bg-[var(--color-darker)] hover:text-white transition-all duration-300 overflow-hidden"
              >
                <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Button: tampilkan hanya di desktop */}
        {!isTouchMode && startIndex + itemsPerPage < t.timelineData.length && (
          <button
            onClick={() => handleScroll("right")}
            onMouseEnter={() => startAutoScroll("right")}
            onMouseLeave={stopAutoScroll}
            className="absolute right-2 sm:right-0 z-20 p-2 md:p-3 rounded-full bg-[var(--color-primary)] text-white hover:scale-110 transition sm:translate-x-1/2 md:translate-x-full top-1/2 -translate-y-1/2 "
          >
            <FaChevronRight className="text-[16px] md:text-[20px]" />
          </button>
        )}
      </div>

      {/* Progress bar (tetap sama, tetapi berdasarkan itemsPerPage responsif) */}
      <div className="mt-6 w-1/3  relative h-1 bg-[var(--color-card)] rounded">
        <motion.div
          className="absolute top-0 left-0 h-1 bg-[var(--color-primary)] rounded"
          animate={{
            width: `${Math.min(((startIndex + itemsPerPage) / t.timelineData.length) * 100, 100)}%`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
