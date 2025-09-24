import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  EN: {
    title: "Page Under Construction",
    subtitle: "We’re crafting the best content for you. Please check back soon.",
    primary: "Back to Home",
    secondary: "Contact Us",
  },
  ID: {
    title: "Halaman Sedang Disiapkan",
    subtitle: "Kami sedang mengerjakan konten terbaik untukmu. Silakan kembali lagi nanti.",
    primary: "Kembali ke Beranda",
    secondary: "Hubungi Kami",
  },
};

export default function UnderConstruction({
  // Jika ingin override per-halaman, biarkan kosong agar auto-translate
  title,
  subtitle,
  ctaPrimaryHref = "/",
  ctaPrimaryLabel,
  ctaSecondaryHref = "/contact",
  ctaSecondaryLabel,
  imageSrc = "/images/under-construction.png",
}) {
  const { language } = useLanguage();
  const t = translations[language] || translations.ID;

  const computedTitle = title ?? t.title;
  const computedSubtitle = subtitle ?? t.subtitle;
  const computedPrimary = ctaPrimaryLabel ?? t.primary;
  const computedSecondary = ctaSecondaryLabel ?? t.secondary;

  return (
    <section className="min-h-[70vh] flex items-center justify-center py-28 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43">
      <div className="mx-auto max-w-4xl text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-8 w-full max-w-[520px] aspect-[16/10]">
          <Image
            src={imageSrc}
            alt="Under Construction Illustration"
            fill
            className="object-contain"
            priority
            sizes="(min-width:1280px) 520px, (min-width:768px) 520px, 100vw"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-[28px] md:text-[32px] lg:text-[40px] font-medium text-[var(--color-primary)]">
          {computedTitle}
        </h1>
        <p className="mt-3 text-[13px] md:text-[15px] lg:text-[16px] text-[var(--color-text)] font-light">
          {computedSubtitle}
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={ctaPrimaryHref}
            className="px-5 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-lighter)] transition"
          >
            {computedPrimary}
          </Link>
          <Link
            href={ctaSecondaryHref}
            className="px-5 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-text25)] transition"
          >
            {computedSecondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
