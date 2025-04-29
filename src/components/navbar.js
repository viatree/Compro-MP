import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const isActive = (path) =>
    router.pathname === path
      ? "text-[var(--color-text)] font-semibold"
      : "text-[var(--color-primary)] hover:text-[var(--color-lighter)]";

  return (
    <nav className="bg-white shadow-md py-6 px-8 md:px-16 lg:px-24 xl:px-43 text-[14px] fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center ml-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Mega Putra Logo"
            width={225}
            height={40}
            priority
          />
        </div>

        {/* Menu Links + Language Selector */}
        <div className="flex items-center space-x-8 mr-6">
          <ul className="hidden md:flex space-x-8 text-[var(--color-primary)] font-medium relative">
            <li><Link href="/" className={isActive("/")}>Home</Link></li>

{/* DROPDOWN - About Us */}
<li
  className="relative group"
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  <span
    className={`${isActive("/company")} cursor-pointer flex items-center gap-1`}
  >
    About Us
    <svg
      className="w-4 h-4 text-[var(--color-primary)] group-hover:rotate-180 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  {/* Dropdown menu */}
  <div className={`absolute left-0 top-full pt-2 z-50 ${dropdownOpen ? 'block' : 'hidden'}`}>
    <ul className="bg-white border-t-4 border-[var(--color-primary)] shadow-lg rounded-md w-52 text-[14px]">
      <li>
        <Link
          href="/company#about"
          className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]"
        >
          About Mega Putra
        </Link>
      </li>
      <li>
        <Link
          href="/company#vision"
          className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]"
        >
          Vision & Mission
        </Link>
      </li>
      <li>
        <Link
          href="/company#capabilities"
          className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]"
        >
          Our Capabilities
        </Link>
      </li>
      <li>
        <Link
          href="/company#values"
          className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]"
        >
          Corporate Values & Responsibilities
        </Link>
      </li>
      <li>
        <Link
          href="/company#certifications"
          className="block px-4 py-3 hover:bg-[var(--color-text25)] text-[var(--color-primary)]"
        >
          Certifications
        </Link>
      </li>
    </ul>
  </div>
</li>

            <li><Link href="/solutions" className={isActive("/solutions")}>Solutions</Link></li>
            <li><Link href="/projects" className={isActive("/projects")}>Portofolio</Link></li>
            <li><Link href="/resources" className={isActive("/resources")}>Resources</Link></li>
            <li><Link href="/careers" className={isActive("/careers")}>Careers</Link></li>
            <li><Link href="/contact" className={isActive("/contact")}>Contact</Link></li>
          </ul>

          {/* Language Selector */}
          <div className="flex items-center bg-gray-100 p-1 rounded-sm">
            <button
              className={`px-2 py-1 rounded-md text-[14px] font-semibold ${
                language === "ID" ? "bg-[var(--color-primary)] text-white" : "text-black"
              }`}
              onClick={() => setLanguage("ID")}
            >
              ID
            </button>
            <button
              className={`px-2 py-1 rounded-md text-[14px] font-semibold ${
                language === "EN" ? "bg-[var(--color-primary)] text-white" : "text-black"
              }`}
              onClick={() => setLanguage("EN")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar