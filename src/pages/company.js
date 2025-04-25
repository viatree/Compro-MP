import SEO from "../components/seo";
import Timeline from "@/components/timeline";
import Technology from "../components/technology";
import Image from "next/image";
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

      <section className="relative bg-[url('/images/banner4.png')] bg-cover flex items-end h-[310px]">
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

      {/* Vision & Mission */}

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
            <h1 className="text-3xl font-bold text-[var(--color-primary)] ] text-justify ">OUR VISION AND MISSION</h1>
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

      {/* Sustainability Section */}
      <section className="py-6 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="my-2 text-3xl font-bold text-left text-[var(--color-primary)]">
          OUR CAPABILITIES
        </h1>
        <h2 className="text-start text-justify text-[var(--color-text)]">
          Delivering Quality Through Integrated Capabilities
        </h2>

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
              In-House Prepress & Prototyping
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Precise die-cutting board creation and rapid sample prototyping to ensure accurate, efficient packaging development.
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
              Offset & UV Printing
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Advanced offset and UV printing technology delivering vibrant colours, multi-colour printing, and specialised finishes.
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
            <h3 className="mt-4 text-md font-bold text-[var(--color-primary)] uppercase">
              Quality Control
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text)]">
              Automated and manual quality control processes following QC AQL standards to ensure consistent, high-quality production.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43 bg-[#f9f9f9]">
  <h1 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-4">
    Corporate Values & Ethics
  </h1>
  <p className="text-center text-[var(--color-text)] max-w-3xl mx-auto mb-10">
    Guided by PEAK Values: Peduli (Care), Efisien (Efficiency), Akurat (Accuracy), and Kerjasama (Collaboration)—these core values are the foundation of our company culture, shaping how we work and collaborate every day.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {/* Care */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <img src="/icons/care-icon.svg" alt="Care Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Care</h3>
      <p className="text-sm text-[var(--color-text)]">We foster a supportive and respectful work environment.</p>
    </div>
    {/* Efficiency */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <img src="/icons/efficiency-icon.svg" alt="Efficiency Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Efficiency</h3>
      <p className="text-sm text-[var(--color-text)]">We optimize processes to save time and resources.</p>
    </div>
    {/* Accuracy */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <img src="/icons/accuracy-icon.svg" alt="Accuracy Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Accuracy</h3>
      <p className="text-sm text-[var(--color-text)]">We ensure precision in all our products and services.</p>
    </div>
    {/* Collaboration */}
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      <img src="/icons/collaboration-icon.svg" alt="Collaboration Icon" className="w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">Collaboration</h3>
      <p className="text-sm text-[var(--color-text)]">We work together with honesty and transparency.</p>
    </div>
  </div>
</section>


    </>
  );
}