import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function resources() {
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
      <Footer />
    </>
  );
}
