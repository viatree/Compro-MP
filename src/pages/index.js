import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Services from "../components/services";
import Footer from "../components/footer";

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
      <Hero />
      <Services />
      <Footer />
    </>
  );
}
