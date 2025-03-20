import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Progress from "../components/progress";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/logo.png"
        url="https://megaputra.com"
      />

      <Navbar />
      <section className="relative w-full h-screen bg-[url('/images/banner.png')] bg-cover flex items-center mt-20">
        {/* Overlay (opsional untuk efek lebih jelas) */}
        <div className="relative w-full max-w-[80%] mx-auto text-left text-white px-6 pl-10 md:pl-20 z-10">
          <h1
            className="text-6xl font-semibold drop-shadow-md mt-2"
            style={{ textShadow: "2px 8px 15px rgba(0, 0, 0, 0.4)" }}
          >
            Welcome to Mega Putra
          </h1>
          <p className="mt-4 text-[25px] font-semibold">
            Your Trusted Partner in Paper Packaging Solutions
          </p>

          {/* Button dengan gambar */}
          <Link href="/solutions">
      <button className="flex items-center bg-[var(--color-primary)] text-white font-semibold text-lg px-6 py-3  shadow-md hover:bg-[var(--color-darker)] transition duration-300 mt-4">
        Explore More
        <FiArrowRight className="ml-2 text-xl" />
      </button>
    </Link>
        </div>
      </section>
      <section className=" py-6 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="mt-6 text-3xl font-bold text-left text-[var(--color-primary)]">What We Offer</h1>
        <p className="mt-6 text-left text-base text-[var(--color-text)]">
          First established in 1997, PT Mega Putra has now developed into a leading offset printing and production company which focuses on Packaging. We have more than 15 years of experience in serving both local & international customers.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img src="/images/pict1.png" className="mx-auto  shadow-lg" />
          </div>
          <div className="text-center">
            <img src="/images/pict2.png" className="mx-auto  shadow-lg" />
          </div>
          <div className="text-center">
            <img src="/images/pict3.png" className="mx-auto shadow-lg" />

          </div>
          <div className="text-center">
            <img src="/images/pict4.png" className="mx-auto shadow-lg" />
          </div>
        </div>
      </section>

      <Progress/>



      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
        {/* Judul Section */}
        <h1 className="text-3xl font-bold text-left text-[var(--color-primary)]">
          Commitment to Quality and Standards
        </h1>

        {/* Logo Sertifikasi */}
        <div className="mt-6 flex justify-end space-x-8">
          <img src="/images/halal.png" alt="Halal Certification" className="h-32" />
          <img src="/images/sgs.png" alt="SGS Certification" className="h-32" />
          <img src="/images/fsc.png" alt="FSC Certification" className="h-32" />
        </div>

      
      {/* Konten dengan Dua Kartu */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kartu Pertama */}
        <Link href="/projects" className="relative group block">
          <div className="relative group cursor-pointer">
            <img src="/images/pict7.png" alt="Printing Machine" className="w-full shadow-lg transition duration-300 group-hover:brightness-75" />
            <div className="absolute bottom-0 left-0 w-full bg-[var(--color-primary)] text-white p-6 transition duration-300 group-hover:bg-[var(--color-darker)]">
              <h2 className="text-lg font-semibold">Quality, Innovation, Efficiency</h2>
              <p className="text-sm mt-1">
                First established in 1997, PT Mega Putra has now developed into a leading offset printing company.
              </p>
              <div className="mt-2 flex justify-end">
                <span className="inline-block text-white font-semibold">Learn More →</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Kartu Kedua */}
        <Link href="/company" className="relative group block">
          <div className="relative group cursor-pointer">
            <img src="/images/pict7.png" alt="Packaging Box" className="w-full shadow-lg transition duration-300 group-hover:brightness-75" />
            <div className="absolute bottom-0 left-0 w-full bg-[var(--color-primary)] text-white p-6 transition duration-300 group-hover:bg-[var(--color-darker)]">
              <h2 className="text-lg font-semibold">28 Years of Dedication: Journey of Values and Vision</h2>
              <p className="text-sm mt-1">
                First established in 1997, PT Mega Putra has now developed into a leading offset printing company.
              </p>
              <div className="mt-2 flex justify-end">
                <span className="inline-block text-white font-semibold">Learn More →</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>

      <Footer />
    </>
  );
}
