import { useState } from "react";
import SEO from "../components/seo";

export default function Projects() {
  const categories = [
    "All Industries",
    "Pharmaceutical",
    "Food and Beverages",
    "Electronics",
    "Retail",
    "Asi Gloves",
  ];

  const allProjects = [
    { src: "/images/p1.png", category: "Pharmaceutical" },
    { src: "/images/p2.png", category: "Food and Beverages" },
    { src: "/images/p3.png", category: "Electronics" },
    { src: "/images/p4.png", category: "Asi Gloves" },
    { src: "/images/p3.png", category: "Electronics" },
    { src: "/images/p2.png", category: "Food and Beverages" },
    { src: "/images/p4.png", category: "Retail" },
    { src: "/images/p1.png", category: "Pharmaceutical" },
    { src: "/images/p2.png", category: "Food and Beverages" },
    { src: "/images/p1.png", category: "Pharmaceutical" },
    { src: "/images/p3.png", category: "Electronics" },
    { src: "/images/p4.png", category: "Retail" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Industries");

  const filteredProjects =
    selectedCategory === "All Industries"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />
      <section className="relative bg-[url('/images/banner2.png')] bg-cover flex items-end mt-20 h-[200px] w-full max-w-screen overflow-hidden">
        <p className="w-full ml-27 mx-auto text-white px-6 py-6 pl-10 md:pl-20 z-10 text-[25px] font-semibold absolute bottom-0 max-w-screen overflow-hidden">
          Packaging Solutions for every industry
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <p className="text-left text-base text-[var(--color-text)]">
          Lorem ipsum dolor sit amet cem ipsum dolor sit amet consectetur. Ut ut
          quis tristique donec volutpat in...
        </p>

        <div className="mt-6 flex justify-between border-b-3 border-[var(--color-lighter)]">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`pb-2 text-[var(--color-text)] hover:text-[var(--color-primary)] ${
                selectedCategory === category
                  ? "font-bold border-[var(--color-primary)] text-[var(--color-primary)]"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-auto h-auto">
          {filteredProjects.map((project, index) => (
            <div key={index} className="relative group">
              <img
                src={project.src}
                alt={`Project ${index + 1}`}
                className="w-full h-auto shadow-lg max-w-screen overflow-hidden"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
