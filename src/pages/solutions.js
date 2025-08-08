import { useState, useEffect } from "react";
import SEO from "../components/seo";
import FAQS from "../components/faqs";
import { useLanguage } from "../contexts/LanguageContext";
import Link from "next/link";

const translations = {
  EN: {
    pageTitle: "Packaging Solutions Designed For Your Brand's Success",
    pageDesc:
      "Explore our range of products, materials, finishing options, and prototyping services — all crafted with precision, creativity, and dedication to quality.",
    productsTitle: "Products",
    productsSubtitle:
      "Discover our range of paper-based packaging solutions, crafted to support your brand's growth and visibility",
    productsDesc:
      "At Mega Putra, we offer high-quality paper-based products designed to meet the diverse needs of brands across industries. Our product range includes:",
    productsNote:
      "Customised solutions are available based on project requirements and production capabilities.",
    materialsTitle: "Materials",
    materialsSubtitle:
      "Choose from a variety of high-quality materials tailored to your packaging and branding needs",
    materialsDesc:
      "Mega Putra offers a selection of high-quality materials to suit diverse product requirements, brand positioning, and sustainability goals. Our available options include:",
    materialsNote1:
      "Selected materials are available with FSC certification upon request.",
    materialsNote2:
      "Don’t see the material you’re looking for? Talk to us — we are happy to explore sourcing options to meet your project needs.",
    finishesTitle: "Finishing",
    finishesSubtitle:
      "Enhance your packaging with premium finishing techniques designed to elevate brand impact and customer experience.",
    finishesDesc:
      "Mega Putra offers a range of finishing options to add premium appeal, protection, and visual impact to your packaging designs. Our capabilities include:",
    finishesNote:
      "Let us help you select the right finishing techniques to enhance your packaging and brand appeal",
  },
  ID: {
    pageTitle: "Solusi Kemasan yang Dirancang untuk Kesuksesan Merek Anda",
    pageDesc:
      "Jelajahi berbagai produk, material, opsi finishing, dan layanan prototipe kami — semua dibuat dengan presisi, kreativitas, dan dedikasi pada kualitas.",
    productsTitle: "Produk",
    productsSubtitle:
      "Temukan berbagai solusi kemasan berbahan kertas yang dirancang untuk mendukung pertumbuhan dan visibilitas merek Anda",
    productsDesc:
      "Di Mega Putra, kami menawarkan produk berbahan kertas berkualitas tinggi yang dirancang untuk memenuhi beragam kebutuhan merek di berbagai industri. Produk kami mencakup:",
    productsNote:
      "Solusi kustom tersedia berdasarkan kebutuhan proyek dan kemampuan produksi.",
    materialsTitle: "Material",
    materialsSubtitle:
      "Pilih dari berbagai material berkualitas tinggi yang disesuaikan dengan kebutuhan kemasan dan branding Anda",
    materialsDesc:
      "Mega Putra menyediakan berbagai pilihan material berkualitas tinggi untuk memenuhi kebutuhan produk, posisi merek, dan tujuan keberlanjutan. Pilihan yang tersedia meliputi:",
    materialsNote1:
      "Material tertentu tersedia dengan sertifikasi FSC sesuai permintaan.",
    materialsNote2:
      "Tidak menemukan material yang Anda cari? Hubungi kami — kami siap mencari opsi sumber daya yang sesuai dengan kebutuhan proyek Anda.",
    finishesTitle: "Finishing",
    finishesSubtitle:
      "Tingkatkan kemasan Anda dengan teknik finishing premium untuk meningkatkan dampak merek dan pengalaman pelanggan.",
    finishesDesc:
      "Mega Putra menawarkan berbagai opsi finishing untuk menambah daya tarik premium, perlindungan, dan dampak visual pada desain kemasan Anda. Kapabilitas kami meliputi:",
    finishesNote:
      "Biarkan kami membantu memilih teknik finishing yang tepat untuk meningkatkan kemasan dan daya tarik merek Anda",
  },
};

