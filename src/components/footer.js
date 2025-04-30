import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-16 px-26">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image src="/images/footer.png" alt="Mega Putra Logo" width={230} height={50} />
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-start">
            <h3 className="text-md font-bold">CONTACT US</h3>
            <div className="flex items-center mt-4">
              <img src="/images/telp.png" alt="Telpon" className="w-4 h-4 mr-2" />
              <p className="text-xs">021-29662288</p>
            </div>
            <div className="flex items-center mt-2">
              <img src="/images/email.png" alt="Email" className="w-4 h-4 mr-2" />
              <p className="text-xs">marketing@megaputra.com</p>
            </div>
          </div>

          {/* Alamat */}
          <div className="flex flex-col items-start">
            <h3 className="text-md font-bold">ADDRESS</h3>
            <p className="mt-4 text-xs">Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-md font-bold">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2 text-xs">
              <li><Link href="/company" className="hover:text-[var(--color-lighter)]">Company</Link></li>
              <li><Link href="/solutions" className="hover:text-[var(--color-lighter)]">Solutions</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--color-lighter)]">Projects</Link></li>
              <li><Link href="/resources" className="hover:text-[var(--color-lighter)]">Resources</Link></li>
              <li><Link href="/careers" className="hover:text-[var(--color-lighter)]">Careers</Link></li>
            </ul>
          </div>
        </div>

          {/* Social Media */}
        <div className="flex justify-start space-x-6 mb-4 ">
          <FaFacebookF className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-[var(--color-lighter)]" />
        </div>

        {/* Garis Pemisah */}
        <div className="border-t border-white w-full my-4"></div>

        {/* Copyright */}
        <div className="flex justify-between text-xs">
          <p className="text-left">Copyright © MegaPutra</p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
