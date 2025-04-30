import SEO from "../components/seo";

export default function Contact() {
  return (
    <>
      <SEO
        title="Mega Putra | Contact"
        description="Mega Putra adalah perusahaan terkemuka dalam solusi packaging kertas dengan kualitas terbaik."
        keywords="packaging, printing, offset printing, box packaging, Mega Putra"
        image="/images/og-image.jpg"
        url="https://megaputra.com"
      />

      {/* Banner */}
      <section className="relative">
        <img
          src="/images/backg.png"
          alt="Contact Banner"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">
            Contact <span className="text-[var(--color-primary)]">Us</span>
          </h1>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="text-white py-12 px-6 md:px-16 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-text)]">Get in touch</h2>
          <p className="mb-8 text-[var(--color-text)]">
            Kami siap membantu Anda. Hubungi kami melalui informasi berikut atau kirim pesan langsung.
          </p>

          <div className="mb-6 text-[var(--color-text)]">
            <h3 className="text-lg font-semibold ">📞 Contact</h3>
            <p className="text-[var(--color-light)]">021-29662288</p>
          </div>
          <div className="mb-6 text-[var(--color-text)]">
            <h3 className="text-lg font-semibold">📧 E-mail</h3>
            <p className="text-[var(--color-light)]">marketing@megaputra.com</p>
          </div>
          <div className="mb-6 text-[var(--color-text)]">
            <h3 className="text-lg font-semibold">📍 Our Address</h3>
            <p className="text-[var(--color-light)]">
            Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315
            </p>
          </div>
        </div>

        <div className="bg-white text-black rounded-3xl shadow-xl p-10 text-[var(--color-text)]">
          <h2 className="text-3xl font-bold mb-6">Contact <span className="text-[var(--color-primary)]">Us</span></h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter first name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Enter last name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <input
              type="tel"
              placeholder="Enter your phone no."
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <textarea
              placeholder="Write Message"
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-28"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>

      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.152169754838!2d106.715578!3d-6.244007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb9dc1212f0f%3A0x3cbeb0c321d8c3b0!2sPT.%20Mega%20Putra!5e0!3m2!1sen!2sid!4v1689832476819!5m2!1sen!2sid"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        ></iframe>
      </section>
    </>
  );
}