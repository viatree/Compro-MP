"use client";

import { useLanguage } from "../contexts/LanguageContext";
import SEO from "../components/seo";
import Timeline from "@/components/timeline";
// import Technology from "../components/technology";
import Image from "next/image";
import { Clock3, Target, Handshake, HandHeart, Leaf, HardHat } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const translations = {
  EN: {
    seoTitle: "Mega Putra | Company",
    seoDesc: "Mega Putra is a leading paper packaging company providing high-quality solutions.",
    aboutTitle: "About Megaputra",
    aboutSubtitle: "Delivering Trusted Paper Packaging Solutions Since 1997",
    aboutDesc:
      "Established in 1997, PT Mega Putra has grown into a leading offset printing and packaging solutions provider. With over 28 years of experience, we serve both local and international customers across diverse industries including cosmetics, pharmaceuticals, FMCG, automotive, and food.\n\nOur commitment to quality, innovation, and efficiency ensures we deliver customised solutions that help brands elevate their packaging standards.",
    storyTitle: "The Story Behind Mega Putra",
    storyDesc:
      "Mega Putra was built on the principles of knowledge, determination, effort, and honesty—values that continue to shape who we are today.\n\nFrom the very beginning, quality has been our priority. Today, these founding principles are reflected in our corporate culture: Peduli (Care), Efisien (Efficient), Akurat (Accurate), and Kerjasama (Collaborate)—collectively known as PEAK.\n\nMega Putra strives to be a trusted partner for employees, suppliers, and customers alike. We are committed to fostering an environment that encourages continuous improvement for our employees, building strong, transparent relationships with suppliers, and delivering high-quality products with exceptional service to our customers.\n\nThrough these commitments, Mega Putra continues to set new standards of excellence and integrity in the printing and packaging industry.",
    visionTitle: "Our Vision and Mission",
    vision: "Vision",
    visionText:
      "To lead growth and innovation within the packaging industry by delivering sustainable, high-quality solutions that inspire trust and drive industry progress.",
    mission: "Mission",
    missionList: [
      "Uphold and advance the highest standards of product quality and customer service.",
      "Apply PEAK values in all aspects of our operations.",
      "Encourage learning, growth, and continuous improvement.",
      "Integrate sustainability across the business.",
    ],
    capabilitiesTitle: "Our Capabilities",
    capabilitiesSubtitle: "Delivering Quality Through Integrated Capabilities",
    capabilities: [
      {
        src: "/images/7RV03391.jpg",
        title: "In-House Prepress & Prototyping",
        desc: "Precise die-cutting board creation and rapid sample prototyping to ensure accurate, efficient packaging development.",
      },
      {
        src: "/images/7RV03558.jpg",
        title: "Offset & UV Printing",
        desc: "Advanced offset and UV printing technology delivering vibrant colours, multi-colour printing, and specialised finishes.",
      },
      {
        src: "/images/7RV03872.jpg",
        title: "Finishing & Embellishments",
        desc: "Premium post-press finishing options including hot stamping, embossing, laminating, window patching, and spot UV.",
      },
      {
        src: "/images/7RV03354.jpg",
        title: "Quality Control",
        desc: "Automated and manual quality control processes following QC AQL standards to ensure consistent, high-quality production.",
      },
    ],
    valuesTitle: "Corporate Values & Ethics",
    valuesSubtitle: "Guided by PEAK Values: Peduli (Care), Efisien (Efficiency), Akurat (Accuracy), and Kerjasama (Collaboration)",
    values: [
      { icon: <HandHeart size={40} />, title: "Peduli", subtitle: "Care", desc: "We foster a supportive and respectful work environment." },
      { icon: <Clock3 size={40} />, title: "Efisien", subtitle: "Efficient", desc: "We optimize processes to save time and resources." },
      { icon: <Target size={40} />, title: "Akurat", subtitle: "Accurate", desc: "We ensure precision in all our products and services." },
      { icon: <Handshake size={40} />, title: "Kerjasama", subtitle: "Collaborate", desc: "We work together with honesty and transparency." },
    ],
    responsibilityTitle: "Corporate Responsibilities",
    responsibilitySubtitle: "Committed to Sustainability, Ethics, and Workplace Excellence.",
    responsibilities: [
      { icon: <Leaf size={64} strokeWidth={1.5} />, title: "Sustainability", desc: "FSC-certified paper, water-based coatings, waste reduction" },
      { icon: <Handshake size={64} strokeWidth={1.5} />, title: "Ethical Business Practices", desc: "Building trusted, transparent partnerships" },
      { icon: <HardHat size={64} strokeWidth={1.5} />, title: "Workplace Safety", desc: "Ensuring a safe, healthy environment with K3-certified personnel" },
    ],
    certificationTitle: "Certification",
    certificationSubtitle: "Recognized Standards of Quality, Sustainability, and Compliance.",
    certificationDesc: "Mega Putra is certified under ISO 9001:2015, FSC®, and Indonesian Halal standards. We also passed the Disney ILS audit.",
    certifications: [
      { img: "/images/sgs.png", title: "ISO 9001:2015", desc: "Certified for quality management and improvement." },
      { img: "/images/fsc.png", title: "FSC® Certification", desc: "Supporting sustainable forestry and eco-packaging." },
      { img: "/images/halal.png", title: "Halal Certification", desc: "Compliant with Halal packaging standards." },
    ],
    cta: "At Mega Putra, we are committed to delivering quality, precision, and innovative packaging solutions you can trust. Discover how our capabilities can help elevate your brand.",
    ctaBtn: "Explore Our Solutions",
  },
ID: {
  seoTitle: "Mega Putra | Perusahaan",
  seoDesc: "Mega Putra adalah perusahaan kemasan kertas terkemuka yang menyediakan solusi berkualitas tinggi.",
  aboutTitle: "Tentang Megaputra",
  aboutSubtitle: "Menyediakan Solusi Kemasan Kertas Terpercaya Sejak 1997",
  aboutDesc:
    "Didirikan pada tahun 1997, PT Mega Putra telah berkembang menjadi penyedia solusi cetak offset dan kemasan terkemuka. Dengan pengalaman lebih dari 28 tahun, kami melayani pelanggan lokal dan internasional dari berbagai industri, termasuk kosmetik, farmasi, FMCG, otomotif, dan makanan.\n\nKomitmen kami terhadap kualitas, inovasi, dan efisiensi memastikan kami memberikan solusi yang disesuaikan untuk membantu merek meningkatkan standar kemasan mereka.",
  storyTitle: "Kisah di Balik Mega Putra",
  storyDesc:
    "Mega Putra dibangun berdasarkan prinsip pengetahuan, tekad, kerja keras, dan kejujuran—nilai-nilai yang terus membentuk siapa kami hingga hari ini.\n\nSejak awal, kualitas menjadi prioritas kami. Kini, prinsip-prinsip dasar ini tercermin dalam budaya perusahaan kami: Peduli, Efisien, Akurat, dan Kerjasama—yang secara kolektif dikenal sebagai PEAK.\n\nMega Putra berusaha menjadi mitra terpercaya bagi karyawan, pemasok, dan pelanggan. Kami berkomitmen untuk menciptakan lingkungan yang mendorong perbaikan berkelanjutan bagi karyawan, membangun hubungan yang kuat dan transparan dengan pemasok, serta memberikan produk berkualitas tinggi dan layanan yang luar biasa kepada pelanggan.\n\nMelalui komitmen ini, Mega Putra terus menetapkan standar baru dalam keunggulan dan integritas di industri percetakan dan kemasan.",
  visionTitle: "Visi dan Misi Kami",
  vision: "Visi",
  visionText:
    "Menjadi pemimpin dalam pertumbuhan dan inovasi industri kemasan dengan memberikan solusi berkelanjutan dan berkualitas tinggi yang membangun kepercayaan dan mendorong kemajuan industri.",
  mission: "Misi",
  missionList: [
    "Menjaga dan meningkatkan standar tertinggi dalam kualitas produk dan layanan pelanggan.",
    "Menerapkan nilai-nilai PEAK dalam seluruh operasi kami.",
    "Mendorong pembelajaran, pertumbuhan, dan perbaikan berkelanjutan.",
    "Mengintegrasikan keberlanjutan ke seluruh aspek bisnis.",
  ],
  capabilitiesTitle: "Kemampuan Kami",
  capabilitiesSubtitle: "Memberikan Kualitas Melalui Kemampuan Terintegrasi",
  capabilities: [
    {
      src: "/images/7RV03391.jpg",
      title: "Pra-Cetak & Prototipe Internal",
      desc: "Pembuatan papan potong presisi dan prototipe sampel cepat untuk memastikan pengembangan kemasan yang akurat dan efisien.",
    },
    {
      src: "/images/7RV03558.jpg",
      title: "Cetak Offset & UV",
      desc: "Teknologi cetak offset dan UV canggih yang menghasilkan warna cerah, cetak multi-warna, dan finishing khusus.",
    },
    {
      src: "/images/7RV03872.jpg",
      title: "Finishing & Embellishment",
      desc: "Pilihan finishing pasca-cetak premium seperti hot stamping, embossing, laminasi, window patching, dan spot UV.",
    },
    {
      src: "/images/7RV03354.jpg",
      title: "Kontrol Kualitas",
      desc: "Proses kontrol kualitas manual dan otomatis sesuai standar QC AQL untuk memastikan produksi yang konsisten dan berkualitas tinggi.",
    },
  ],
  valuesTitle: "Nilai & Etika Perusahaan",
  valuesSubtitle: "Dipandu oleh Nilai PEAK: Peduli, Efisien, Akurat, dan Kerjasama",
  values: [
    { icon: <HandHeart size={40} />, title: "Peduli", subtitle: "Care", desc: "Kami menciptakan lingkungan kerja yang mendukung dan saling menghormati." },
    { icon: <Clock3 size={40} />, title: "Efisien", subtitle: "Efficient", desc: "Kami mengoptimalkan proses untuk menghemat waktu dan sumber daya." },
    { icon: <Target size={40} />, title: "Akurat", subtitle: "Accurate", desc: "Kami memastikan ketepatan dalam semua produk dan layanan kami." },
    { icon: <Handshake size={40} />, title: "Kerjasama", subtitle: "Collaboration", desc: "Kami bekerja sama dengan kejujuran dan transparansi." },
  ],
  responsibilityTitle: "Tanggung Jawab Perusahaan",
  responsibilitySubtitle: "Berkomitmen pada Keberlanjutan, Etika, dan Keunggulan Tempat Kerja.",
  responsibilities: [
    { icon: <Leaf size={64} strokeWidth={1.5} />, title: "Keberlanjutan", desc: "Kertas bersertifikat FSC, pelapisan berbahan dasar air, pengurangan limbah" },
    { icon: <Handshake size={64} strokeWidth={1.5} />, title: "Etika Bisnis", desc: "Membangun kemitraan yang terpercaya dan transparan" },
    { icon: <HardHat size={64} strokeWidth={1.5} />, title: "Keamanan Kerja", desc: "Menyediakan lingkungan kerja yang aman dan sehat dengan personel bersertifikat K3" },
  ],
  certificationTitle: "Sertifikasi",
  certificationSubtitle: "Standar Kualitas, Keberlanjutan, dan Kepatuhan yang Diakui.",
  certificationDesc: "Mega Putra bersertifikasi ISO 9001:2015, FSC®, dan Halal Indonesia. Kami juga lulus audit Disney ILS.",
  certifications: [
    { img: "/images/sgs.png", title: "ISO 9001:2015", desc: "Tersertifikasi untuk manajemen dan peningkatan kualitas." },
    { img: "/images/fsc.png", title: "Sertifikasi FSC®", desc: "Mendukung kehutanan berkelanjutan dan kemasan ramah lingkungan." },
    { img: "/images/halal.png", title: "Sertifikasi Halal", desc: "Memenuhi standar kemasan Halal." },
  ],
  cta: "Di Mega Putra, kami berkomitmen untuk memberikan solusi kemasan yang berkualitas, presisi, dan inovatif yang dapat Anda percaya. Temukan bagaimana kemampuan kami dapat meningkatkan merek Anda.",
  ctaBtn: "Jelajahi Solusi Kami",
}

};

