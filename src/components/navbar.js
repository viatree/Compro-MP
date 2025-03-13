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
<nav className="bg-white shadow-md py-6 px-8 md:px-16 lg:px-24 xl:px-43 text-[14px] fixed top-0 w-full z-50 ">
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
    <div className="flex items-center space-x-8 mr-6 ">
      <ul className="hidden md:flex space-x-8 text-[var(--color-primary)] font-medium ">
        <li><Link href="/" className={isActive("/")}>Home</Link></li>
        <li><Link href="/company" className={isActive("/company")}>Company</Link></li>
        <li><Link href="/solutions" className={isActive("/solutions")}>Solutions</Link></li>
        <li><Link href="/projects" className={isActive("/projects")}>Projects</Link></li>
        <li><Link href="/resources" className={isActive("/resources")}>Resources</Link></li>
        <li><Link href="/careers" className={isActive("/careers")}>Careers</Link></li>
        <li><Link href="/contact" className={isActive("/contact")}>Contact</Link></li>
      </ul>

      {/* Language Selector */}
      <div className="flex items-center space-x-2 bg-gray-100 px-1 py-1 rounded-sm">
        <button className="text-black font-semibold text-[14px]">ID</button>
        <button className="bg-[var(--color-primary)] text-[14px] text-white px-2 rounded-md">
          EN
        </button>
      </div>
    </div>
  </div>
</nav>


  );
};

export default Navbar;
