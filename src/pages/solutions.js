import { useState } from "react";
import SEO from "../components/seo";
import Image from "next/image";
import ProductSection from "@/components/product";
import FAQS from "../components/faqs";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
export default function Solutions() {
  const [selectedFinish, setSelectedFinish] = useState("HOT STAMPING");

  const finishes = {
    "HOT STAMPING": {
      image: "/images/finishing.png",
      description: "Metallic foil accents to highlight logos, brand names, or key design elements with a luxurious finish.",
    },
    "SPOT UV": {
      image: "/images/finishing.png",
      description: "Glossy coating applied selectively to create contrast and visual interest.",
    },
    "LAMINATION": {
      image: "/images/finishing.png",
      description: "Matte, gloss, or soft touch finishes that protect packaging while enhancing the surface quality.",
    },
    "VARNISHING COATING": {
      image: "/images/finishing.png",
      description: "Protective finishes available in gloss, matte, or textured options, using either water-based or UV varnish technologies to enhance durability and surface quality.",
    },
    "DEBOSSING & EMBOSSING": {
      image: "/images/finishing.png",
      description: "Raised or indented designs that add texture and a premium feel to packaging.",
    },
    "PVC WINDOW PATCHING": {
      image: "/images/finishing.png",
      description: "Clear windows integrated into packaging to showcase the product inside while maintaining structural integrity.",
    },
    "BLISTER COATING": {
      image: "/images/finishing.png",
      description: "Specialised coatings that securely hold products in blister packaging applications.",
    },
    "Unsure which option best suits your needs?": {
      image: "/images/finishing.png",
      description: " Let us help you select the right finishing techniques to enhance your packaging and brand appeal.",
    },
  };
  const [selectedMaterials, setSelectedMaterials] = useState("HVS PAPER");
  const materials = {
    "HVS PAPER": {
      image: "/images/finishing.png",
      description: "Lightweight and reliable, ideal for leaflets, inserts, and manuals.",
    },
    "METTALIZED PAPER": {
      image: "/images/finishing.png",
      description: "Adds a luxurious metallic finish for high-impact packaging designs.",
    },
    "ART PAPER": {
      image: "/images/finishing.png",
      description: "Smooth and versatile, ideal for high-quality printed packaging.",
    },
    "KRAFT PAPER": {
      image: "/images/finishing.png",
      description: "Natural, recycled appearance to support eco-conscious branding.",
    },
    "IVORY Board": {
      image: "/images/finishing.png",
      description: "Durable and premium, suitable for cosmetics, pharmaceuticals, and FMCG products.",
    },
    "FANCY PAPER": {
      image: "/images/finishing.png",
      description: "Specialty textures and colours to create unique, premium brand experiences.",
    },
    "Selected materials are available with FSC certification upon request.": {
      image: "/images/finishing.png",
      description: "Don't see the material you're looking for? Talk to us — we are happy to explore sourcing options to meet your project needs.",
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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

        <div className="w-2/3 mt-12 text-[var(--color-text)]">
          <img
            src={materials[selectedMaterials]?.image}
            alt={selectedMaterials}
            className="w-full h-auto shadow-lg"
          />
          <p className="mt-4 text-lg">{materials[selectedMaterials]?.description}</p>
        </div>
      </section>


      {/* <ProductSection /> */}
      {/* Product List Section */}
      <section className="py-2 px-8 md:px-16 lg:px-24 xl:px-43">
  <motion.div
    className="grid md:grid-cols-2 gap-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ staggerChildren: 0.2 }}
  >
    {[
      {
        title: "Folding Carton Boxes",
        desc: "Ideal for cosmetics, pharmaceuticals, FMCG, and other industries, combining durability and premium branding.",
      },
      {
        title: "Hangtags",
        desc: "Enhance product presentation and brand storytelling with customised hangtags.",
      },
      {
        title: "Leaflets",
        desc: "Informative and versatile, with multiple folding options available to suit different product types and regulatory needs.",
      },
      {
        title: "Promotional Items",
        desc: "Specially designed paper-based promotional materials to support marketing and brand campaigns.",
      },
      {
        title: "Labels",
        desc: "High-quality labels for brand recognition, compliance, and product differentiation.",
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        variants={itemVariant}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-bold text-[var(--color-text)] flex items-start gap-2">
          <ArrowRight className="text-[var(--color-primary)] w-5 h-5 mt-1" />
          {item.title}
        </h3>
        <p className="text-[var(--color-text)] mt-2">{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</section>

<FAQS/>

    </>
  );
}