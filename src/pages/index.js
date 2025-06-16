import SEO from "../components/seo";
import Progress from "../components/progress";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/logo.png"
        url="https://megaputra.com"
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen items-center mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/7RV03148.jpg"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            priority
          />
          <div className="absolute inset-0 pointer-events-none"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center text-center text-white h-full px-12">
          <h1 className="lg:text-5xl md:text-3xl sm:text-xl font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] tracking-wider">
            Paper Packaging Solutions
          </h1>
          <h2 className="lg:text-5xl md:text-3xl sm:text-xl font-semibold drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)] tracking-wider mt-4">
            For Every Industry
          </h2>
          <p className="mt-6 text-lg md:text-2xl font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            Customised Packaging. Trusted Solutions.
          </p>
          <p className="mt-2 mb-4 text-sm md:text-base font-medium drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
            ISO 9001 Certified • FSC Certified • Halal Certified
          </p>
          <Link href="/solutions">
            <button className="bg-[var(--color-primary)] hover:bg-[var(--color-darker)] transition-all duration-300 text-white font-semibold text-lg px-6 py-2  cursor-pointer rounded-md">
              Discover Our Solutions
            </button>
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-15 px-8 md:px-16 lg:px-24 xl:px-43">
        <h2 className="my-2 text-[40px] font-medium text-left text-[var(--color-primary)]">
          What We Offer
        </h2>
        <h3 className="my-4 text-[24px] font-light text-left text-[var(--color-text)]">
          Comprehensive Paper Packaging Solutions
        </h3>
        <p className="text-justify text-[var(--color-text)] text-sm text-[16px] font-light">
          With decades of hands-on experience, PT Mega Putra delivers seamless
          in-house packaging services—from design prototyping and colour
          development to high-precision printing and finishing. Our integrated
          approach ensures consistent quality and customised solutions that
          align with each brand&apos;s unique requirements.
        </p>

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
              <div className="relative w-full h-auto flex justify-center items-center mb-4">
                <Image
                  src={img}
                  alt={title}
                  width={300} // atur sesuai ukuran asli gambar
                  height={100}
                  objectFit="cover"
                  className="w-full h-auto shadow-md"
                />
              </div>
              <h4 className="mt-2 text-[20px] font-light text-[var(--color-primary)]">
                {title}
              </h4>
              <p className="mt-2 text-[16px] text-[var(--color-text)] font-light">{desc}</p>
            </div>
          ))}
        </div>

      </section>

      <Progress />

      {/* Certifications */}
      <section className="py-15 px-8 md:px-16 lg:px-24 xl:px-43">
        <h2 className="text-[40px] font-medium text-left text-[var(--color-primary)] mb-10">
          Commitment to Quality and Standards
        </h2>

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
              <p className="text-[16px] mt-2 text-[var(--color-text)] max-w-xs">
                <medium>{title}</medium>
                <br />
                <span className="font-light text-[var(--color-text)] text-[16px]">{since}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              image: "/images/7RV03608.jpg",
              bgColor: "bg-[#E6F6FC]",
              title: "Quality, Innovation, Efficiency",
              desc: "PT Mega Putra combines technical expertise, sustainable practices, and cutting-edge equipment to deliver trusted packaging solutions.",
              linkText: "Explore Our Solutions",
            },
            {
              image: "/images/7RV04057.jpg",
              bgColor: "bg-[#27A9E1]",
              textColor: "text-white",
              title: "Over 28 Years of Printing & Packaging Expertise",
              desc: "Established in 1997, PT Mega Putra has built a long-standing reputation for delivering high-quality, innovative, and reliable packaging solutions across industries.",
              linkText: "Learn About Mega Putra",
            },
          ].map(({ image, title, desc, linkText }, i) => (
            <Link key={i} href="/solutions" className="block h-full group">
              <div className="relative flex flex-col h-full transition duration-300 hover:brightness-100">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[200px] "
                />
                <div className={`flex flex-col justify-between flex-grow bg-[#E6F6FC] text-[var(--color-text)] group-hover:bg-primary group-hover:text-white p-6 transition-colors duration-300`}>
                  <div>
                    <h4 className="text-[20px] font-reguler">{title}</h4>
                    <p className="text-[16px] font-light mt-1">{desc}</p>
                  </div>
                  <div className="mt-4 flex justify-end ">
                    <span className="inline-block font-light text-[16px] group-hover:underline">{linkText}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