export default function Company() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <SEO title={t.seoTitle} description={t.seoDesc} />

      {/* About Section */}
      <section id="about" className="mt-30 my-10 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="my-2 text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">{t.aboutTitle}</h1> 
        <h2 className="my-2 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left text-[var(--color-text)]">{t.aboutSubtitle}</h2>
        <p className="text-justify text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light text-[var(--color-text)]">{t.aboutDesc}</p>
      </section>

      {/* Banner */}
      <section className=" relative 
  bg-[url('/images/banner4.png')] 
  bg-cover 
  bg-center 
  sm:bg-center 
  md:bg-top 
  lg:bg-center 
  flex 
  items-end 
  h-[150px]     // default mobile
  sm:h-[240px]  // tablet
  md:h-[280px]  // small desktop
  lg:h-[310px]  // original desktop
  px-4 sm:px-8 md:px-12" />

      {/* The Story */}
      <section className="my-10 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-start text-justify ">
          <div className="w-full">
        <h2 className="my-2 text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">{t.storyTitle}</h2>
        
        <p className="text-justify text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light  text-[var(--color-text)]">{t.storyDesc}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="my-10">
        <Timeline />
      </section>

     {/* Vision and Mission */}
<section
  id="vision"
  className="my-14 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row gap-8 items-start"
