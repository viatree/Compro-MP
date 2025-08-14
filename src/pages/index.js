import SEO from "../components/seo";
import Progress from "../components/progress";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"
import { useLanguage } from "../contexts/LanguageContext"; // ✅ Tambah ini

const translations = {
  EN: {
    heroTitle1: "Paper Packaging Solutions",
    heroTitle2: "For Every Industry",
    heroSubtitle: "Customised Packaging. Trusted Solutions.",
    certifications: "ISO 9001:2015 • FSC Certified • Halal Certified",
    cta: "Discover Our Solutions",
    offerTitle: "What We Offer",
    offerSubtitle: "Comprehensive Paper Packaging Solutions",
    offerDesc:
      "With decades of hands-on experience, PT Mega Putra delivers seamless in-house packaging services—from design prototyping and colour development to high-precision printing and finishing. Our integrated approach ensures consistent quality and customised solutions that align with each brand's unique requirements.",
    qualityTitle: "Commitment to Quality and Standards",
    box1Title: "Quality, Innovation, Efficiency",
    box1Desc:
      "PT Mega Putra combines technical expertise, sustainable practices, and cutting-edge equipment to deliver trusted packaging solutions.",
    box1Link: "Explore Our Solutions",
    box2Title: "Over 28 Years of Printing & Packaging Expertise",
    box2Desc:
      "Established in 1997, PT Mega Putra has built a long-standing reputation for delivering high-quality, innovative, and reliable packaging solutions across industries.",
    box2Link: "Learn About Mega Putra",
  },
  ID: {
    heroTitle1: "Solusi Kemasan Kertas",
    heroTitle2: "Untuk Semua Industri",
    heroSubtitle: "Kemasan Kustom. Solusi Terpercaya.",
    certifications: "ISO 9001:2015 • Tersertifikasi FSC • Tersertifikasi Halal",
    cta: "Lihat Solusi Kami",
    offerTitle: "Apa yang Kami Tawarkan",
    offerSubtitle: "Solusi Kemasan Kertas Terpadu",
    offerDesc:
      "Dengan pengalaman puluhan tahun, PT Mega Putra menyediakan layanan kemasan in-house secara menyeluruh—dari desain, pengembangan warna, hingga pencetakan presisi tinggi. Pendekatan terintegrasi kami memastikan kualitas konsisten dan solusi sesuai kebutuhan setiap merek.",
    qualityTitle: "Komitmen terhadap Kualitas dan Standar",
    box1Title: "Kualitas, Inovasi, Efisiensi",
    box1Desc:
      "PT Mega Putra menggabungkan keahlian teknis, praktik berkelanjutan, dan peralatan mutakhir untuk menghadirkan solusi kemasan terpercaya.",
    box1Link: "Jelajahi Solusi Kami",
    box2Title: "28+ Tahun Pengalaman di Industri Kemasan",
    box2Desc:
      "Didirikan pada tahun 1997, PT Mega Putra telah membangun reputasi kuat dalam menyediakan solusi kemasan inovatif dan berkualitas tinggi di berbagai industri.",
    box2Link: "Pelajari Tentang Mega Putra",
  },
};

const cards = {
  EN: [
    {
      img: "/images/7RV03391.jpg",
      title: "Packaging Development & Prototyping",
      desc: "Sample creation with advanced flatbed cutting",
    },
    {
      img: "/images/7RV03558.jpg",
      title: "High-Quality Offset & UV Printing",
      desc: "Versatile printing with in-line coating and embossing",
    },
    {
      img: "/images/7RV03872.jpg",
      title: "Customised Colour Development",
      desc: "In-house colour lab for precise brand matching",
    },
    {
      img: "/images/7RV03354.jpg",
      title: "Comprehensive In-House Production",
      desc: "End-to-end service for seamless project execution",
    },
  ],
  ID: [
    {
      img: "/images/7RV03391.jpg",
      title: "Pengembangan & Prototipe Kemasan",
      desc: "Pembuatan sampel dengan pemotongan flatbed canggih",
    },
    {
      img: "/images/7RV03558.jpg",
      title: "Offset & UV Printing Berkualitas Tinggi",
      desc: "Pencetakan fleksibel dengan pelapisan dan embossing in-line",
    },
    {
      img: "/images/7RV03872.jpg",
      title: "Pengembangan Warna Khusus",
      desc: "Lab warna internal untuk pencocokan warna merek yang presisi",
    },
    {
      img: "/images/7RV03354.jpg",
      title: "Produksi Lengkap di Dalam Perusahaan",
      desc: "Layanan menyeluruh untuk pelaksanaan proyek yang lancar",
    },
  ],
};

