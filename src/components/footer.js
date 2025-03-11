import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-14">
      <div className="container mx-autopy-6 px-8 md:px-16 lg:px-24 xl:px-47">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image src="/images/footer.png" alt="Mega Putra Logo" width={230} height={50} />
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start mx-18">
            <h3 className="text-md font-bold">CONTACT US</h3>
            <p className="mt-4 text-xs flex items-center">📞 021-29662288</p>
            <p className="mt-2 flex text-xs items-center">✉️ marketing@megaputra.com</p>
          </div>

          {/* Alamat */}
          <div className="flex flex-col items-center md:items-start mx-12">
            <h3 className="text-md font-bold">ADDRESS</h3>
            <p className="mt-4 text-xs">Jl. Raya Puspiptek No.18, RT.7/RW.2,<br></br>Kota Tangerang Selatan, Banten 15315</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-md mx-12 font-bold">QUICK LINKS</h3>
            <ul className="mt-4 mx-12 space-y-2 text-xs">
              <li><Link href="/company" className="hover:text-[var(--color-lighter)]">Company</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--color-lighter)]">Solutions</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-lighter)]">Projects</Link></li>
              <li><Link href="/resources" className="hover:text-[var(--color-lighter)]">Resources</Link></li>
              <li><Link href="/careers" className="hover:text-[var(--color-lighter)]">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Garis pemisah */}
         {/* Social Media di pojok kiri */}
         <div className="flex space-x-6">
            <FaFacebookF className="text-3xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaTwitter className="text-3xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaInstagram className="text-3xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaLinkedinIn className="text-3xl cursor-pointer hover:text-[var(--color-lighter)]" />
            <FaYoutube className="text-3xl cursor-pointer hover:text-[var(--color-lighter)]" />
          </div>
          
        <div className="border-t-4 border-white mt-4 pt-6 flex flex-col md:flex-row justify-between items-center">
         
          {/* Copyright di tengah atau kanan */}
          <p className="text-sm text-center font-light md:text-right mt-4 md:mt-0">
            Copyright © MegaPutra.
          </p>
          <p className="text-sm text-center md:text-left mt-4 md:mt-0">
             All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
