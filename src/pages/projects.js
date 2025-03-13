import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
export default function projects() {
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
            <section className="relative  bg-[url('/images/banner2.png')] bg-cover flex items-center mt-20">
                <p className=" w-full max-w-[80%] mx-auto text-left text-white px-6 py-20 pl-10 md:pl-20 z-10  text-[25px] font-semibold ">
                    Packaging Solutions for every industry
                </p>
            </section>
            <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-32">
  <h1 className="text-3xl font-bold text-left text-[var(--color-primary)]">
    Our Packaging Projects
  </h1>

  {/* Filter Tabs */}
  <div className="mt-6 flex flex-wrap gap-8">
    {["All Industries", "Pharmaceutical", "Food and Beverages", "Electronics", "Retail"].map(
      (category, index) => (
        <button key={index} className="px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-lighter)] rounded-md text-sm">
          {category}
        </button>
      )
    )}
  </div>

  {/* Grid Layout */}
  <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-327 h-409">
    {[
      "/images/p1.png",
      "/images/p2.png",
      "/images/p3.png",
      "/images/p4.png",
      "/images/p3.png",
      "/images/p2.png",
      "/images/p4.png",
      "/images/p1.png",
      "/images/p2.png",
      "/images/p1.png",
      "/images/p3.png",
      "/images/p4.png",
    ].map((src, index) => (
      <div key={index} className="relative group">
        <img src={src} alt={`Project ${index + 1}`} className="w-full h-auto shadow-lg" />
      </div>
    ))}
  </div>
</section>
            <Footer />
        </>
    );
}
