import SEO from "../components/seo";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Jobs from "@/components/jobs";
import Faq from "@/components/faq"

const recruitmentSteps = [
  {
    step: "1. Apply Job",
    description: "Submit your CV, portfolio, and required documents through our online platform."
  },
  {
    step: "2. Interview",
    description: "Have an initial conversation with HR or the hiring manager about your experience."
  },
  {
    step: "3. Assessment Test",
    description: "Complete tests to evaluate skills, logical thinking, and job suitability."
  },
  {
    step: "4. Final Interview & Offer",
    description: "Meet company leaders, discuss your expectations, and receive a job offer."
  },
  {
    step: "5. Welcome Aboard",
    description: "Join team, complete orientation, and start journey at Mega Putra!",
    highlight: true
  }
];

export default function Careers() {
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
      
      <section className="relative bg-[url('/images/banner5.png')] bg-cover flex items-end mt-20 h-[200px]">
        <h1 className="w-full ml-27 mx-auto text-white px-6 py-6 pl-10 md:pl-20 z-10 text-[32px] font-semibold absolute bottom-0">
          A Better Tomorrow Through Innovation and Collaboration
        </h1>
      </section>
      
      <section className="w-full mx-auto py-6 ml-25 md:pl-20">
        <h2 className="text-[var(--color-primary)] text-[32px] font-semibold mt-4">
          The recruitment process at Mega Putra
        </h2>
        <div className="w-full mx-auto py-8 pr-70 grid grid-cols-1 md:grid-cols-5 gap-8 ">
          {recruitmentSteps.map((step, index) => (
            <div 
              key={index} 
              className={`p-6 ${step.highlight ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-card)] text-[var(--color-text)]'}`}
            >
              <h3 className="font-semibold">{step.step}</h3>
              <p className="mt-2 text-md">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Jobs/>

      <Faq/>
      
      <Footer />
    </>
  );
}