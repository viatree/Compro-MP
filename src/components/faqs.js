import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqs = {
  EN: [
    {
      question: "What is your minimum order quantity (MOQ)?",
      answer:
        "Our minimum order quantity varies depending on product specifications, materials, and finishes. Please contact us directly for detailed information.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by contacting our sales team directly via email or phone. Our team will guide you through the ordering process, from consultation to final delivery.",
    },
    {
      question: "What materials and finishes are available?",
      answer:
        "We offer a wide variety of materials, including ivory board, duplex board, art carton, FSC-certified paper, kraft paper, and specialty textured papers. Finishing options include hot stamping, embossing, spot UV, lamination, and more. Please refer to our 'Material & Finishing Options' section for detailed information.",
    },
    {
      question: "Do you offer sustainable packaging solutions?",
      answer:
        "Yes, sustainability is central to our operations. We provide FSC-certified paper, recycled materials, water-based coatings, and continuously implement practices to minimise environmental impact.",
    },
    {
      question: "Can you provide packaging prototypes or samples?",
      answer:
        "Absolutely. We offer rapid prototyping using flatbed cutter technology, allowing clients to preview packaging designs and test compatibility before mass production. Blank samples produced via die-cutting boards and printed samples are also available upon request and are chargeable.",
    },
    {
      question: "Do you have industry certifications?",
      answer:
        "Yes, PT Mega Putra is certified to ISO 9001:2015, FSC Certification, and Indonesian Halal Certification. We have also successfully completed a Disney ILS audit.",
    },
    {
      question: "What industries do you specialise in?",
      answer:
        "Our expertise spans multiple industries including cosmetics, pharmaceuticals, FMCG, automotive, food, and stationery.",
    },
  ],
  ID: [
    {
      question: "Berapa jumlah pesanan minimum (MOQ)?",
      answer:
        "Jumlah pesanan minimum kami bervariasi tergantung pada spesifikasi produk, bahan, dan finishing. Silakan hubungi kami langsung untuk informasi lebih lanjut.",
    },
    {
      question: "Bagaimana cara melakukan pemesanan?",
      answer:
        "Anda dapat melakukan pemesanan dengan menghubungi tim penjualan kami secara langsung melalui email atau telepon. Tim kami akan memandu Anda melalui proses pemesanan, mulai dari konsultasi hingga pengiriman akhir.",
    },
    {
      question: "Bahan dan finishing apa saja yang tersedia?",
      answer:
        "Kami menawarkan berbagai pilihan bahan, termasuk ivory board, duplex board, art carton, kertas bersertifikat FSC, kertas kraft, dan kertas bertekstur khusus. Opsi finishing mencakup hot stamping, embossing, spot UV, laminasi, dan lainnya. Silakan lihat bagian 'Opsi Bahan & Finishing' untuk informasi lebih lengkap.",
    },
    {
      question: "Apakah kalian menawarkan solusi kemasan ramah lingkungan?",
      answer:
        "Ya, keberlanjutan adalah bagian penting dari operasional kami. Kami menyediakan kertas bersertifikat FSC, bahan daur ulang, pelapis berbasis air, dan terus menerapkan praktik untuk meminimalkan dampak terhadap lingkungan.",
    },
    {
      question: "Apakah kalian menyediakan prototipe atau sampel kemasan?",
      answer:
        "Tentu saja. Kami menawarkan pembuatan prototipe cepat menggunakan teknologi pemotong flatbed, memungkinkan klien melihat desain kemasan dan menguji kecocokan sebelum produksi massal. Sampel kosong dari papan die-cut dan sampel cetak juga tersedia atas permintaan dan dapat dikenakan biaya.",
    },
    {
      question: "Apakah kalian memiliki sertifikasi industri?",
      answer:
        "Ya, PT Mega Putra telah tersertifikasi ISO 9001:2015, Sertifikasi FSC, dan Sertifikasi Halal Indonesia. Kami juga telah berhasil menyelesaikan audit Disney ILS.",
    },
    {
      question: "Industri apa saja yang menjadi spesialisasi kalian?",
      answer:
        "Kami memiliki keahlian di berbagai industri termasuk kosmetik, farmasi, FMCG, otomotif, makanan, dan alat tulis.",
    },
  ],
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { language } = useLanguage();
  const faqsData = faqs[language];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionTitle =
    language === "EN"
      ? "Frequently Asked Questions (FAQs)"
      : "Pertanyaan yang Sering Diajukan (FAQs)";

  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
      <h2 className="text-[34px] font-semibold text-[var(--color-primary)] mb-6 border-b-4 border-[var(--color-primary)] pb-2 ">
        {sectionTitle}
      </h2>

      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[var(--color-text25)] transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left text-lg font-medium text-[var(--color-text)] focus:outline-none cursor-pointer"
            >
              <span>{faq.question}</span>
              {openIndex === index ? (
                <Minus size={28} className="text-[var(--color-primary)] shrink-0" />
              ) : (
                <Plus size={28} className="text-[var(--color-primary)] shrink-0"  />
              )}
            </button>
            {openIndex === index && (
              <p className="text-base text-[var(--color-text)] pb-4 transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
