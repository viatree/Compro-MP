import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

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
    certifications: "Certifications",
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
    certifications: "Sertifikasi",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // mobile accordion
  const [desktopAboutOpen, setDesktopAboutOpen] = useState(false); // desktop dropdown
  const router = useRouter();
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];
  const menuRef = useRef(null);

  // --- grace period utk hover desktop dropdown ---
  const closeTimer = useRef(null);
  const openDesktopAbout = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopAboutOpen(true);
  };
  const closeDesktopAbout = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopAboutOpen(false), 150);
  };

  const isActive = (path) =>
    router.pathname === path
      ? "text-[var(--color-text)] font-regular"
      : "text-[var(--color-primary)] hover:text-[var(--color-lighter)]";

  // Auto close on route change
  useEffect(() => {
    const handleRoute = () => {
      setMenuOpen(false);
      setAboutOpen(false);
      setDesktopAboutOpen(false);
    };
    router.events?.on("routeChangeComplete", handleRoute);
    return () => router.events?.off("routeChangeComplete", handleRoute);
  }, [router.events]);

  // Click outside to close (mobile)
  useEffect(() => {
    const onClickOutside = (e) => {
      if (!menuRef.current) return;
      if (menuOpen && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [menuOpen]);

  // Esc to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDesktopAboutOpen(false);
        setAboutOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-md py-4 px-4 md:px-16 lg:px-24 xl:px-43 text-[16px] w-full">
      <div className="mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Go to homepage" className="block">
            <Image
              src="/images/logo.png"
              alt="Mega Putra Logo"
              width={225}
              height={44}
              priority
              className="h-6 w-auto sm:h-8 xl:h-7 2xl:h-8"
            />
          </Link>
        </div>

        {/* Language + Hamburger (mobile/tablet & small laptop) */}
        <div className="flex items-center gap-3 xl:hidden">
          <div className="flex items-center rounded-md bg-gray-100 overflow-hidden">
            <button
              className={`px-2 py-1 text-sm font-medium ${
                language === "ID"
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text)]"
              }`}
              onClick={() => changeLanguage("ID")}
              aria-pressed={language === "ID"}
            >
              ID
            </button>
            <button
              className={`px-2 py-1 text-sm font-medium ${
                language === "EN"
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text)]"
              }`}
              onClick={() => changeLanguage("EN")}
              aria-pressed={language === "EN"}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="text-[var(--color-primary)] p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* Desktop navbar (≥ 1280px) */}
        <div className="hidden xl:flex items-center xl:gap-6 2xl:gap-8">
          <ul className="flex items-center xl:gap-6 2xl:gap-8 xl:text-[15px] 2xl:text-[16px] font-medium text-[var(--color-primary)]">
            <li>
              <Link href="/" className={isActive("/")}>
                {t.home}
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={openDesktopAbout}
              onMouseLeave={closeDesktopAbout}
            >
              <div className="flex items-center gap-1">
                <Link
                  href="/company"
                  className={`${isActive("/company")} flex items-center`}
                  aria-label="Go to Company page"
                >
                  {t.aboutUs}
                </Link>

                <button
                  type="button"
                  className="text-[var(--color-primary)] hover:text-[var(--color-lighter)]"
                  aria-haspopup="menu"
                  aria-expanded={desktopAboutOpen}
                  aria-controls="about-desktop-menu"
                  onClick={() => setDesktopAboutOpen((s) => !s)}
                  onFocus={openDesktopAbout}
                  onBlur={closeDesktopAbout}
                >
                  <FiChevronDown
                    className={`transition-transform ${
                      desktopAboutOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>

              {/* Dropdown desktop */}
              <div
                id="about-desktop-menu"
                className={`absolute left-0 top-full w-56 rounded-md border-t-4 border-[var(--color-primary)] bg-white shadow-lg ${
                  desktopAboutOpen ? "block" : "hidden"
                } pt-2`}
                role="menu"
                onMouseEnter={openDesktopAbout}
                onMouseLeave={closeDesktopAbout}
              >
                <ul className="py-1 text-[14px] text-[var(--color-primary)]">
                  <li>
                    <Link
                      href="/company#about"
                      className="block px-4 py-2 hover:bg-[var(--color-text25)]"
                    >
                      {t.aboutMegaPutra}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company#vision"
                      className="block px-4 py-2 hover:bg-[var(--color-text25)]"
                    >
                      {t.vision}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company#capabilities"
                      className="block px-4 py-2 hover:bg-[var(--color-text25)]"
                    >
                      {t.capabilities}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company#values"
                      className="block px-4 py-2 hover:bg-[var(--color-text25)]"
                    >
                      {t.values}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company#certifications"
                      className="block px-4 py-2 hover:bg-[var(--color-text25)]"
                    >
                      {t.certifications}
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/solutions" className={isActive("/solutions")}>
                {t.solutions}
              </Link>
            </li>
            <li>
              <Link href="/projects" className={isActive("/projects")}>
                {t.portfolio}
              </Link>
            </li>
            <li>
              <Link href="/resources" className={isActive("/resources")}>
                {t.resources}
              </Link>
            </li>
            <li>
              <Link href="/careers" className={isActive("/careers")}>
                {t.careers}
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact")}>
                {t.contact}
              </Link>
            </li>
          </ul>

          {/* Language (desktop) */}
          <div className="flex items-center rounded-sm bg-gray-100">
            <button
              className={`px-2 py-1 rounded-md xl:text-[13px] 2xl:text-[14px] font-medium ${
                language === "ID"
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text)]"
              }`}
              onClick={() => changeLanguage("ID")}
            >
              ID
            </button>
            <button
              className={`px-2 py-1 rounded-md xl:text-[13px] 2xl:text-[14px] font-medium ${
                language === "EN"
                  ? "bg-[var(--color-primary)] text-white"
                  : "text-[var(--color-text)]"
              }`}
              onClick={() => changeLanguage("EN")}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet menu (< 1280px) */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`xl:hidden overflow-hidden bg-white transition-[max-height] duration-300 ${
          menuOpen ? "max-h-[75vh]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6 text-md font-medium ">
          <li>
            <Link href="/" className={isActive("/")}>
              {t.home.toUpperCase()}
            </Link>
          </li>

          {/* About accordion on mobile */}
          <li>
            <div className="flex w-full items-center justify-between py-2">
              <Link
                href="/company"
                className={isActive("/company")}
                aria-label="Go to Company page"
              >
                {t.aboutUs.toUpperCase()}
              </Link>
              <button
                type="button"
                className="text-[var(--color-primary)]"
                aria-expanded={aboutOpen}
                aria-controls="about-accordion"
                onClick={() => setAboutOpen((s) => !s)}
              >
                <FiChevronDown
                  className={`transition-transform ${
                    aboutOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </div>

            <div
              id="about-accordion"
              className={`grid transition-all duration-300 ${
                aboutOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="pl-3 text-[15px] text-[var(--color-primary)]">
                  <li>
                    <Link href="/company#about" className="block py-2">
                      {t.aboutMegaPutra}
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#vision" className="block py-2">
                      {t.vision}
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#capabilities" className="block py-2">
                      {t.capabilities}
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#values" className="block py-2">
                      {t.values}
                    </Link>
                  </li>
                  <li>
                    <Link href="/company#certifications" className="block py-2">
                      {t.certifications}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link href="/solutions" className={isActive("/solutions")}>
              {t.solutions.toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href="/projects" className={isActive("/projects")}>
              {t.portfolio.toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href="/resources" className={isActive("/resources")}>
              {t.resources.toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href="/careers" className={isActive("/careers")}>
              {t.careers.toUpperCase()}
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact")}>
              {t.contact.toUpperCase()}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
