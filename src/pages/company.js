import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function company() {

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

      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43 mt-20">
        <h1 className="text-3xl font-bold text-left text-[var(--color-primary)]">
        Professional paper packaging manufacturer with innovative solutions.
        </h1>
        <p className="mt-6 text-left text-base text-[var(--color-text)]">
        First established in 1997, PT Mega Putra has now developed into a leading offset printing and production company which focuses on Packaging. We have more than 15 years of experience in serving both local & international customers.
        </p>
      </section>
      <section className="relative bg-[url('/images/banner4.png')] bg-cover flex items-end h-[310px]">
      </section>
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="text-3xl font-bold text-left text-[var(--color-primary)]">
          The Story Behind the Founding of Mega Putra
        </h1>
        <p className="mt-6 text-left text-base text-[var(--color-text)]">
          It all started with knowledge a deep understanding of the craft and the industry. Alongside it came the determination to earn, not just for survival, but to build a life that felt fulfilling and adequate. This mindset opened doors, presenting opportunities that demanded effort and integrity.

          With every challenge faced, hard work and honesty became the guiding principles. Over time, these four value, knowledge, determination, effort, and honesty shaped the foundation of Mega Putra. More than just a business, it became a testament to the belief that true quality is built from within. And from the very beginning, quality has been our priority.

          Mega Putra strives to be more than just a company—it aims to be a trusted partner for employees, suppliers, and customers alike. For employees, Mega Putra is committed to providing a supportive and growth-oriented work environment, where skills are nurtured, and dedication is valued.

          For suppliers, the company fosters strong, transparent, and mutually beneficial relationships built on trust and long-term collaboration. For customers, Mega Putra remains dedicated to delivering high-quality products with exceptional service, ensuring satisfaction and reliability in every order. Through these commitments, Mega Putra envisions itself as a leader in the industry, setting new standards of excellence and integrity.</p>
      </section>
          {/* Timeline Section */}
          <section className="bg-white py-12 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-[var(--color-primary)] p-4">
            <h3 className="text-lg font-bold text-white">1977</h3>
            <p className="text-white">Mega Putra was founded to provide high-quality printing & packaging solutions.</p>
          </div>
          <div className="bg-[var(--color-primary)] p-4 ">
            <h3 className="text-lg font-bold text-[var(--color-text)]">2000</h3>
            <p className="text-[var(--color-text)]">Expanded production with advanced printing machinery.</p>
          </div>
          <div className="bg-[var(--color-primary)] p-4 ">
            <h3 className="text-lg font-bold text-[var(--color-text)]">2003</h3>
            <p className="text-[var(--color-text)]">Upgraded to facilities aligned with international standards.</p>
          </div>
          <div className="bg-[var(--color-primary)] p-4 ">
            <h3 className="text-lg font-bold text-[var(--color-text)]">2014</h3>
            <p className="text-[var(--color-text)]">Opened a new manufacturing facility.</p>
          </div>
          <div className="bg-[var(--color-primary)] p-4 ">
            <h3 className="text-lg font-bold text-[var(--color-text)]">2019</h3>
            <p className="text-[var(--color-text)]">Introduced sustainable packaging initiatives.</p>
          </div>
        </div>
        
      </section>

      {/* Vision & Mission */}
      <section className="py-12 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className=" gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Our Vision</h2>
            <p className="mt-4 text-[var(--color-text)]">To be a leading and trusted printing & packaging company...</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-600">Our Mission</h2>
            <ul className="mt-4 text-[var(--color-text)] list-disc list-inside">
              <li>Deliver high-quality printing and packaging.</li>
              <li>Build strong relationships with stakeholders.</li>
              <li>Improve efficiency with technology.</li>
              <li>Maintain integrity and customer satisfaction.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold text-blue-600">Our Technology</h2>
        <p className="mt-4 text-gray-700">We use advanced printing and packaging machines from Japan and Germany...</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <img src="/images/tech1.jpg" className="rounded-lg shadow-lg" />
          <img src="/images/tech2.jpg" className="rounded-lg shadow-lg" />
          <img src="/images/tech3.jpg" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-green-50 py-12 px-8 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold text-green-600">Sustainability</h2>
        <p className="mt-4 text-gray-700">
          Mega Putra is committed to sustainability with FSC-certified materials and eco-friendly practices...
        </p>
      </section>
      <Footer />
    </>
  );
}