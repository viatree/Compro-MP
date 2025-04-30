import { useState } from "react";
import SEO from "../components/seo";
import Image from "next/image";
import ProductSection from "@/components/product";
export default function Solutions() {
  const [selectedFinish, setSelectedFinish] = useState("HOT STAMP");

  const finishes = {
    "HOT STAMP": {
      image: "/images/finishing.png",
      description: "Hot stamping memberikan efek metalik yang elegan dan mewah.",
    },
    "SPOT UV": {
      image: "/images/finishing.png",
      description: "Spot UV memberikan efek mengkilap pada area tertentu untuk tampilan premium.",
    },
    "LAMINATION": {
      image: "/images/finishing.png",
      description: "Laminasi memberikan perlindungan ekstra pada kemasan dengan finishing matte atau glossy.",
    },
    "VARNISHING COATING": {
      image: "/images/finishing.png",
      description: "Varnish coating memberikan efek mengkilap untuk tampilan lebih menarik.",
    },
    "DEBOSS / EMBOSS": {
      image: "/images/finishing.png",
      description: "Emboss/Deboss menambahkan efek timbul atau cekung untuk kesan eksklusif.",
    },
    "PET WINDOW & PVC WINDOW": {
      image: "/images/finishing.png",
      description: "Jendela PVC atau PET memungkinkan pelanggan melihat isi produk.",
    },
    "BLISTER COATING": {
      image: "/images/finishing.png",
      description: "Blister coating memberikan perlindungan ekstra untuk kemasan blister pack.",
    },
  };
  const [selectedMaterials, setSelectedMaterials] = useState("HVS");
  const materials = {
    "HVS": {
      image: "/images/finishing.png",
      description: "Hot stamping memberikan efek metalik yang elegan dan mewah.",
    },
    "METTALIZED PAPER": {
      image: "/images/finishing.png",
      description: "Spot UV memberikan efek mengkilap pada area tertentu untuk tampilan premium.",
    },
    "ART PAPER": {
      image: "/images/finishing.png",
      description: "Laminasi memberikan perlindungan ekstra pada kemasan dengan finishing matte atau glossy.",
    },
    "KRAFT": {
      image: "/images/finishing.png",
      description: "Varnish coating memberikan efek mengkilap untuk tampilan lebih menarik.",
    },
    "IVORY": {
      image: "/images/finishing.png",
      description: "Emboss/Deboss menambahkan efek timbul atau cekung untuk kesan eksklusif.",
    },
    "FANCY PAPER": {
      image: "/images/finishing.png",
      description: "Jendela PVC atau PET memungkinkan pelanggan melihat isi produk.",
    },
    "ART CARTON": {
      image: "/images/finishing.png",
      description: "Blister coating memberikan perlindungan ekstra untuk kemasan blister pack.",
    },
    "DUPLEX": {
      image: "/images/finishing.png",
      description: "Blister coating memberikan perlindungan ekstra untuk kemasan blister pack.",
    },
    "CORRUGATED PAPER": {
      image: "/images/finishing.png",
      description: "Blister coating memberikan perlindungan ekstra untuk kemasan blister pack.",
    },
  };

  return (
    <>
      <SEO
        title="Mega Putra | Solutions"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />

      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43 mt-20">
        <h1 className="text-3xl font-bold text-left text-[var(--color-primary)]">
          Packaging Solutions designed For Your Brand's Success
        </h1>
        <p className="mt-6 text-left text-base text-[var(--color-text)]">
          Explore our range of products, materials, finishing options, and prototyping services — all crafted with precision, creativity, and dedication to quality.
        </p>
      </section>
      <section className="relative bg-[url('/images/banner3.png')] bg-cover flex items-end h-[310px]">
      </section>

      {/* Finishing Options */}
      <section className="flex gap-8 p-8 py-6 px-8 md:px-16 lg:px-24 xl:px-43" >
        <div className="w-1/3  text-bold text-[var(--color-text)]">
          <h1 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Finishing</h1>
          <ul>
            {Object.keys(finishes).map((finish) => (
              <li
                key={finish}
                className={`cursor-pointer p-2 border-b-3   border-[var(--color-text25)] ${selectedFinish === finish ? "font-bold text-[var(--color-primary)]" : ""
                  }`}
                onClick={() => setSelectedFinish(finish)}
              >
                {finish}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Image and Description */}
        <div className="w-2/3 text-[var(--color-text)] mt-12">
          <img
            src={finishes[selectedFinish].image}
            alt={selectedFinish}
            className="w-full h-auto shadow-lg"
          />
          <p className="mt-4 text-lg">{finishes[selectedFinish].description}</p>
        </div>
      </section>

      {/* materials Options */}
      <section className="flex gap-8 p-8 py-12 px-8 md:px-16 lg:px-24 xl:px-43" >
        <div className="w-1/3  text-bold text-[var(--color-text)]">
          <h1 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Materials</h1>
          <ul>
            {Object.keys(materials).map((materials) => (
              <li
                key={materials}
                className={`cursor-pointer p-2 border-b-2 border-[var(--color-text25)] ${selectedMaterials === materials ? "font-bold text-[var(--color-primary)]" : ""
                  }`}
                onClick={() => setSelectedMaterials(materials)}
              >
                {materials}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Image and Description */}
        <div className="w-2/3 mt-12 text-[var(--color-text)]">
          <img
            src={materials[selectedMaterials].image}
            alt={selectedMaterials}
            className="w-full h-auto shadow-lg"
          />
          <p className="mt-4 text-lg">{materials[selectedMaterials].description}</p>
        </div>
      </section>
      <ProductSection />
      {/* Product List Section */}
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43 bg-white">
        <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Products</h2>
        <p className="text-base text-[var(--color-text)] mb-8">
          At Mega Putra, we offer high-quality paper-based products designed to meet the diverse needs of brands across industries. Our product range includes:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">• Folding Carton Boxes</h3>
            <p className="text-[var(--color-text)]">
              Ideal for cosmetics, pharmaceuticals, FMCG, and other industries, combining durability and premium branding.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">• Hangtags</h3>
            <p className="text-[var(--color-text)]">
              Enhance product presentation and brand storytelling with customised hangtags.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">• Leaflets</h3>
            <p className="text-[var(--color-text)]">
              Informative and versatile, with multiple folding options available to suit different product types and regulatory needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">• Promotional Items</h3>
            <p className="text-[var(--color-text)]">
              Specially designed paper-based promotional materials to support marketing and brand campaigns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)]">•	Labels</h3>
            <p className="text-[var(--color-text)]">
              High-quality labels for brand recognition, compliance, and product differentiation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}