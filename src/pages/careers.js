import SEO from "../components/seo";
import Jobs from "@/components/jobs";
import Faq from "@/components/faq"

const recruitmentSteps = [
  {
    step: "1. Submit Application",
    description: "Send us your CV, portfolio, and other required documents through our online platform."
  },
  {
    step: "2. Initial Interview",
    description: "Have a conversation with HR or the hiring manager to discuss your background and experiences."
  },
  {
    step: "3. Skills and Aptitude Assessment",
    description: "Complete assessments designed to evaluate your skills, logical thinking, and job fit."
  },
  {
    step: "4. Final Interview & Offer Discussion",
    description: "Meet with company leaders, align expectations, and discuss your offer."
  },
  {
    step: "5. Join the Mega Putra Team",
    description: "Complete orientation and start your exciting journey with Mega Putra.",
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

      <section
  className="relative bg-[url('/images/banner5.png')] bg-cover bg-center sm:bg-top md:bg-center lg:bg-center 
             flex items-end mt-20 h-[120px] sm:h-[160px] md:h-[200px] lg:h-[300px]"
>
</section>

      
      <section className="py-10 px-8 md:px-16 lg:px-24 xl:px-43">
      <h1 className="my-2 text-[28px] sm:text-[28px] md:text-[30px] lg:text-[40px] font-medium text-left text-[var(--color-primary)]">
      Building Careers Through PEAK 
      <br></br> Peduli(Care), Efesien(Efficient), Akurat(Accurate), Kerjasama(Collaborate) 
        </h1>
        <h2 className="text-start text-justifytext-[16px] sm:text-[16px] md:text-[20px] lg:text-[24px] font-light text-[var(--color-text)]">
        At Mega Putra, we believe that strong careers are built on values. <br></br>
        Join our team and experience a workplace dedicated to care, efficiency, accuracy, and collaboration.
        </h2>
        </section>
        
        <section className="px-8 md:px-16 lg:px-24 xl:px-43 grid grid-cols-1 md:grid-cols-5 gap-8" >
       
          {recruitmentSteps.map((step, index) => (
            <div 
              key={index} 
              className={`p-6 ${step.highlight ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-card)] text-[var(--color-text)]'}`}
            >
              <h3 className="font-semibold text-[16px]">{step.step}</h3>
              <p className="mt-2 font-light text-[14px]">{step.description}</p>
            </div>
          ))}

      </section>

      <Jobs/>

      <Faq/>
    </>
  );
}