export default function Home() {
  const { language } = useLanguage(); // ✅ Gunakan context
  const t = translations[language];
  const cardContent = cards[language];

  return (
    <>
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/logo.png"
        url="https://megaputra.com"
      />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] sm:h-screen mt-16 sm:mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/7RV03148.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
          />
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-4 sm:px-6 md:px-12">
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,18)] tracking-wider">
            {t.heroTitle1}
          </h1>
          <h2 className="text-[clamp(1.5rem,5vw,3rem)] font-semibold mt-2 sm:mt-4 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] tracking-wider">
            {t.heroTitle2}
          </h2>
          <p className="mt-4 sm:mt-6 text-[clamp(0.9rem,2.5vw,1.25rem)] font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
            {t.heroSubtitle}
          </p>
          <p className="mt-2 mb-4 text-[clamp(0.75rem,2vw,1rem)] font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]">
            {t.certifications}
          </p>
          <Link href="/solutions">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-darker)] transition-all duration-300 text-white font-semibold text-[clamp(0.9rem,2vw,1.125rem)] px-6 py-2 rounded-md cursor-pointer">
              {t.cta}
            </button>
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
        <h2 className="my-2 text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
          {t.offerTitle}
        </h2>
        <h3 className="my-4 text-[16px] md:text-[20px] lg:text-[24px] font-light text-left text-[var(--color-text)]">
          {t.offerSubtitle}
        </h3>
        <p className="text-justify text-[var(--color-text)] text-[12px] md:text-[14px] lg:text-[16px] font-light">
          {t.offerDesc}
        </p>

        {/* Card Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 gap-y-6">
          {cardContent.map(({ img, title, desc }, i) => (
            <div key={i} className="text-center">
              <div className="relative w-full flex justify-center items-center">
                <Image
                  src={img}
                  alt={title}
                  width={300}
                  height={180}
                  className="w-full h-full"
                />
              </div>
              <h4 className="mt-2 text-[14px] md:text-[16px] lg:text-[18px] font-medium text-[var(--color-primary)]">
                {title}
              </h4>
              <p className="mt-1 text-[12px] md:text-[14px] lg:text-[16px] text-[var(--color-text)] font-light">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Progress Section */}
      <Progress />
      
      {/* Quality Section */}
<section className="py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
  <h2 className="text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)] mb-10">
    {t.qualityTitle}
  </h2>

  <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 text-center">
    {[
      {
        img: "/images/sgs.png",
        title: "ISO 9001:2015",
        since: "Since 2010",
      },
      {
        img: "/images/fsc.png",
        title: "Certificate number: C151498",
        since: "Since 2019",
      },
      {
        img: "/images/halal.png",
        title: "ID36410020910631224",
        since: "Since 2024",
      },
    ].map(({ img, title, since }, i) => (
      <div key={i} className="flex flex-col items-center">
        <img src={img} alt={title} className="h-20 sm:h-24 mb-4" />
        <p className="text-[12px] md:text-[14px] lg:text-[16px] mt-2 text-[var(--color-text)] max-w-xs">
          <span className="font-medium block">{title}</span>
          <span className="font-light block mt-1">{since}</span>
        </p>
      </div>
    ))}
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
      {
        image: "/images/7RV03608.jpg",
        title: t.box1Title,
        desc: t.box1Desc,
        linkText: t.box1Link,
        href: "/solutions",
      },
      {
        image: "/images/7RV04057.jpg",
        title: t.box2Title,
        desc: t.box2Desc,
        linkText: t.box2Link,
        href: "/company",
      },
    ].map(({ image, title, desc, linkText, href }, i) => (
      <Link key={i} href={href} className="block h-full group">
        <div className="relative flex flex-col h-full transition duration-300 hover:brightness-100">
          <img
            src={image}
            alt={title}
            className="w-full h-[150px] sm:h-[200px] md:h-[200px] object-cover"
          />
          <div className="flex flex-col justify-between flex-grow bg-[#E6F6FC] text-[var(--color-text)] group-hover:bg-primary group-hover:text-white p-6 transition-colors duration-300">
            <div>
              <h4 className="text-[14px] md:text-[16px] lg:text-[20px] font-reguler">
                {title}
              </h4>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-light mt-1">
                {desc}
              </p>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2">
              <span className="inline-block font-light text-[16px] group-hover:underline">
                {linkText}
              </span>
              <FiArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>
    </>
  );
}
