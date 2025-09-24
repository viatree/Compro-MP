import SEO from "../components/seo";
import UnderConstruction from "../components/UnderConstruction";
import { useLanguage } from "../contexts/LanguageContext";

const i18n = {
  EN: {
    seoTitle: "Mega Putra | Solutions",
    seoDesc: "Mega Putra is a leading company in high-quality packaging solutions.",
    ucTitle: "Solutions Page Under Construction",
    ucSubtitle: "Our team is polishing the best details for you. Stay tuned.",
    primary: "Back to Home",
    secondary: "Need Help?",
  },
  ID: {
    seoTitle: "Mega Putra | Solusi",
    seoDesc: "Mega Putra adalah perusahaan terkemuka dalam solusi packaging dengan kualitas terbaik.",
    ucTitle: "Halaman Solutions Sedang Disiapkan",
    ucSubtitle: "Tim kami sedang merapikan detail solusi terbaik untuk Anda. Nantikan pembaruan segera.",
    primary: "Kembali ke Beranda",
    secondary: "Butuh Bantuan?",
  },
};

export default function Solutions() {
  const { language } = useLanguage();
  const t = i18n[language] || i18n.ID;

  return (
    <>
      <SEO
        title={t.seoTitle}
        description={t.seoDesc}
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/logo.png"
        url="https://megaputra.com/solutions"
      />
      <UnderConstruction
        title={t.ucTitle}
        subtitle={t.ucSubtitle}
        ctaPrimaryHref="/"
        ctaPrimaryLabel={t.primary}
        ctaSecondaryHref="/contact"
        ctaSecondaryLabel={t.secondary}
        imageSrc="/images/404.png"
      />
    </>
  );
}
