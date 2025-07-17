import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext"; // ✅ pakai context

const translations = {
  EN: {
    home: "Home",
    aboutUs: "About Us",
    solutions: "Solutions",
    portfolio: "Portfolio",
    resources: "Resources",
    careers: "Careers",
    contact: "Contact",
    aboutMegaPutra: "About Mega Putra",
    vision: "Vision & Mission",
    capabilities: "Our Capabilities",
    values: "Corporate Values & Responsibilities",
    certifications: "Certifications"
  },
  ID: {
    home: "Beranda",
    aboutUs: "Tentang Kami",
    solutions: "Solusi",
    portfolio: "Portofolio",
    resources: "Sumber Daya",
    careers: "Karier",
    contact: "Kontak",
    aboutMegaPutra: "Tentang Mega Putra",
    vision: "Visi & Misi",
    capabilities: "Kemampuan Kami",
    values: "Nilai & Tanggung Jawab",
    certifications: "Sertifikasi"
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const { language, changeLanguage } = useLanguage(); // ✅ pakai context
  const t = translations[language];

  const isActive = (path) =>
    router.pathname === path
      ? "text-[var(--color-text)] font-medium"
      : "text-[var(--color-primary)] hover:text-[var(--color-lighter)]";

  return (
    <nav className="bg-white shadow-md py-6 px-4 md:px-16 lg:px-24 xl:px-43 text-[16px] fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center ">

        <div className="w-40 md:w-[225px]">
          <Image
            src="/images/logo.png"
            alt="Mega Putra Logo"
            width={225}
            height={40}
            priority
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-[var(--color-primary)] font-medium relative">
            <li><Link href="/" className={isActive("/")}>{t.home}</Link></li>

            <li
              className="relative group"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <span className={`${isActive("/company")} cursor-pointer flex items-center gap-1`}>
                {t.aboutUs}
                <svg className="w-4 h-4 text-[var(--color-primary)] group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              <div className={`absolute left-0 top-full pt-2 z-50 ${dropdownOpen ? 'block' : 'hidden'}`}>
                <ul className="bg-white border-t-4 border-[var(--color-primary)] shadow-lg rounded-md w-52 text-[14px]">
                  <li><Link href="/company#about" className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]">{t.aboutMegaPutra}</Link></li>
                  <li><Link href="/company#vision" className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]">{t.vision}</Link></li>
                  <li><Link href="/company#capabilities" className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]">{t.capabilities}</Link></li>
                  <li><Link href="/company#values" className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]">{t.values}</Link></li>
                  <li><Link href="/company#certifications" className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]">{t.certifications}</Link></li>
                </ul>
              </div>
            </li>

            <li><Link href="/solutions" className={isActive("/solutions")}>{t.solutions}</Link></li>
            <li><Link href="/projects" className={isActive("/projects")}>{t.portfolio}</Link></li>
            <li><Link href="/resources" className={isActive("/resources")}>{t.resources}</Link></li>
            <li><Link href="/careers" className={isActive("/careers")}>{t.careers}</Link></li>
            <li><Link href="/contact" className={isActive("/contact")}>{t.contact}</Link></li>
          </ul>

          {/* Tombol Bahasa */}
          <div className="flex items-center bg-gray-100 rounded-sm">
            <button
              className={`px-2 rounded-md text-[14px] font-medium ${language === "ID" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text)]"}`}
              onClick={() => changeLanguage("ID")}
            >
              ID
            </button>
            <button
              className={`px-2 rounded-md text-[14px] font-medium ${language === "EN" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text)]"}`}
              onClick={() => changeLanguage("EN")}
            >
              EN
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
            <button
              className={`px-2 rounded-md text-[14px] font-medium ${language === "ID" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text)]"}`}
              onClick={() => changeLanguage("ID")}
            >
              ID
            </button>
            <button
              className={`px-2 rounded-md text-[14px] font-medium ${language === "EN" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-text)]"}`}
              onClick={() => changeLanguage("EN")}
            >
              EN
            </button>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[var(--color-primary)]">
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>
      

      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full z-40 transition-all duration-300 bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-6 text-[var(--color-primary)] font-medium text-lg">
            <li><Link href="/" onClick={() => setMenuOpen(false)}>{t.home.toUpperCase()}</Link></li>
            <li><Link href="/company" onClick={() => setMenuOpen(false)}>{t.aboutUs.toUpperCase()}</Link></li>
            <li><Link href="/projects" onClick={() => setMenuOpen(false)}>{t.portfolio.toUpperCase()}</Link></li>
            <li><Link href="/solutions" onClick={() => setMenuOpen(false)}>{t.solutions.toUpperCase()}</Link></li>
            <li><Link href="/resources" onClick={() => setMenuOpen(false)}>{t.resources.toUpperCase()}</Link></li>
            <li><Link href="/careers" onClick={() => setMenuOpen(false)}>{t.careers.toUpperCase()}</Link></li>
            <li><Link href="/contact" onClick={() => setMenuOpen(false)}>{t.contact.toUpperCase()}</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
