import { useState } from "react";
import SEO from "../components/seo";

export default function Projects() {
  const categories = [
    "All Industries",
    "Cosmetics and Personal Care",
    "Pharmaceutical ",
    "FMCG ",
    "Miscellaneous ",
  ];

  const allProjects = [
    { src: "/images/p1.png", category: "Cosmetics and Personal Care" },
    { src: "/images/p2.png", category: "Pharmaceutical " },
    { src: "/images/p3.png", category: "FMCG " },
    { src: "/images/p4.png", category: "Miscellaneous " },
    { src: "/images/p3.png", category: "FMCG " },
    { src: "/images/p2.png", category: "Pharmaceutical " },
    { src: "/images/p4.png", category: "Miscellaneous " },
    { src: "/images/p1.png", category: "Cosmetics and Personal Care" },
    { src: "/images/p2.png", category: "Pharmaceutical " },
    { src: "/images/p1.png", category: "Cosmetics and Personal Care" },
    { src: "/images/p3.png", category: "FMCG " },
    { src: "/images/p4.png", category: "Miscellaneous " },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Industries");

  const filteredProjects =
    selectedCategory === "All Industries"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

      const categoryDescriptions = {
        "All Industries":
          "Explore our complete range of packaging projects across industries",
        "Cosmetics and Personal Care":
          "Premium packaging for cosmetics, skincare, haircare, and personal care brands.",
        "Pharmaceutical ":
          "Trusted packaging solutions for pharmaceutical products, healthcare, and compliance needs.",
        "FMCG ":
          "High-volume packaging for food, beverages, and other fast-moving consumer goods, including retail and restaurant brands.",
        "Miscellaneous ":
          "Custom packaging solutions for specialised applications, including automotive and promotional items.",
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
      <section className="relative bg-[url('/images/banner2.png')] bg-cover flex items-end mt-20 h-[200px] w-full max-w-screen overflow-hidden">
        <p className="w-full ml-27 mx-auto text-white px-6 py-6 pl-10 md:pl-20 z-10 text-[25px] font-semibold absolute bottom-0 max-w-screen overflow-hidden">
          Packaging Solutions for every industry
        </p>
      </section>

     
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
      <h1 className="text-3xl font-bold text-left my-2 text-[var(--color-primary)]">
        Packaging Solutions for every industry
        </h1>
        <h2 className="text-start text-justify text-[var(--color-text)]">
        With decades of experience in packaging, Mega Putra partners with leading brands across a wide range of industries. Our packaging solutions are designed to meet the functional, regulatory, and aesthetic needs of each market — ensuring brand consistency and high-quality execution.
        </h2>
         {/* Filter Tabs */}
         <p className="text-left text-md font-semibold text-[var(--color-text)] mt-2">
  {categoryDescriptions[selectedCategory]}
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