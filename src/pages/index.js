import SEO from "../components/seo";
import Progress from "../components/progress";
import Link from "next/link";
import Image from "next/image";

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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/7RV03148.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
          />
          <div className="absolute inset-0  pointer-events-none"></div>
        </div>

        {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center text-center text-white h-full px-12">
  <h1 className="lg:text-5xl md:text-3xl sm:text-xl font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] tracking-wider">
    Paper Packaging Solutions
  </h1>
  <h2 className="lg:text-5xl md:text-3xl sm:text-xl font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] tracking-wider mt-4">
    For Every Industry
  </h2>
  <p className="mt-6 text-lg md:text-2xl font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
    Customised Packaging. Trusted Solutions.
  </p>
  <p className="mt-2 mb-4 text-sm md:text-base font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
    ISO 9001 Certified • FSC Certified • Halal Certified
  </p>
  <Link href="/solutions">
    <button className="bg-[var(--color-primary)] hover:bg-[var(--color-darker)] transition-all duration-300 text-white font-medium text-lg px-6 py-2 rounded-4xl cursor-pointer">
      Discover Our Solutions
    </button>
  </Link>
</div>

      </section>

      {/* What We Offer */}
      <section className="py-20 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="my-2 text-3xl font-semibold text-left text-[var(--color-primary)]">
          What We Offer
        </h1>
        <h2 className="my-4 text-2xl font-regular text-left text-[var(--color-text)]">
          Comprehensive Paper Packaging Solutions
        </h2>
        <p className="text-justify text-[var(--color-text)] text-sm ">
          With decades of hands-on experience, PT Mega Putra delivers seamless in-house packaging services—from design prototyping and colour development to high-precision printing and finishing. Our integrated approach ensures consistent quality and customised solutions that align with each brand’s unique requirements.
        </p>

        {/* Service Boxes */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              img: "/images/7RV03391.jpg",
              title: "Packaging Development & Prototyping",
              desc: "Sample creation with advanced flatbed cutting",
            },
            {
              img: "/images/7RV03558.jpg",
              title: "High-Quality Offset & UV Printing",
              desc: "Versatile printing with in-line coating and embossing",
            },
            {
              img: "/images/7RV03872.jpg",
              title: "Customised Colour Development",
              desc: "In-house colour lab for precise brand matching",
            },
            {
              img: "/images/7RV03354.jpg",
              title: "Comprehensive In-House Production",
              desc: "End-to-end service for seamless project execution",
            },
          ].map(({ img, title, desc }, i) => (
            <div key={i} className="text-center">
              <div className="relative w-full h-[250px] mx-auto shadow-lg">
                <Image src={img} alt={title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] uppercase">{title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Progress />

      {/* Certifications */}
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="text-3xl font-medium text-left text-[var(--color-primary)] mb-10">
          Commitment to Quality and Standards
        </h1>

        {/* Certification Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              img: "/images/sgs.png",
              title: "ISO 9001:2015",
              since: "Since 2010",
            },
            {
              img: "/images/fsc.png",
              title: "Certificate number: C151498",
              since: "Since 2019",
            },
            {
              img: "/images/halal.png",
              title: "ID36410020910631224",
              since: "Since 2024",
            },
          ].map(({ img, title, since }, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src={img} alt={title} className="h-24 mb-4" />
              <p className="text-sm mt-2 text-[var(--color-text)] max-w-xs">
                {title}
                <br />
                <span className="font-light">{since}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      title: "Quality, Innovation, Efficiency",
      desc: "PT Mega Putra combines technical expertise, sustainable practices, and cutting-edge equipment to deliver trusted packaging solutions.",
      linkText: "Explore Our Solutions →",
    },
    {
      title: "Over 28 Years of Printing & Packaging Expertise",
      desc: "Established in 1997, PT Mega Putra has built a long-standing reputation for delivering high-quality, innovative, and reliable packaging solutions across industries.",
      linkText: "Learn About Mega Putra →",
    },
  ].map(({ title, desc, linkText }, i) => (
    <Link key={i} href="/solutions" className="block h-full group">
      <div className="relative flex flex-col h-full transition duration-300 hover:brightness-100">
        <img
          src="/images/pict7.png"
          alt={title}
          className="w-full h-[200px] object-cover shadow-lg"
        />
        <div className="flex flex-col justify-between flex-grow bg-[#E6F6FC] text-[var(--color-text)] group-hover:bg-primary group-hover:text-white p-6 transition-colors duration-300">
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm mt-1">{desc}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <span className="inline-block font-semibold group-hover:underline">
              {linkText}
            </span>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      </section>
    </>
  );
}