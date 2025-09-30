import SEO from "../components/seo";
import Jobs from "@/components/jobs";
import Faq from "@/components/faq";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const translations = {
  EN: {
    seoTitle: "Mega Putra | Quality is Priority",
    seoDesc: "Mega Putra is a leading company in paper packaging solutions with top quality.",
    bannerTitle: "Building Careers Through PEAK",
    bannerSubtitle: "Care, Efficient, Accurate, Collaborate",
    desc: "At Mega Putra, we believe that strong careers are built on values. Join our team and experience a workplace dedicated to care, efficiency, accuracy, and collaboration.",
    steps: [
      {
        step: "1. Submit Application",
        description: "Send us your CV, portfolio, and other required documents through our online platform.",
      },
      {
        step: "2. Initial Interview",
        description: "Have a conversation with HR or the hiring manager to discuss your background and experiences.",
      },
      {
        step: "3. Skills and Aptitude Assessment",
        description: "Complete assessments designed to evaluate your skills, logical thinking, and job fit.",
      },
      {
        step: "4. Final Interview & Offer Discussion",
        description: "Meet with company leaders, align expectations, and discuss your offer.",
      },
      {
        step: "5. Join the Mega Putra Team",
        description: "Complete orientation and start your exciting journey with Mega Putra.",
        highlight: true,
      },
    ],
  },

  ID: {
    seoTitle: "Mega Putra | Kualitas adalah Prioritas",
    seoDesc: "Mega Putra adalah perusahaan terkemuka dalam solusi kemasan kertas dengan kualitas terbaik.",
    bannerTitle: "Bangun Karier Bersama PEAK",
    bannerSubtitle: "Peduli, Efisien, Akurat, Kerjasama",
    desc: "Di Mega Putra, kami percaya bahwa karier yang kuat dibangun berdasarkan nilai-nilai. Bergabunglah bersama kami dan rasakan lingkungan kerja yang peduli, efisien, akurat, dan kolaboratif.",
    steps: [
      {
        step: "1. Kirim Lamaran",
        description: "Kirim CV, portofolio, dan dokumen lainnya melalui platform online kami.",
      },
      {
        step: "2. Wawancara Awal",
        description: "Wawancara dengan HR atau manajer rekrutmen untuk membahas latar belakang dan pengalaman Anda.",
      },
      {
        step: "3. Tes Keterampilan & Aptitude",
        description: "Lakukan tes untuk mengukur keterampilan, logika, dan kecocokan Anda dengan posisi.",
      },
      {
        step: "4. Wawancara Akhir & Penawaran",
        description: "Bertemu dengan pimpinan perusahaan untuk menyamakan ekspektasi dan membahas penawaran kerja.",
      },
      {
        step: "5. Bergabung dengan Tim Mega Putra",
        description: "Ikuti orientasi dan mulai perjalanan karier Anda di Mega Putra.",
        highlight: true,
      },
    ],
  },
};

export default function Careers() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />
      <section className="relative bg-[url('/images/banner5.png')] bg-cover bg-center flex items-end h-[100px] sm:h-[210px] md:h-[260px] lg:h-[300px] mt-18" />

      <section className="py-6 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
        <h1 className=" text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
          {t.bannerTitle}
          <br />
          {t.bannerSubtitle}
        </h1>
        <h2 className="text-start text-justify text-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-[var(--color-text)]">
          {t.desc}
        </h2>
      </section>

      <section className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43 grid grid-cols-1 md:grid-cols-5 gap-8">
        {t.steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 ${step.highlight
                ? "bg-[var(--color-primary)] text-white"
                : "bg-[var(--color-card)] text-[var(--color-text)]"
              }`}
          >
            <h3 className="font-semibold text-[16px]">{step.step}</h3>
            <p className="mt-2 font-light text-[14px]">{step.description}</p>
          </div>
        ))}
      </section>

      <Jobs />
      <Faq />
    </>
  );
}
