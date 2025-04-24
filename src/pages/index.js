import SEO from "../components/seo";
import Progress from "../components/progress";
import Link from "next/link";
import Image from "next/image";
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

      {/* Hero Section */}
      <section className="relative w-full h-screen items-center mt-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/7RV03148.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            PAPER PACKAGING SOLUTIONS<br />FOR EVERY INDUSTRY
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-bold drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">
            Customised Packaging. Trusted Solutions.
          </p>
          <p className="mt-2 text-sm md:text-base font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
            ISO 9001 Certified • FSC® Certified • Halal Certified
          </p>
          <Link href="/solutions">
            <button className="mt-8 bg-[var(--color-primary)] hover:bg-[var(--color-darker)] transition-all duration-300 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-lg">
              Discover Our Solutions
            </button>
          </Link>
        </div>
      </section>
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
  <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
    WHAT WE OFFER
  </h1>
  <h2 className="my-4 text-2xl font-medium text-left text-[var(--color-text)]">
    Comprehensive Paper Packaging Solutions
  </h2>
  <p className="text-start text-justify text-[var(--color-text)]">
    With decades of hands-on experience, PT Mega Putra delivers seamless in-house packaging services—from design prototyping and colour development to high-precision printing and finishing. Our integrated approach ensures consistent quality and customised solutions that align with each brand’s unique requirements.
  </p>

  {/* Service Boxes */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* Item 1 */}
    <div className="text-center">
      <div className="relative w-full h-[250px] mx-auto shadow-lg">
        <Image
          src="/images/7RV03391.jpg"
          alt="Packaging Development"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] uppercase">
        Packaging Development & Prototyping
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text)]">
        Sample creation with advanced flatbed cutting
      </p>
    </div>

    {/* Item 2 */}
    <div className="text-center">
      <div className="relative w-full h-[250px] mx-auto shadow-lg">
        <Image
          src="/images/7RV03558.jpg"
          alt="High-Quality Printing"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] uppercase">
        High-Quality Offset & UV Printing
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text)]">
        Versatile printing with in-line coating and embossing
      </p>
    </div>

    {/* Item 3 */}
    <div className="text-center">
      <div className="relative w-full h-[250px] mx-auto shadow-lg">
        <Image
          src="/images/7RV03872.jpg"
          alt="Colour Development"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] uppercase">
        Customised Colour Development
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text)]">
        In-house colour lab for precise brand matching
      </p>
    </div>

    {/* Item 4 */}
    <div className="text-center">
      <div className="relative w-full h-[250px] mx-auto shadow-lg">
        <Image
          src="/images/7RV03354.jpg"
          alt="In-House Production"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] uppercase">
        Comprehensive In-House Production
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text)]">
        Single point of contact seamless project execution
      </p>
    </div>
  </div>
</section>

      <Progress />

   {/* Certification Section */}
   <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="text-3xl font-bold text-left text-[var(--color-primary)] mb-10">
          Commitment to Quality and Standards
        </h1>

          {/* Sertifikat */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* ISO 9001 */}
          <div className="flex flex-col items-center">
            <img src="/images/sgs.png" alt="ISO 9001 Certification" className="h-24 mb-4" />
            <p className="text-sm mt-2 text-[var(--color-text)] max-w-xs">
              ISO 9001:2015
              <br></br>
              <span className="text-[var(--color-text)]  font-semibold">Since 2010</span>  
            </p>
          </div>

          {/* FSC */}
          <div className="flex flex-col items-center">
            <img src="/images/fsc.png" alt="FSC Certification" className="h-24 mb-4" />
            <p className="text-sm mt-2 text-[var(--color-text)] max-w-xs">
              Certificate number: C151498
              <br></br>
              <span className="text-[var(--color-text)]  font-semibold">Since 2019</span>  
            </p>
          </div>

          {/* Halal */}
          <div className="flex flex-col items-center">
            <img src="/images/halal.png" alt="Halal Certification" className="h-24 mb-4" />
            <p className="text-sm mt-2 text-[var(--color-text)] max-w-xs">
              ID36410020910631224
              <br></br>
             <span className="text-[var(--color-text)]  font-semibold">Since 2024</span> 
            </p>
          </div>
        </div>

        {/* Kartu-kartu Bawah */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Kartu Pertama */}
{/* Kartu Pertama */}
<Link href="/solutions" className="block h-full">
  <div className="relative flex flex-col h-full">
    <img
      src="/images/pict7.png"
      alt="Printing Machine"
      className="w-full h-[200px] object-cover shadow-lg"
    />
    <div className="flex flex-col justify-between flex-grow bg-[var(--color-primary)] text-white p-6">
      <div>
        <h2 className="text-lg font-semibold">Quality, Innovation, Efficiency</h2>
        <p className="text-sm mt-1">
          PT Mega Putra combines technical expertise, sustainable practices, and cutting-edge equipment to deliver trusted packaging solutions.
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <span className="inline-block text-white font-semibold">Explore Our Solutions →</span>
      </div>
    </div>
  </div>
</Link>


  {/* Kartu Kedua */}
  <Link href="/company" className="block h-full">
    <div className="relative flex flex-col h-full">
      <img src="/images/pict7.png" alt="Packaging Box" className="w-full shadow-lg w-full h-[200px] object-cover shadow-lg" />
      <div className="flex flex-col justify-between flex-grow bg-[var(--color-primary)] text-white p-6">
        <div>
          <h2 className="text-lg font-semibold">Over 28 Years of Printing & Packaging Expertise</h2>
          <p className="text-sm mt-1">
            Established in 1997, PT Mega Putra has built a long-standing reputation for delivering high-quality, innovative, and reliable packaging solutions across industries.
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <span className="inline-block text-white font-semibold">Learn About Mega Putra →</span>
        </div>
      </div>
    </div>
  </Link>
</div>
      </section>
    </>
  );
}