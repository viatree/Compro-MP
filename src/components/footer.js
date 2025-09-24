import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  EN: {
    contactUs: "Contact Us",
    phone: "021-29662288",
    email: "marketing@megaputra.com",
    addressTitle: "Address",
    address:
      "Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315",
    quickLinks: "Quick Links",
    company: "Company",
    solutions: "Solutions",
    portfolio: "Portfolio",
    resources: "Resources",
    careers: "Careers",
    contact: "Contact",
    copyright: "Copyright",
    rights: "All Rights Reserved",
  },
  ID: {
    contactUs: "Hubungi Kami",
    phone: "021-29662288",
    email: "marketing@megaputra.com",
    addressTitle: "Alamat",
    address:
      "Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315",
    quickLinks: "Tautan Cepat",
    company: "Perusahaan",
    solutions: "Solusi",
    portfolio: "Portofolio",
    resources: "Sumber Daya",
    careers: "Karier",
    contact: "Kontak",
    copyright: "Hak Cipta",
    rights: "Seluruh Hak Dilindungi",
  },
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto py-10 px-4 md:px-16 lg:px-24 xl:px-43 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 lg:grid-cols-4">
          {/* Logo */}
         <div>
  <Link href="/" aria-label="Go to homepage" className="inline-block">
    <Image
      src="/images/footer.png"
      alt="Mega Putra Logo"
      width={220}          // intrinsic untuk perhitungan ratio
      height={48}
      className="w-[140px] sm:w-[180px] lg:w-[220px] h-auto"
      priority
      sizes="(min-width:1024px) 220px, (min-width:640px) 180px, 140px"
    />
  </Link>
</div>
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide">
              {t.contactUs.toUpperCase()}
            </h3>

            <div className="mt-3 space-y-2 text-xs">
              <a
                href={`tel:${t.phone.replace(/\\D/g, "")}`}
                className="flex items-center gap-2 hover:text-[var(--color-lighter)] focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
              >
                <FaPhone className="text-sm mt-[2px]" />
                <span>{t.phone}</span>
              </a>
              <a
                href={`mailto:${t.email}`}
                className="flex items-center gap-2 hover:text-[var(--color-lighter)] focus:outline-none focus:ring-2 focus:ring-white/60 rounded break-all"
              >
                <FaEnvelope className="text-sm mt-[2px]" />
                <span>{t.email}</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide">
              {t.addressTitle.toUpperCase()}
            </h3>
            <p className="mt-3 text-xs leading-relaxed max-w-prose">
              {t.address}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label={t.quickLinks} className="min-w-0">
            <h3 className="text-sm font-semibold tracking-wide">
              {t.quickLinks.toUpperCase()}
            </h3>
            <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-4 text-xs">
              <li>
                <Link href="/company" className="hover:text-[var(--color-lighter)]">
                  {t.company}
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[var(--color-lighter)]">
                  {t.solutions}
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[var(--color-lighter)]">
                  {t.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[var(--color-lighter)]">
                  {t.resources}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[var(--color-lighter)]">
                  {t.careers}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-lighter)]">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Social */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#"
            aria-label="Facebook"
            className="inline-flex p-2 rounded hover:text-[var(--color-lighter)] focus:outline-none focus:ring-2 focus:ring-white/60"
            rel="noopener"
          >
            <FaFacebookF className="text-xl sm:text-2xl" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="inline-flex p-2 rounded hover:text-[var(--color-lighter)] focus:outline-none focus:ring-2 focus:ring-white/60"
            rel="noopener"
          >
            <FaInstagram className="text-xl sm:text-2xl" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex p-2 rounded hover:text-[var(--color-lighter)] focus:outline-none focus:ring-2 focus:ring-white/60"
            rel="noopener"
          >
            <FaLinkedinIn className="text-xl sm:text-2xl" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="inline-flex p-2 rounded hover:text-[var(--color-lighter)] focus:outline-none focus:ring-2 focus:ring-white/60"
            rel="noopener"
          >
            <FaYoutube className="text-xl sm:text-2xl" />
          </a>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white/40" />

        {/* Bottom */}
      <div className="flex flex-row items-center justify-between text-[11px] sm:text-xs">
  <p>
    {t.copyright} © MegaPutra 2024
  </p>
  <p>{t.rights}</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;                                                                                                                                                                                                              