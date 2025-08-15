import { useState, useEffect, useRef } from "react";
import SEO from "../components/seo";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { language } = useLanguage();

  const categories = {
    EN: [
      "All Industries",
      "Cosmetics and Personal Care",
      "Pharmaceutical",
      "FMCG",
      "Miscellaneous",
    ],
    ID: [
      "Semua Industri",
      "Kosmetik dan Perawatan Pribadi",
      "Farmasi",
      "Barang Konsumsi",
      "Lain-lain",
    ],
  };

  const categoryDescriptions = {
    EN: {
      "All Industries":
        "Explore our complete range of packaging projects across industries",
      "Cosmetics and Personal Care":
        "Premium packaging for cosmetics, skincare, haircare, and personal care brands.",
      Pharmaceutical:
        "Trusted packaging solutions for pharmaceutical products, healthcare, and compliance needs.",
      FMCG:
        "High-volume packaging for food, beverages, and other fast-moving consumer goods, including retail and restaurant brands.",
      Miscellaneous:
        "Custom packaging solutions for specialised applications, including automotive and promotional items.",
    },
    ID: {
      "Semua Industri":
        "Jelajahi berbagai proyek kemasan kami di semua industri",
      "Kosmetik dan Perawatan Pribadi":
        "Kemasan premium untuk kosmetik, perawatan kulit, rambut, dan produk perawatan pribadi.",
      Farmasi:
        "Solusi kemasan terpercaya untuk produk farmasi, kesehatan, dan kepatuhan regulasi.",
      "Barang Konsumsi":
        "Kemasan dalam volume besar untuk makanan, minuman, dan barang konsumsi cepat lainnya.",
      "Lain-lain":
        "Solusi kemasan khusus untuk aplikasi seperti otomotif dan barang promosi.",
    },
  };

  const allProjects = [
    { src: "/images/projects/7RV03886.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04017.jpg", category: "Miscellaneous" },
    { src: "/images/projects/7RV04064.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04071.jpg", category: "Pharmaceutical" },
    { src: "/images/projects/7RV04057.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV03947.jpg", category: "Miscellaneous" },
    { src: "/images/projects/7RV03964.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV03980.jpg", category: "Miscellaneous" },
    { src: "/images/projects/7RV04011.jpg", category: "Miscellaneous" },
    { src: "/images/projects/7RV04087.jpg", category: "Miscellaneous" },
    { src: "/images/projects/7RV03891.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04096.jpg", category: "Miscellaneous" },
    { src: "/images/projects/7RV03955.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV03911.jpg", category: "FMCG" },
    { src: "/images/projects/7RV03999.jpg", category: "Pharmaceutical" },
    { src: "/images/projects/7RV04117.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04169.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04166.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04150.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/7RV04068.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/MISCELLANEOUS.jpg", category: "Miscellaneous" },
    { src: "/images/projects/PERSONAL CARE.jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(1).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(2).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(3).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(4).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(5).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(6).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(7).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(8).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(9).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PERSONAL CARE(10).jpg", category: "Cosmetics and Personal Care" },
    { src: "/images/projects/PHARMACEUTICALS.jpg", category: "Pharmaceutical" },
    { src: "/images/projects/PHARMACEUTICALS(1).jpg", category: "Pharmaceutical" },
    { src: "/images/projects/PHARMACEUTICALS(2).jpg", category: "Pharmaceutical" },
    { src: "/images/projects/PHARMACEUTICALS(3).jpg", category: "Pharmaceutical" },
    { src: "/images/projects/PHARMACEUTICALS(4).jpg", category: "Pharmaceutical" },
  ];

  const categoryMap = {
    EN: {
      "Cosmetics and Personal Care": "Cosmetics and Personal Care",
      Pharmaceutical: "Pharmaceutical",
      FMCG: "FMCG",
      Miscellaneous: "Miscellaneous",
    },
    ID: {
      "Cosmetics and Personal Care": "Kosmetik dan Perawatan Pribadi",
      Pharmaceutical: "Farmasi",
      FMCG: "Barang Konsumsi",
      Miscellaneous: "Lain-lain",
    },
  };

  const reverseCategoryMap = Object.fromEntries(
    Object.entries(categoryMap[language]).map(([en, local]) => [local, en])
  );

  const [selectedCategory, setSelectedCategory] = useState(categories[language][0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(20);
  const lightboxContentRef = useRef(null);
  const loadMoreRef = useRef(null);

  // === Swipe state & helpers ===
  const [swipeX, setSwipeX] = useState(0);
  const touchRef = useRef({ startX: 0, startY: 0, active: false });
  const SWIPE_THRESHOLD = 50; // px

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchRef.current.startX = t.clientX;
    touchRef.current.startY = t.clientY;
    touchRef.current.active = true;
    setSwipeX(0);
  };

  const onTouchMove = (e) => {
    if (!touchRef.current.active) return;
    const t = e.touches[0];
    const dx = t.clientX - touchRef.current.startX;
    const dy = t.clientY - touchRef.current.startY;

    // dominan horizontal => kita handle swipe & cegah scroll
    if (Math.abs(dx) > Math.abs(dy)) {
      e.preventDefault();
      setSwipeX(dx);
    }
  };

  const onTouchEnd = () => {
    if (!touchRef.current.active) return;
    const dx = swipeX;

    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) showNextImage();
      else showPrevImage();
    }
    touchRef.current.active = false;
    setSwipeX(0);
  };

  useEffect(() => {
    setSelectedCategory(categories[language][0]);
    setCurrentImageIndex(0);
    setLightboxOpen(false);
    setVisibleCount(20);
  }, [language]);

  const filteredProjects =
    selectedCategory === categories[language][0]
      ? allProjects
      : allProjects.filter(
          (project) => categoryMap[language][project.category] === selectedCategory
        );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft" && lightboxOpen) showPrevImage();
      else if (e.key === "ArrowRight" && lightboxOpen) showNextImage();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  const handleOverlayClick = (e) => {
    if (lightboxContentRef.current && !lightboxContentRef.current.contains(e.target)) {
      closeLightbox();
    }
  };

  // Intersection Observer
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredProjects.length) {
          setVisibleCount((prev) => prev + 20);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [filteredProjects.length, visibleCount]);

  return (
    <>
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />
      <section className="relative bg-[url('/images/banner2.png')] bg-cover bg-center flex items-end h-[180px] sm:h-[220px] md:h-[260px] lg:h-[310px]" />

      <section className="py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
        <h1 className="text-[40px] font-medium text-left my-2 text-[var(--color-primary)]">
          {language === "EN"
            ? "Packaging Solutions For Every Industry"
            : "Solusi Kemasan Untuk Berbagai Industri"}
        </h1>

        <h2 className="text-start text-justify text-[16px] font-light text-[var(--color-text)]">
          {language === "EN"
            ? "With decades of experience in packaging, Mega Putra partners with leading brands across a wide range of industries..."
            : "Dengan pengalaman puluhan tahun di bidang kemasan, Mega Putra bekerja sama dengan berbagai merek terkemuka di berbagai industri..."}
        </h2>

        <p className="text-left text-md font-semibold text-[var(--color-text)] mt-2">
          {categoryDescriptions[language][selectedCategory]}
        </p>

        <div className="mt-6 flex justify-between border-b-3 border-[var(--color-lighter)] flex-wrap gap-2">
          {categories[language].map((category) => (
            <button
              key={category}
              className={`pb-2 text-[var(--color-text)] hover:text-[var(--color-primary)] ${
                selectedCategory === category ? "font-bold text-[var(--color-primary)]" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleCount(20);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="fade-grid mt-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:gap-6 sm:gap-4 gap-1">
          {displayedProjects.map((project) => (
            <div key={project.src} className="relative group">
              <div className="w-full aspect-square relative overflow-hidden cursor-pointer">
                <Image
                  src={project.src}
                  alt="Project"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  onClick={() =>
                    openLightbox(
                      displayedProjects.findIndex((p) => p.src === project.src)
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>

        {/* Sentinel */}
        {visibleCount < filteredProjects.length && (
          <div
            ref={loadMoreRef}
            className="h-10 flex justify-center items-center text-sm text-gray-500"
          >
            {language === "EN" ? "Loading more..." : "Memuat lagi..."}
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in"
            onClick={handleOverlayClick}
          >
            <div
              ref={lightboxContentRef}
              className="relative z-10 touch-pan-y"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-[-40px] right-[-10px] text-white text-4xl font-bold hover:text-red-500 transition cursor-pointer"
              >
                &times;
              </button>
              <button
                onClick={showPrevImage}
                className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-[var(--color-primary)] transition cursor-pointer"
              >
                &#10094;
              </button>
              {filteredProjects[currentImageIndex] && (
                <Image
                  key={filteredProjects[currentImageIndex].src + language}
                  src={filteredProjects[currentImageIndex].src}
                  alt="Zoomed project"
                  width={1000}
                  height={800}
                  className="max-w-[90vw] max-h-[80vh] object-contain transition-transform duration-200 ease-out"
                  style={{ transform: `translateX(${swipeX}px)` }}
                />
              )}
              <button
                onClick={showNextImage}
                className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-[var(--color-primary)] transition cursor-pointer"
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
      </section>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-in-out forwards;
        }

        .fade-grid {
          animation: fade-in 0.2s ease-in-out;
        }
      `}</style>
    </>
  );
}