const products = {
  EN: {
    "FOLDING CARTON BOXES": {
      image: "/images/finishing.png",
      description:
        "Ideal for cosmetics, pharmaceuticals, FMCG, and other industries, combining durability and premium branding.",
    },
    "HANGTAGS": {
      image: "/images/finishing.png",
      description:
        "Enhance product presentation and brand storytelling with customised hangtags.",
    },
    "LEAFLETS": {
      image: "/images/finishing.png",
      description:
        "Informative and versatile, with multiple folding options available to suit different product types and regulatory needs.",
    },
    "PROMOTIONAL ITEMS": {
      image: "/images/finishing.png",
      description:
        "Specially designed paper-based promotional materials to support marketing and brand campaigns.",
    },
    "LABELS": {
      image: "/images/finishing.png",
      description:
        "High-quality labels for brand recognition, compliance, and product differentiation.",
    },
  },

  ID: {
    "FOLDING CARTON BOXES": {
      image: "/images/finishing.png",
      description:
        "Ideal untuk kosmetik, farmasi, FMCG, dan industri lainnya, menggabungkan ketahanan dan citra merek premium.",
    },
    "HANGTAGS": {
      image: "/images/finishing.png",
      description:
        "Tingkatkan tampilan produk dan cerita merek dengan hangtag yang disesuaikan.",
    },
    "LEAFLETS": {
      image: "/images/finishing.png",
      description:
        "Informasi yang fleksibel, dengan berbagai opsi lipatan untuk berbagai jenis produk dan kebutuhan regulasi.",
    },
    "PROMOTIONAL ITEMS": {
      image: "/images/finishing.png",
      description:
        "Bahan promosi berbasis kertas yang dirancang khusus untuk mendukung kampanye pemasaran dan merek.",
    },
    "LABELS": {
      image: "/images/finishing.png",
      description:
        "Label berkualitas tinggi untuk pengenalan merek, kepatuhan, dan diferensiasi produk.",
    },

  },
};
const materials = {
  EN: {
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
    "IVORY BOARD": {
      image: "/images/finishing.png",
      description:
        "Durable and premium, suitable for cosmetics, pharmaceuticals, and FMCG products.",
    },
    "FANCY PAPER": {
      image: "/images/finishing.png",
      description:
        "Specialty textures and colours to create unique, premium brand experiences.",
    },
  },

  ID: {
    "HVS PAPER": {
      image: "/images/finishing.png",
      description: "Ringan dan andal, ideal untuk leaflet, sisipan, dan buku panduan.",
    },
    "METTALIZED PAPER": {
      image: "/images/finishing.png",
      description: "Memberikan tampilan metalik mewah untuk desain kemasan yang mencolok.",
    },
    "ART PAPER": {
      image: "/images/finishing.png",
      description: "Halus dan serbaguna, ideal untuk kemasan cetak berkualitas tinggi.",
    },
    "KRAFT PAPER": {
      image: "/images/finishing.png",
      description: "Tampilan alami dan daur ulang untuk mendukung citra merek ramah lingkungan.",
    },
    "IVORY BOARD": {
      image: "/images/finishing.png",
      description: "Tahan lama dan premium, cocok untuk produk kosmetik, farmasi, dan FMCG.",
    },
    "FANCY PAPER": {
      image: "/images/finishing.png",
      description: "Tekstur dan warna khusus untuk menciptakan pengalaman merek yang unik dan premium.",
    },

  },

};
const finishes = {
  EN: {
    "HOT STAMPING": {
      image: "/images/finishing.png",
      description:
        "Metallic foil accents to highlight logos, brand names, or key design elements with a luxurious finish.",
    },
    "SPOT UV": {
      image: "/images/finishing.png",
      description:
        "Glossy coating applied selectively to create contrast and visual interest.",
    },
    "LAMINATION": {
      image: "/images/finishing.png",
      description:
        "Matte, gloss, or soft touch finishes that protect packaging while enhancing the surface quality.",
    },
    "VARNISHING COATING": {
      image: "/images/finishing.png",
      description:
        "Protective finishes available in gloss, matte, or textured options, using either water-based or UV varnish technologies to enhance durability and surface quality.",
    },
    "DEBOSSING & EMBOSSING": {
      image: "/images/finishing.png",
      description:
        "Raised or indented designs that add texture and a premium feel to packaging.",
    },
    "PVC WINDOW PATCHING": {
      image: "/images/finishing.png",
      description:
        "Clear windows integrated into packaging to showcase the product inside while maintaining structural integrity.",
    },
    "BLISTER COATING": {
      image: "/images/finishing.png",
      description:
        "Specialised coatings that securely hold products in blister packaging applications.",
    },
  },

  ID: {

    "HOT STAMPING": {
      image: "/images/finishing.png",
      description:
        "Aksen foil metalik untuk menonjolkan logo, nama merek, atau elemen desain penting dengan tampilan mewah.",
    },
    "SPOT UV": {
      image: "/images/finishing.png",
      description:
        "Lapisan mengilap yang diaplikasikan secara selektif untuk menciptakan kontras dan daya tarik visual.",
    },
    "LAMINATION": {
      image: "/images/finishing.png",
      description:
        "Finishing matte, gloss, atau soft touch yang melindungi kemasan sekaligus meningkatkan kualitas permukaan.",
    },
    "VARNISHING COATING": {
      image: "/images/finishing.png",
      description:
        "Lapisan pelindung dalam pilihan gloss, matte, atau bertekstur, menggunakan teknologi varnish berbasis air atau UV untuk meningkatkan daya tahan dan kualitas permukaan.",
    },
    "DEBOSSING & EMBOSSING": {
      image: "/images/finishing.png",
      description:
        "Desain timbul atau cekung yang menambahkan tekstur dan kesan premium pada kemasan.",
    },
    "PVC WINDOW PATCHING": {
      image: "/images/finishing.png",
      description:
        "Jendela transparan yang terintegrasi dalam kemasan untuk menampilkan produk di dalamnya tanpa mengurangi kekuatan struktur.",
    },
    "BLISTER COATING": {
      image: "/images/finishing.png",
      description:
        "Lapisan khusus yang menjaga produk tetap aman dalam aplikasi kemasan blister.",
    },

  },
};
export default function Solutions() {
  const { language } = useLanguage();
  const t = translations[language];

  const [selectedProduct, setSelectedProduct] = useState(
    Object.keys(products[language] || {})[0] || ""
  );
  const [selectedMaterials, setSelectedMaterials] = useState(
    Object.keys(materials[language] || {})[0] || ""
  );
  const [selectedFinish, setSelectedFinish] = useState(
    Object.keys(finishes[language] || {})[0] || ""
  );
  useEffect(() => {
    setSelectedProduct(Object.keys(products[language] || {})[0] || "");
    setSelectedMaterials(Object.keys(materials[language] || {})[0] || "");
    setSelectedFinish(Object.keys(finishes[language] || {})[0] || "");
  }, [language]);

  return (
  <>
    <SEO
      title={`Mega Putra | ${t.productsTitle}`}
      description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
      keywords="packaging, printing, offset printing, box packaging, Mega Putra"
      image="/images/og-image.jpg"
      url="https://megaputra.com"
    />

    {/* Hero */}
    <section className="py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43 mt-20">
      <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
        {t.pageTitle}
      </h1>
      <p className="my-2 text-justify text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-light text-[var(--color-text)]">
        {t.pageDesc}
      </p>
    </section>

    <section className="relative bg-[url('/images/banner3.png')] bg-cover flex items-end h-[310px]"></section>

    {/* Products Section */}
    <section className="py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
      <div className="my-6 text-[var(--color-text)] font-medium">
        <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
          {t.productsTitle}
        </h1>
        <h2 className="my-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left">
          {t.productsSubtitle}
        </h2>
        <h3 className="text-justify text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-light">
          {t.productsDesc}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 font-medium text-[var(--color-text)]">
          <ul>
            {Object.keys(products[language] || {}).map((product) => (
              <li
                key={product}
                className={`cursor-pointer p-2 border-b-2 border-[var(--color-text25)] ${
                  selectedProduct === product ? "font-bold text-[var(--color-primary)]" : ""
                }`}
                onClick={() => setSelectedProduct(product)}
              >
                {product}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-primary)] underline cursor-pointer text-justify hover:text-[var(--color-darker)]">
            <Link href="/contact">{t.productsNote}</Link>
          </p>
        </div>
        <div className="w-full md:w-2/3 text-[var(--color-text)]">
          {products[language]?.[selectedProduct] && (
            <>
              <img
                src={products[language][selectedProduct].image}
                alt={selectedProduct}
                className="w-full max-w-full h-auto shadow-lg"
              />
              <p className="mt-4 text-sm sm:text-base lg:text-lg">
                {products[language][selectedProduct].description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>

    {/* Materials Section */}
    <section className="py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
      <div className="my-6 text-[var(--color-text)] font-medium">
        <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
          {t.materialsTitle}
        </h1>
        <h2 className="my-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left">
          {t.materialsSubtitle}
        </h2>
        <h3 className="text-justify text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-light">
          {t.materialsDesc}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 font-medium text-[var(--color-text)]">
          <ul>
            {Object.keys(materials[language] || {}).map((material) => (
              <li
                key={material}
                className={`cursor-pointer p-2 border-b border-[var(--color-text25)] ${
                  selectedMaterials === material ? "font-bold text-[var(--color-primary)]" : ""
                }`}
                onClick={() => setSelectedMaterials(material)}
              >
                {material}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-primary)] underline cursor-pointer text-justify hover:text-[var(--color-darker)]">
            <Link href="/contact">{t.materialsNote1}</Link>
            <br />
            <br />
            <Link href="/contact">{t.materialsNote2}</Link>
          </p>
        </div>
        <div className="w-full md:w-2/3 text-[var(--color-text)]">
          {materials[language]?.[selectedMaterials] && (
            <>
              <img
                src={materials[language][selectedMaterials].image}
                alt={selectedMaterials}
                className="w-full max-w-full h-auto shadow-lg"
              />
              <p className="mt-4 text-sm sm:text-base lg:text-lg">
                {materials[language][selectedMaterials].description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>

    {/* Finishing Section */}
    <section className="py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
      <div className="mb-6 text-[var(--color-text)] font-bold">
        <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
          {t.finishesTitle}
        </h1>
        <h2 className="my-4 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left">
          {t.finishesSubtitle}
        </h2>
        <h3 className="text-justify text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-light">
          {t.finishesDesc}
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 font-medium text-[var(--color-text)]">
          <ul>
            {Object.keys(finishes[language] || {}).map((finish) => (
              <li
                key={finish}
                className={`cursor-pointer p-2 border-b-2 border-[var(--color-text25)] ${
                  selectedFinish === finish ? "font-bold text-[var(--color-primary)]" : ""
                }`}
                onClick={() => setSelectedFinish(finish)}
              >
                {finish}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-[var(--color-primary)] underline cursor-pointer text-justify hover:text-[var(--color-darker)]">
            <Link href="/contact">{t.finishesNote}</Link>
          </p>
        </div>
        <div className="w-full md:w-2/3 text-[var(--color-text)] mt-6 md:mt-12">
          {finishes[language]?.[selectedFinish] && (
            <>
              <img
                src={finishes[language][selectedFinish].image}
                alt={selectedFinish}
                className="w-full max-w-full h-auto shadow-lg"
              />
              <p className="mt-4 text-sm sm:text-base lg:text-lg">
                {finishes[language][selectedFinish].description}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
    <FAQS />
  </>
);
}