import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SEO from "../components/seo";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  EN: {
    title: "Contact Us",
    subtitle: "Get In Touch",
    description:
      "For any inquiries related to Megaputra products & services, you can fill out form beside for your convenience.",
    phone: "Contact",
    email: "E-mail",
    address: "Our Address",
    formTitle: "Contact Us",
    firstName: "Enter first name",
    lastName: "Enter last name",
    emailPlaceholder: "Enter your email",
    phonePlaceholder: "Enter your phone no.",
    companyName: "Enter your company name",
    message: "Write Message",
    button: "Submit Message",
    success: "Message sent successfully!",
    error: "Failed to send message. Please try again.",
  },
  ID: {
    title: "Hubungi Kami",
    subtitle: "Hubungi Kami",
    description:
      "Untuk pertanyaan terkait produk & layanan Megaputra, silakan isi formulir di samping.",
    phone: "Kontak",
    email: "Surel",
    address: "Alamat Kami",
    formTitle: "Hubungi Kami",
    firstName: "Nama depan",
    lastName: "Nama belakang",
    emailPlaceholder: "Masukkan email Anda",
    phonePlaceholder: "Masukkan nomor telepon",
    companyName: "Nama perusahaan",
    message: "Tulis Pesan",
    button: "Kirim Pesan",
    success: "Pesan berhasil dikirim!",
    error: "Gagal mengirim pesan. Silakan coba lagi.",
  },
};

export default function Contact() {
  const form = useRef();
  const { language } = useLanguage();
  const t = translations[language];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nxj4w1l",     // Ganti dengan ID EmailJS kamu
        "template_n1o1dlt",    // Ganti dengan Template ID
        form.current,
        "aX6rt1D7R3Ox4irfc"    // Ganti dengan Public Key
      )
      .then(
        () => {
          alert(t.success);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert(t.error);
        }
      );
  };

  return (
    <>
      <SEO
        title={`Mega Putra | ${t.title}`}
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
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">{t.title}</h1>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="text-white py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-43 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-[30px] sm:text-[40px] font-medium text-[var(--color-primary)]">{t.subtitle}</h2>
          <p className="my-2 text-[var(--color-text)] sm:text-[20px]">{t.description}</p>

          <div className="my-6 text-[var(--color-text)]">
            <h3 className="text-[16px] font-medium">📞 {t.phone}</h3>
            <p className="text-[var(--color-light)]">021-29662288</p>
          </div>
          <div className="mb-6 text-[var(--color-text)]">
            <h3 className="text-[16px] font-medium">📧 {t.email}</h3>
            <p className="text-[var(--color-light)]">marketing@megaputra.com</p>
          </div>
          <div className="mb-6 text-[var(--color-text)]">
            <h3 className="text-[16px] font-medium">📍 {t.address}</h3>
            <p className="text-[var(--color-light)] text-[14px]">
              Jl. Raya Puspiptek No.18, RT.7/RW.2, Kota Tangerang Selatan, Banten 15315
            </p>
          </div>
        </div>

        <div className="bg-white text-[var(--color-text)] rounded-3xl shadow-xl p-6 text-[var(--color-text)]">
          <h2 className="text-[40px] font-medium my-2">{t.formTitle.split(" ")[0]} <span className="text-[var(--color-primary)]">{t.formTitle.split(" ")[1]}</span></h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="first_name"
                placeholder={t.firstName}
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
              <input
                type="text"
                name="last_name"
                placeholder={t.lastName}
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <input
              type="email"
              name="user_email"
              placeholder={t.emailPlaceholder}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder={t.phonePlaceholder}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
              required
            />
            <input
              type="text"
              name="company_name"
              placeholder={t.companyName}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />

            <textarea
              name="message"
              placeholder={t.message}
              required
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-28"
            ></textarea>
            <button
              type="submit"
              className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition"
            >
              {t.button}
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.741461673306!2d106.69134207509676!3d-6.347082893641534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5a88a3defb5%3A0x533f3f634a45322f!2sPT.%20Mega%20Putra!5e0!3m2!1sen!2sid!4v1750066313085!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>
    </>
  );
}
