import SEO from "../components/seo";
import Timeline from "@/components/timeline";
import Technology from "../components/technology";
import Image from "next/image";
import { Clock3, Target, Handshake, HandHeart } from "lucide-react";

export default function Company() {
  return (
    <>
      <SEO
        title="Mega Putra | Company"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />

      {/* About Section */}
      <section id="about" className="mt-30 my-12 px-8 md:px-16 lg:px-24 xl:px-43 ">
        <h1 className="mb-4 text-3xl font-bold text-left text-[var(--color-primary)]">About Megaputra</h1>
        <h2 className="mb-6 text-2xl font-medium text-left text-[var(--color-text)]">Delivering Trusted Paper Packaging Solutions Since 1997</h2>
        <p className="text-start text-justify text-[var(--color-text)]">
          Established in 1997, PT Mega Putra has grown into a leading offset printing and packaging solutions provider.
          With over 28 years of experience, we serve both local and international customers across diverse industries including cosmetics, pharmaceuticals, FMCG, automotive, and food.
          <br /><br />
          Our commitment to <b>quality</b>, <b>innovation</b>, and <b>efficiency</b> ensures we deliver customised solutions that help brands elevate their packaging standards.
        </p>
      </section>

      {/* Banner */}
      <section className="my-12 relative bg-[url('/images/banner4.png')] bg-cover flex items-end h-[310px]"></section>

      {/* The Story */}
      <section className="my-12 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-start text-justify">
        <div className="w-full">
          <h1 className="mb-4 text-3xl font-bold text-left text-[var(--color-primary)]">The Story Behind Mega Putra</h1>
          <p className="text-left text-base text-[var(--color-text)]">
            Mega Putra was built on the principles of knowledge, determination, effort, and honesty—values that continue to shape who we are today.
            <br /><br />
            From the very beginning, quality has been our priority. Today, these founding principles are reflected in our corporate culture: <b>Peduli</b> (Care), <b>Efisien</b> (Efficient), <b>Akurat</b> (Accurate), and <b>Kerjasama</b> (Collaborate)—collectively known as PEAK.
            <br /><br />
            Mega Putra strives to be a trusted partner for employees, suppliers, and customers alike. We are committed to fostering an environment that encourages continuous improvement for our employees, building strong, transparent relationships with suppliers, and delivering high-quality products with exceptional service to our customers.
            <br /><br />
            Through these commitments, Mega Putra continues to set new standards of excellence and integrity in the printing and packaging industry.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="my-12">
        <Timeline />
      </section>

      {/* Vision and Mission */}
      <section id="vision" className="my-12 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 px-4">
          <Image
            src="/images/pict8.png"
            alt="Employee working in a printing company"
            width={500}
            height={400}
            className="shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-[var(--color-primary)]">Our Vision and Mission</h1>
          <h2 className="my-4 text-2xl font-semibold text-left text-[var(--color-text)]">Vision</h2>
          <p className="mb-4 text-[var(--color-text)]">
            To lead growth and innovation within the packaging industry by delivering sustainable, high-quality solutions that inspire trust and drive industry progress.
          </p>
          <h2 className="my-4 text-2xl font-semibold text-left text-[var(--color-text)]">Mission</h2>
          <ul className="list-decimal list-inside text-[var(--color-text)] space-y-2">
            <li>Uphold and advance the highest standards of product quality and customer service.</li>
            <li>Apply PEAK values in all aspects of our operations.</li>
            <li>Encourage learning, growth, and continuous improvement.</li>
            <li>Integrate sustainability across the business.</li>
          </ul>
        </div>
      </section>

      {/* Technology Section */}
      <section className="my-12">
        <Technology />
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="my-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="mb-4 text-3xl font-bold text-left text-[var(--color-primary)]">Our Capabilities</h1>
        <h2 className="mb-6 text-2xl font-medium text-left text-[var(--color-text)]">Delivering Quality Through Integrated Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              src: "/images/7RV03391.jpg",
              title: "In-House Prepress & Prototyping",
              text: "Precise die-cutting board creation and rapid sample prototyping to ensure accurate, efficient packaging development."
            },
            {
              src: "/images/7RV03558.jpg",
              title: "Offset & UV Printing",
              text: "Advanced offset and UV printing technology delivering vibrant colours, multi-colour printing, and specialised finishes."
            },
            {
              src: "/images/7RV03872.jpg",
              title: "Finishing & Embellishments",
              text: "Premium post-press finishing options including hot stamping, embossing, laminating, window patching, and spot UV."
            },
            {
              src: "/images/7RV03354.jpg",
              title: "Quality Control",
              text: "Automated and manual quality control processes following QC AQL standards to ensure consistent, high-quality production."
            }
          ].map(({ src, title, text }, i) => (
            <div key={i} className="text-left">
              <div className="relative w-full h-[250px] mx-auto shadow-lg">
                <Image src={src} alt={title} layout="fill" objectFit="cover" />
              </div>
              <h3 className="mt-4 text-md font-bold text-[var(--color-primary)]">{title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Values */}
      <section id="values" className="my-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="mb-4 text-3xl font-bold text-left text-[var(--color-primary)]">Corporate Values & Ethics</h1>
        <h2 className="mb-8 text-start text-justify text-[var(--color-text)]">
          Guided by PEAK Values: Peduli (Care), Efisien (Efficiency), Akurat (Accuracy), and Kerjasama (Collaboration)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: <HandHeart />, title: "Peduli", subtitle: "Care", desc: "We foster a supportive and respectful work environment." },
            { icon: <Clock3 />, title: "Efisien", subtitle: "Efficient", desc: "We optimize processes to save time and resources." },
            { icon: <Target />, title: "Akurat", subtitle: "Accurate", desc: "We ensure precision in all our products and services." },
            { icon: <Handshake />, title: "Kerjasama", subtitle: "Collaborate", desc: "We work together with honesty and transparency." }
          ].map(({ icon, title, subtitle, desc }, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="w-12 h-12 mb-4 text-[var(--color-primary)]">{icon}</div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">{title}</h3>
              <p className="text-xs text-gray-500 mb-2">{subtitle}</p>
              <p className="text-sm text-[var(--color-text)] text-center">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Responsibilities */}
      <section className="my-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="mb-4 text-3xl font-bold text-[var(--color-primary)] text-left">Corporate Responsibilities</h1>
        <h2 className="mb-6 text-2xl font-medium text-left text-[var(--color-text)]">Committed to Sustainability, Ethics, and Workplace Excellence.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: "sustainability-icon.svg", title: "Sustainability", text: "FSC-certified paper, water-based coatings, waste reduction" },
            { icon: "ethics-icon.svg", title: "Ethical Business Practices", text: "Building trusted, transparent partnerships" },
            { icon: "safety-icon.svg", title: "Workplace Safety & Well-being", text: "Ensuring a safe, healthy environment with K3-certified personnel" }
          ].map(({ icon, title, text }, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={`/icons/${icon}`} alt={`${title} Icon`} className="w-20 h-20 mb-4" />
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--color-text)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="my-12 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="mb-4 text-3xl font-bold text-left text-[var(--color-primary)]">Certification</h1>
        <h2 className="mb-6 text-2xl font-medium text-left text-[var(--color-text)]">
          Recognized Standards of Quality, Sustainability, and Compliance.
        </h2>
        <p className="text-left text-base text-[var(--color-text)] mb-6">
          Mega Putra is certified under ISO 9001:2015, FSC®, and Indonesian Halal standards. We also passed the Disney ILS audit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { img: "/images/sgs.png", title: "ISO 9001:2015", desc: "Certified for quality management and improvement." },
            { img: "/images/fsc.png", title: "FSC® Certification", desc: "Supporting sustainable forestry and eco-packaging." },
            { img: "/images/halal.png", title: "Halal Certification", desc: "Compliant with Halal packaging standards." }
          ].map(({ img, title, desc }, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={img} alt={title} className="h-24 mb-4" />
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">{title}</h3>
              <p className="text-sm text-[var(--color-text)]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43 text-center bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-[var(--color-text)] mb-6">
            At Mega Putra, we are committed to delivering quality, precision, and innovative packaging solutions you can trust. Discover how our capabilities can help elevate your brand.
          </p>
          <button className="bg-[var(--color-primary)] text-white font-medium px-6 py-3 rounded-md hover:bg-[var(--color-lighter)] transition inline-flex items-center gap-2">
            Explore Our Solutions
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
