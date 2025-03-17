import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Timeline from "@/components/timeline";
import Image from "next/image";
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
        <p className="mt-6 text-left text-base text-[var(--color-text)] text-justify">
          First established in 1997, PT Mega Putra has now developed into a leading offset printing and production company which focuses on Packaging. We have more than 15 years of experience in serving both local & international customers.
        </p>
      </section>
      <section className="relative bg-[url('/images/banner4.png')] bg-cover flex items-end h-[310px]">
      </section>
      <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-start text-justify">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold text-left ml-4 text-[var(--color-primary)]">
            The Story Behind <br></br>the Founding of <br></br>Mega Putra
          </h1>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 mt-6 md:mt-0 text-justify">
          <p className="text-left text-base ]  text-[var(--color-text)]">
            It all started with knowledge, a deep understanding of the craft and the industry.
            Alongside it came the determination to earn, not just for survival, but to build a life
            that felt fulfilling and adequate. This mindset opened doors, presenting opportunities
            that demanded effort and integrity.

            <br /><br />

            With every challenge faced, hard work and honesty became the guiding principles.
            Over time, these four values—knowledge, determination, effort, and honesty—shaped the
            foundation of Mega Putra. More than just a business, it became a testament to the belief
            that true quality is built from within. And from the very beginning, quality has been
            our priority.

            <br /><br />

            Mega Putra strives to be more than just a company—it aims to be a trusted partner for
            employees, suppliers, and customers alike. For employees, Mega Putra is committed to
            providing a supportive and growth-oriented work environment, where skills are nurtured,
            and dedication is valued.

            <br /><br />

            For suppliers, the company fosters strong, transparent, and mutually beneficial relationships
            built on trust and long-term collaboration. For customers, Mega Putra remains dedicated to
            delivering high-quality products with exceptional service, ensuring satisfaction and
            reliability in every order. Through these commitments, Mega Putra envisions itself as a
            leader in the industry, setting new standards of excellence and integrity.
          </p>
        </div>
      </section>

     <Timeline/>

      {/* Vision & Mission */}
 
    <section className="py-12 px-8 md:px-16 lg:px-24 xl:px-43 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <Image 
          src="/images/pict8.png" 
          alt="Employee working in a printing company" 
          width={500} 
          height={400} 
          className="shadow-lg" 
        />
      </div>
      <div className="md:w-1/2 pb-26">
        <div>
          <h1 className="text-3xl font-bold text-blue-600 ] text-justify ">Our Vision</h1>
          <p className="mt-4 text-gray-700">
            To be a leading and trusted printing and packaging company, setting new standards in
            quality, innovation, and sustainability while creating lasting value for our customers, 
            employees, and partners.
          </p>
        </div>
        <div className="mt-6  text-justify">
          <h1 className="text-3xl font-bold text-blue-600 ]">Our Mission</h1>
          <ul className="mt-4 text-gray-700 list-decimal list-inside">
            <li>Deliver high-quality printing and packaging with precision and consistency.</li>
            <li>Innovate with sustainable materials and eco-friendly production processes.</li>
            <li>Build strong relationships with customers, employees, and partners.</li>
            <li>Continuously improve efficiency and technology to meet market demands.</li>
            <li>Uphold the highest standards of integrity and customer satisfaction.</li>
          </ul>
        </div>
      </div>
    </section>

      {/* Technology Section */}
      <section className="py-12 px-8 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold text-[var(--color-primary)]">Our Technology</h2>
        <p className="mt-4 text-[var(--color-text)] text-justify">We use advanced printing and packaging machines from Japan and Germany, ensuring precision, color accuracy, and high-quality results. With cutting-edge technology and strict quality control, we deliver efficient and reliable solutions that meet international standards
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <img src="/images/banner4.png" className=" shadow-lg" />
          <img src="/images/banner3.png" className=" shadow-lg" />
          <img src="/images/banner4.png" className=" shadow-lg" />
        </div>
      </section>

    {/* Sustainability Section */}
<section className="bg-white py-12 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center text-justify justify-between ">
  <div className="md:w-2/3">
    <h2 className="text-3xl font-bold text-[#0077b6]">Sustainability</h2>
    <p className="mt-4 text-gray-700 leading-relaxed">
      Mega Putra, sustainability is integrated into our production process. With advanced, eco-friendly technology and strict environmental standards, our facilities are designed to minimize waste and energy consumption.
    </p>
    <p className="mt-4 text-gray-700 leading-relaxed">
      We are FSC-certified and committed to responsible sourcing, ensuring that our materials meet global sustainability requirements. Our processes are already optimized for environmentally friendly production, and we continue to innovate to meet the growing demand for sustainable packaging solutions.
    </p>
    <p className="mt-4 text-gray-700 leading-relaxed">
      We are ready to lead innovation in an industry that prioritizes sustainability, delivering eco-conscious solutions that align with the growing demand for responsible and sustainable packaging.
    </p>
  </div>
  <div class="circle-container">
  <svg viewBox="0 0 220 220" class="text-circle">
    <defs>
      <path id="textPath" d="M 110,10 A 100,100 0 1,1 109.9,10" />
    </defs>
    <text>
      <textPath href="#textPath" startOffset="0%">
        • SUSTAINABILITY • ECOLOGY • ARIDLANDS • SUSTAINABILITY • ECOLOGY • ARIDLANDS
      </textPath>
    </text>
  </svg>
  <img src="images/sus.png" alt="Mega Putra Logo" class="logo"/>
</div>

</section>

      <Footer />
    </>
  );
}