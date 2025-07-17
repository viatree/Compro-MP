import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext"; // ✅ gunakan context

const translations = {
  EN: {
    contactUs: "Contact Us",
    phone: "021-29662288",
    email: "marketing@megaputra.com",
    addressTitle: "Address",
    address: "Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315",
    quickLinks: "Quick Links",
    company: "Company",
    solutions: "Solutions",
    portfolio: "Portfolio",
    resources: "Resources",
    careers: "Careers",
    contact: "Contact",
    copyright: "Copyright © MegaPutra",
    rights: "All Rights Reserved",
  },
  ID: {
    contactUs: "Hubungi Kami",
    phone: "021-29662288",
    email: "marketing@megaputra.com",
    addressTitle: "Alamat",
    address: "Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315",
    quickLinks: "Tautan Cepat",
    company: "Perusahaan",
    solutions: "Solusi",
    portfolio: "Portofolio",
    resources: "Sumber Daya",
    careers: "Karier",
    contact: "Kontak",
    copyright: "Hak Cipta © MegaPutra",
    rights: "Seluruh Hak Dilindungi",
  },
};

const Footer = () => {
  const { language } = useLanguage(); // ✅ ambil bahasa dari context
  const t = translations[language];  // ✅ gunakan teks sesuai bahasa

  return (
    <footer className="bg-[var(--color-primary)] text-white py-10 px-8 md:px-16 lg:px-24 xl:px-43">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Logo */}
          <div>
            <Image
              src="/images/footer.png"
              alt="Mega Putra Logo"
              width={180}
              height={40}
            />
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">{t.contactUs.toUpperCase()}</h3>
            <div className="flex items-start mt-3">
              <img src="/images/telp.png" alt="Telpon" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-xs">{t.phone}</p>
            </div>
            <div className="flex items-start mt-2">
              <img src="/images/email.png" alt="Email" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-xs">{t.email}</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold">{t.addressTitle.toUpperCase()}</h3>
            <p className="mt-3 text-xs leading-snug">{t.address}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">{t.quickLinks.toUpperCase()}</h3>
            <ul className="mt-3 space-y-1 text-xs">
              <li><Link href="/company" className="hover:text-[var(--color-lighter)]">{t.company}</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--color-lighter)]">{t.solutions}</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-lighter)]">{t.portfolio}</Link></li>
              <li><Link href="/resources" className="hover:text-[var(--color-lighter)]">{t.resources}</Link></li>
              <li><Link href="/careers" className="hover:text-[var(--color-lighter)]">{t.careers}</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--color-lighter)]">{t.contact}</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-start space-x-4 mt-8">
          <FaFacebookF className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaInstagram className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaYoutube className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
        </div>

        <div className="border-t border-white w-full my-4"></div>

        {/* Bottom Info */}
        <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-1 text-xs">
          <p>{t.copyright}</p>
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
