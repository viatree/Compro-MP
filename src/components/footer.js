import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-10 px-8 md:px-16 lg:px-24 xl:px-43">
      <div className="max-w-6xl mx-auto">
        {/* Grid Layout */}
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

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold">CONTACT US</h3>
            <div className="flex items-start mt-3">
              <img src="/images/telp.png" alt="Telpon" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-xs">021-29662288</p>
            </div>
            <div className="flex items-start mt-2">
              <img src="/images/email.png" alt="Email" className="w-4 h-4 mr-2 mt-1" />
              <p className="text-xs">marketing@megaputra.com</p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm font-semibold">ADDRESS</h3>
            <p className="mt-3 text-xs leading-snug">
              Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold">QUICK LINKS</h3>
            <ul className="mt-3 space-y-1 text-xs">
              <li>
                <Link href="/company" className="hover:text-[var(--color-lighter)]">Company</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[var(--color-lighter)]">Solutions</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[var(--color-lighter)]">Projects</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[var(--color-lighter)]">Resources</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[var(--color-lighter)]">Careers</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-start space-x-4 mt-8">
          <FaFacebookF className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaTwitter className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaInstagram className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaLinkedinIn className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaYoutube className="text-xl cursor-pointer hover:text-[var(--color-lighter)]" />
        </div>

        {/* Divider */}
        <div className="border-t border-white w-full my-4"></div>

        {/* Bottom Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-xs">
          <p>Copyright © MegaPutra</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;