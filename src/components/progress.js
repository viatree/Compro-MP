import { useState } from "react";
import { Briefcase, Calculator, PackageOpen, CheckCircle, Truck } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext"; // ✅ tambahkan

export default function Progress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage(); // ✅ gunakan context

  const translations = {
    EN: {
      heading: "How It Works",
      steps: [
        "Inquiry",
        "Quotation",
        "Packaging Development",
        "Production & Finishing",
        "Shipment",
      ],
      descriptions: [
        "Share your packaging requirements with our team.",
        "Receive a customised quotation based on your specifications.",
        "Create samples and prototypes for approval (optional).",
        "Complete in-house production from printing to final packaging.",
        "On-time delivery to your location, ready for market launch.",
      ],
    },
    ID: {
      heading: "Bagaimana Prosesnya",
      steps: [
        "Permintaan",
        "Penawaran",
        "Pengembangan Kemasan",
        "Produksi & Finishing",
        "Pengiriman",
      ],
      descriptions: [
        "Sampaikan kebutuhan kemasan Anda kepada tim kami.",
        "Dapatkan penawaran khusus sesuai spesifikasi Anda.",
        "Buat sampel dan prototipe untuk persetujuan (opsional).",
        "Produksi lengkap secara in-house dari pencetakan hingga finishing.",
        "Pengiriman tepat waktu ke lokasi Anda, siap diluncurkan ke pasar.",
      ],
    },
  };

  const t = translations[language];

  const stepContents = [
    {
      icon: <Briefcase className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      icon: <Calculator className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      icon: <PackageOpen className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[var(--color-primary)]" />,
    },
    {
      icon: <Truck className="h-10 w-10 text-[var(--color-primary)]" />,
    },
  ];

  return (
    <section className="relative w-full px-8 py-10 md:px-16 lg:px-24 xl:px-43 bg-white">
      {/* Heading */}
      <div className="text-left mb-10">
        <h1 className="text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-[var(--color-primary)]">
          {t.heading}
        </h1>
      </div>

      {/* Steps + Content */}
      <div className="flex flex-col md:flex-row items-start">
        {/* Step list */}
        <div className="flex flex-col space-y-6 md:w-1/3">
          {t.steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer flex items-center space-x-3 transition-all duration-300 ${
                  isActive
                    ? "font-semibold text-[var(--color-primary)]"
                    : "text-[var(--color-primary)]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center border text-sm font-reguler ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-primary)]"
                  }`}
                >
                  {index + 1}
                </div>
                <span>{step}</span>
              </div>
            );
          })}
        </div>

        {/* Dynamic Content */}
        <div className="w-full md:w-2/3 mt-6 md:mt-0">
          <div className="bg-[#E6F6FC] p-4 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-5 shadow-md rounded">
            <div className="shrink-0">{stepContents[activeIndex].icon}</div>
            <div>
              <h2 className="text-gray-900 font-medium mb-2 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[20px]">
                {t.steps[activeIndex]}
              </h2>
              <p className="text-[var(--color-text)] font-light leading-relaxed text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
                {t.descriptions[activeIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
