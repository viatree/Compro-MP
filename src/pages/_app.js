import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import WhatsappButton from "@/components/whatsapp";
import { LanguageProvider } from "../contexts/LanguageContext";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return ( 
  <>
      <LanguageProvider>
  <Navbar />
  <Component {...pageProps} />
  <WhatsappButton/>
  <Footer/>
  </LanguageProvider>
  </>
)
}
