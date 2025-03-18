import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
export default function projects() {
  return (
    <>
      <SEO
        title="Mega Putra | Quality is Priority"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />

      <Navbar />
      <section className="relative  bg-[url('/images/banner2.png')] bg-cover flex items-end mt-20 h-[200px]">
        <p className=" w-full ml-27 mx-auto text-white px-6 py-6 pl-10 md:pl-20 z-10 text-[25px] font-semibold absolute bottom-0 ">
          Packaging Solutions for every industry
        </p>
      </section>
      {/* Filter Tabs */}
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <p className=" text-left text-base text-[var(--color-text)]">
        Lorem ipsum dolor sit amet cem ipsum dolor sit amet consectetur. Ut ut quis tristique donec volutpat in. Enim potenti nulla ac mistique donec volutpat in. Enim potenti nulla ac maamet consectetur. Ut ut quis tristiq Lorem ipsum dolor sit amet consectetur. Ut ut quis tristique donec volutpat in. Enim potenti nulla ac mistique donec volutpat in. Enim potenti nulla ac maamet consectetur..
        </p>

        <div className="mt-6 flex justify-between border-b-3 border-[var(--color-lighter)]">
          {["All Industries", "Pharmaceutical", "Food and Beverages", "Electronics", "Retail", "Asi Gloves"].map(
            (category, index) => (
              <button
                key={index}
                className={`pb-2 text-[var(--color-text)] hover:text-[var(--color-primary)] ${
                  index === 0 ? " border-[var(--color-primary)] text-[var(--color-text)]" : ""
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>
          
        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-auto h-auto">
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
