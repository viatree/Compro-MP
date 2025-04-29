import SEO from "../components/seo";
import Timeline from "@/components/timeline";
import Technology from "../components/technology";
import Image from "next/image";
import {  Clock3, Target, Handshake, HandHeart } from "lucide-react";

export default function company() {

  return (
    <>
      <SEO
        title="Mega Putra | Company"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />
      {/* About Megaputra */}
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43 mt-20">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          ABOUT MEGA PUTRA
        </h1>
        <h2 className="my-4 text-2xl font-medium text-left text-[var(--color-text)] ">
          Delivering Trusted Paper Packaging Solutions Since 1997
        </h2>
        <p className="text-start text-justify text-[var(--color-text)]">
          Established in 1997, PT Mega Putra has grown into a leading offset printing and packaging solutions provider. With over 28 years of experience, we serve both local and international customers across diverse industries including cosmetics, pharmaceuticals, FMCG, automotive, and food.
          <br></br>
          <br></br>
          Our commitment to <b>quality</b>, <b>innovation</b>, and <b>efficiency</b> ensures we deliver customised solutions that help brands elevate their packaging standards.
        </p>
      </section>

      <section className="re lative bg-[url('/images/banner4.png')] bg-cover flex items-end h-[310px]">
      </section>

      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-start text-justify">
        {/* Left Section */}
        <div className="w-full mt-6 md:mt-0 text-justify text-wrap">
          <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
            The Story Behind Mega Putra
          </h1>
          <p className="text-left text-base ] text-[var(--color-text)] ">
            Mega Putra was built on the principles of knowledge, determination, effort, and honesty—values that continue to shape who we are today. Over time, these four pillars formed the foundation of Mega Putra, transforming it into more than just a business—it became a testament to the belief that true quality is built from within.
            <br /><br />

            From the very beginning, quality has been our priority. Today, these founding principles are reflected in our corporate culture: <b>Peduli</b> (Care), <b>Efisien</b> (Efficient), <b>Akurat</b> (Accurate), and <b>Kerjasama</b> (Collaborate)—collectively known as PEAK.
            <br /><br />
            Mega Putra strives to be a trusted partner for employees, suppliers, and customers alike. We are committed to fostering an environment that encourages continuous improvement for our employees, building strong, transparent relationships with suppliers, and delivering high-quality products with exceptional service to our customers.

            Through these commitments, Mega Putra continues to set new standards of excellence and integrity in the printing and packaging industry.
          </p>
        </div>

      </section>

      <Timeline />

      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43 flex  text-justify flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 py-12 px-4" >
          <Image
            src="/images/pict8.png"
            alt="Employee working in a printing company"
            width={500}
            height={400}
            className="shadow-lg"
          />
        </div>
        <div className="md:w-1/2 pb-16">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-primary)] ] text-justify ">Our Vision and Mission</h1>
            <h2 className="my-4 text-2xl font-semibold text-left text-[var(--color-text)] ">
              Vision
            </h2>
            <p className=" my-4 text-[var(--color-text)]">
              To lead growth and innovation within the packaging industry by delivering sustainable, high-quality solutions that inspire trust and drive industry progress.
            </p>
          </div>
          <div className="text-justify">
            <h2 className="my-4 text-2xl font-semibold  text-left text-[var(--color-text)] ">
              Mission
            </h2>
            <ul className="mt-4 text-[var(--color-text)] list-decimal list-inside">
              <li>Continuously uphold and advance the highest standards of product quality and customer service.</li>
              <li>Consistently apply the core PEAK values—Peduli (Care), Efisien (Efficient), Akurat (Accurate), and Kerjasama (Collaborate)—in every aspect of our business operations.</li>
              <li>Foster a culture that encourages ongoing learning, professional growth, and continuous operational improvement.</li>
              <li>Proactively integrate sustainability into all facets of the company to ensure positive environmental impacts and create long-term value.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Technology />
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          Our Capabilities
        </h1>
        <h2 className="my-4 text-2xl font-medium text-left text-[var(--color-text)]">
          Delivering Quality Through Integrated Capabilities
        </h2>

        {/* Service Boxes */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="text-left">
            <div className="relative w-full h-[250px] mx-auto shadow-lg">
              <Image
                src="/images/7RV03391.jpg"
                alt="Packaging Development"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] ">
              In-House Prepress & Prototyping
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Precise die-cutting board creation and rapid sample prototyping to ensure accurate, efficient packaging development.
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-left">
            <div className="relative w-full h-[250px] mx-auto shadow-lg">
              <Image
                src="/images/7RV03558.jpg"
                alt="High-Quality Printing"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] ">
              Offset & UV Printing
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Advanced offset and UV printing technology delivering vibrant colours, multi-colour printing, and specialised finishes.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-left">
            <div className="relative w-full h-[250px] mx-auto shadow-lg">
              <Image
                src="/images/7RV03872.jpg"
                alt="Colour Development"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] ">
              Finishing & Embellishments
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Premium post-press finishing options including hot stamping, embossing, laminating, window patching, and spot UV.
            </p>
          </div>

          {/* Item 4 */}
          <div className="text-left">
            <div className="relative w-full h-[250px] mx-auto shadow-lg">
              <Image
                src="/images/7RV03354.jpg"
                alt="In-House Production"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] ">
              Quality Control
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Automated and manual quality control processes following QC AQL standards to ensure consistent, high-quality production.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
  <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
    Corporate Values & Ethics
  </h1>
  <h2 className="text-start text-justify text-[var(--color-text)] mb-8">
    Guided by PEAK Values: Peduli (Care), Efisien (Efficiency), Akurat (Accuracy), and Kerjasama (Collaboration)—these core values are the foundation of our company culture, shaping how we work and collaborate every day.
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {/* Care */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <HandHeart className="w-12 h-12 mb-4 text-[var(--color-primary)]" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Peduli</h3>
      <p className="text-xs text-gray-500 mb-2">Care</p>
      <p className="text-sm text-[var(--color-text)] text-center">
        We foster a supportive and respectful work environment.
      </p>
    </div>

    {/* Efficiency */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <Clock3 className="w-12 h-12 mb-4 text-[var(--color-primary)]" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Efisien</h3>
      <p className="text-xs text-gray-500 mb-2">Efficiency</p>
      <p className="text-sm text-[var(--color-text)] text-center">
        We optimize processes to save time and resources.
      </p>
    </div>

    {/* Accuracy */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <Target className="w-12 h-12 mb-4 text-[var(--color-primary)]" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Akurat</h3>
      <p className="text-xs text-gray-500 mb-2">Accuracy</p>
      <p className="text-sm text-[var(--color-text)] text-center">
        We ensure precision in all our products and services.
      </p>
    </div>

    {/* Collaboration */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <Handshake className="w-12 h-12 mb-4 text-[var(--color-primary)]" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">Kerjasama</h3>
      <p className="text-xs text-gray-500 mb-2">Collaboration</p>
      <p className="text-sm text-[var(--color-text)] text-center">
        We work together with honesty and transparency.
      </p>
    </div>
  </div>
</section>

      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43 ">
        <h1 className="text-3xl font-bold text-[var(--color-primary)] text-left mb-4">
          Corporate Responsibilities
        </h1>
        <h2 className="my-4 text-2xl font-medium text-left text-[var(--color-text)]">
          Committed to Sustainability, Ethics, and Workplace Excellence.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Sustainability */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="/icons/sustainability-icon.svg" alt="Sustainability Icon" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Sustainability</h3>
            <p className="text-sm text-[var(--color-text)]">
              FSC-certified paper, water-based coatings, waste reduction
            </p>
          </div>

          {/* Ethical Business Practices */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="/icons/ethics-icon.svg" alt="Ethical Business Practices Icon" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Ethical Business Practices</h3>
            <p className="text-sm text-[var(--color-text)]">
              Building trusted, transparent partnerships
            </p>
          </div>

          {/* Workplace Safety & Well-being */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="/icons/safety-icon.svg" alt="Workplace Safety Icon" className="w-20 h-20 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Workplace Safety & Well-being</h3>
            <p className="text-sm text-[var(--color-text)]">
              Ensuring a safe, healthy environment with K3-certified personnel
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          CERTIFICATIONS
        </h1>
        <h2 className="my-4 text-2xl font-medium text-left text-[var(--color-text)]">
          Recognized Standards of Quality, Sustainability, and Compliance.
        </h2>
        <p className="text-left text-base ] text-[var(--color-text)] my-4 ">
          Mega Putra is proud to maintain recognized industry certifications that reflect our commitment to quality, sustainability, and ethical practices. We are certified under ISO 9001:2015, FSC®, and Indonesian Halal standards. Additionally, we have successfully completed the Disney International Labor Standards (ILS) audit, demonstrating our adherence to global ethical and operational standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* ISO Certification */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="/images/sgs.png" alt="ISO 9001:2015 Certification" className="h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">ISO 9001:2015</h3>
            <p className="text-sm text-[var(--color-text)]">
              Certified for rigorous quality management systems and continuous operational improvement.
            </p>
          </div>

          {/* FSC Certification */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="/images/fsc.png" alt="FSC Certification" className="h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">FSC® Certification</h3>
            <p className="text-sm text-[var(--color-text)]">
              Supporting responsible forestry and sustainable material sourcing for eco-friendly packaging.
            </p>
          </div>

          {/* Halal Certification */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <img src="/images/halal.png" alt="Indonesian Halal Certification" className=" h-24 mb-4" />
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Indonesian Halal Certification</h3>
            <p className="text-sm text-[var(--color-text)]">
              Compliance with Indonesian Halal standards for regulated packaging industries.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}