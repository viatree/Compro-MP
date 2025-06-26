import { useState, useEffect, useRef } from "react";
import SEO from "../components/seo";
import Image from "next/image";

export default function Projects() {
  const categories = [
    "All Industries",
    "Cosmetics and Personal Care",
    "Pharmaceutical",
    "FMCG",
    "Miscellaneous",
  ];

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
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Industries");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lightboxContentRef = useRef(null);

  const filteredProjects =
    selectedCategory === "All Industries"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const categoryDescriptions = {
    "All Industries": "Explore our complete range of packaging projects across industries",
    "Cosmetics and Personal Care": "Premium packaging for cosmetics, skincare, haircare, and personal care brands.",
    "Pharmaceutical": "Trusted packaging solutions for pharmaceutical products, healthcare, and compliance needs.",
    "FMCG": "High-volume packaging for food, beverages, and other fast-moving consumer goods, including retail and restaurant brands.",
    "Miscellaneous": "Custom packaging solutions for specialised applications, including automotive and promotional items.",
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
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

  return (
    <>
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />

      <section className="relative bg-[url('/images/banner2.png')] bg-cover flex items-end mt-20 h-[200px] w-full max-w-screen overflow-hidden" />

      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="text-[40px] font-medium text-left my-2 text-[var(--color-primary)]">
          Packaging Solutions for every industry
        </h1>
        <h2 className="text-start text-justify text-[16px] font-light text-[var(--color-text)]">
          With decades of experience in packaging, Mega Putra partners with leading brands across a wide range of industries...
        </h2>

        <p className="text-left text-md font-semibold text-[var(--color-text)] mt-2">
          {categoryDescriptions[selectedCategory]}
        </p>

        <div className="mt-6 flex justify-between border-b-3 border-[var(--color-lighter)] flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`pb-2 text-[var(--color-text)] hover:text-[var(--color-primary)] ${
                selectedCategory === category ? "font-bold text-[var(--color-primary)]" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:gap-6 sm:gap-4 gap-1">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative group">
              <div className="w-full aspect-square relative overflow-hidden cursor-pointer">
                <Image
                  src={project.src}
                  alt={`Packaging project in ${project.category} industry`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  onClick={() => openLightbox(index)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm animate-fade-in"
            onClick={handleOverlayClick}
          >
            <div ref={lightboxContentRef} className="relative z-10">
              <button
                onClick={closeLightbox}
                className="absolute top-[-40px] right-[-20px] text-white text-4xl font-bold hover:text-red-500 transition"
              >
                &times;
              </button>
              <button
                onClick={showPrevImage}
                className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-[var(--color-primary)] transition"
              >
                &#10094;
              </button>
              <Image
                src={filteredProjects[currentImageIndex].src}
                alt="Zoomed packaging project"
                width={1000}
                height={800}
                className="max-w-[90vw] max-h-[80vh] object-contain"
              />
              <button
                onClick={showNextImage}
                className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold hover:text-[var(--color-primary)] transition"
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
      `}</style>
    </>
  );
}