>
  {/* Left Image for Desktop */}
  <div className="hidden md:block md:w-1/2">
    <div className="relative w-full h-[500px] lg:h-[500px]">
      <Image
        src="/images/pict8.png"
        alt="Employee working in a printing company"
        fill
        className="object-fill object-top"
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="md:w-1/2">
    <h2 className="text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-[var(--color-primary)]">
      {t.visionTitle}
    </h2>

    {/* Mobile Image */}
    <div className="block md:hidden my-4">
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/pict8.png"
          alt="Employee"
          fill
          className=" object-cover object-top"
        />
      </div>
    </div>

    {/* Vision Section */}
    <h3 className="my-4 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold text-left text-[var(--color-text)]">
      {t.vision}
    </h3>
    <p className="mb-4 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[var(--color-text)] font-light">
      {t.visionText}
    </p>

    {/* Mission Section */}
    <h3 className="my-4 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-bold text-left text-[var(--color-text)]">
      {t.mission}
    </h3>
    <ul className="list-decimal list-inside text-[var(--color-text)] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light space-y-2">
      {t.missionList.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
</section>

      {/* Technology */}
      {/* <section className="my-10">
        <Technology />
      </section> */}

      {/* Capabilities */}
      <section id="capabilities" className="my-10 px-8 md:px-16 lg:px-24 xl:px-43">
        <h2 className="my-4  text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">{t.capabilitiesTitle}</h2>
        <h3 className="my-4  text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left text-[var(--color-text)]">{t.capabilitiesSubtitle}</h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-x-2 md:grid-cols-4 sm:gap-x-4 gap-y-6">
          {t.capabilities.map(({ src, title, desc }, i) => (
            <div key={i} className="text-center">
              <div className="relative w-full h-[250px]">
                <Image src={src} alt={title} layout="fill" objectFit="cover" />
              </div>
              <h4 className="mt-4 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px] font-medium text-[var(--color-primary)]">{title}</h4>
              <p className="mt-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light text-[var(--color-text)] ">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section id="values" className="my-10 px-8 md:px-16 lg:px-24 xl:px-43">
        <h2 className="my-4 text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">{t.valuesTitle}</h2>
        <h3 className="text-start text-justify text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-[var(--color-text)]">{t.valuesSubtitle}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 text-justify">
          {t.values.map(({ icon, title, subtitle, desc }, i) => (
            <div key={i} className="p-3 flex flex-col items-center text-center">
              <div className="flex items-center justify-center w-12 h-12 mb-2 text-[var(--color-primary)]">{icon}</div>
              <h3 className="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[var(--color-primary)] mb-1">{title}</h3>
              <p className="text-[13px] md:text-[15px] text-gray-500 mb-1">{subtitle}</p>
              <p className="text-[12px] md:text-[14px] lg:text-[15px] font-light text-[var(--color-text)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Responsibilities */}
      <section className="my-10 px-8 md:px-16 lg:px-24 xl:px-43">
        <h2 className="my-4 text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-[var(--color-primary)] text-left">{t.responsibilityTitle}</h2>
        <h3 className="my-4 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left text-[var(--color-text)]">{t.responsibilitySubtitle}</h3>
        <div className="grid grid-cols-3 gap-6 text-center">
          {t.responsibilities.map(({ icon, title, desc }, i) => (
            <div key={i} className="bg-white lg:p-6 md:p-4 flex flex-col items-center">
              <div className="mb-4 text-[var(--color-primary)]">{icon}</div>
              <h3 className="text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[var(--color-primary)] mb-2">{title}</h3>
              <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-light text-[var(--color-text)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="my-10 px-8 md:px-16 lg:px-24 xl:px-43">
        <h2 className="my-4 text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">{t.certificationTitle}</h2>
        <h3 className="my-4 text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-left text-[var(--color-text)]">{t.certificationSubtitle}</h3>
        <p className="text-left text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[var(--color-text)] my-4">{t.certificationDesc}</p>
        <div className="grid grid-cols-3 md:grid-cols-3 text-center">
          {t.certifications.map(({ img, title, desc }, i) => (
            <div key={i} className="bg-white flex flex-col items-center">
              <img src={img} alt={title} className="h-24 mb-4" />
              <h3 className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-medium text-[var(--color-primary)]">{title}</h3>
              <p className="text-[10px] sm:text-[10px] md:text-[14px] lg:text-[16px] font-light text-[var(--color-text)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43 text-center bg-[#E6F6FC]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px] text-[var(--color-text)] py-6 px-8 md:px-4 lg:px-4">{t.cta}</p>
          <button className="bg-[var(--color-primary)] text-white font-medium lg:px-6 md:px-4 sm:px-2 px-2 py-3 rounded-md hover:bg-[var(--color-lighter)] transition inline-flex items-center gap-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
            {t.ctaBtn}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}