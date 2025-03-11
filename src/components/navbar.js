import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Fungsi untuk menentukan apakah link aktif
  const isActive = (path) =>
    router.pathname === path
      ? "text-[var(--color-text)] font-bold"
      : "text-[var(--color-primary)] hover:text-[var(--color-lighter)]";

  return (
    <nav className="bg-white shadow-md py-6 px-8 md:px-16 lg:px-24 xl:px-47">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Mega Putra Logo"
            width={230}
            height={40}
            priority
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[var(--color-primary)] text-2xl"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menu Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-[var(--color-primary)] font-medium ml-auto">
          <li>
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/company" className={isActive("/company")}>
              Company
            </Link>
          </li>
          <li>
            <Link href="/solutions" className={isActive("/solutions")}>
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/projects" className={isActive("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/resources" className={isActive("/resources")}>
              Resources
            </Link>
          </li>
          <li>
            <Link href="/careers" className={isActive("/careers")}>
              Careers
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Language Selector */}
        <div className="hidden md:flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-lg ml-4">
          <button className="text-black font-medium">ID</button>
          <button className="bg-[var(--color-primary)] text-white px-2 py-1 rounded-md">
            EN
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4 text-[var(--color-primary)] font-medium">
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/company" className={isActive("/company")}>
                Company
              </Link>
            </li>
            <li>
              <Link href="/solutions" className={isActive("/solutions")}>
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/projects" className={isActive("/projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/resources" className={isActive("/resources")}>
                Resources
              </Link>
            </li>
            <li>
              <Link href="/careers" className={isActive("/careers")}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
