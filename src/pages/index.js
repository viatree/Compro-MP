import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <SEO
        title="Mega Putra | Paper Packaging Solutions"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
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
        <Link href="/solutions" className="relative mt-6 inline-block">
          <img src="/images/button.png" alt="Explore More" className="w-[200px] h-[50px]" />
          <span className="absolute top-1/2 left-18 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-[18px] ">
            Explore More
          </span>
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
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
  <h1 className="text-3xl font-bold text-center text-[var(--color-primary)]">How It Works</h1>

  {/* Progress Steps */}
  {/* <div className="mt-8 flex flex-col items-center">
    <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white flex justify-between items-center py-4 px-10 rounded-lg">
      {["Inquiry", "Quotation", "Development", "Production", "Shipment"].map((step, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <div className="w-6 h-6 border-t-4 border-l-4 border-white transform -ml-3"></div>}
          <span className="text-lg font-semibold">{step}</span>
        </div>
      ))}
    </div>
  </div> */}

  {/* Content with Image */}
  <div className="mt-10 flex flex-col md:flex-row items-center">
    {/* Text Content */}
    <div className="md:w-1/2 text-left">
      <p className="text-base text-gray-700">
        Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec
        volutpat in. Enim potenti nulla ac mauris at. Lorem ipsum dolor sit
        amet consectetur. Ut ut quis tristique donec volutpat in. Enim
        potenti nulla ac mauris at.
      </p>
      <p className="mt-4 text-base text-gray-700">
        Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec
        volutpat in. Enim potenti nulla ac mauris at.
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2 mt-6 md:mt-0">
      <img src="/images/pict5.png" alt="Process Image" className="w-full shadow-lg" />
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}
