import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import WhatsappButton from "@/components/whatsapp";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return ( 
  <>
  <Navbar />
  <Component {...pageProps} />
  <WhatsappButton />
  <Footer/>
  </>
)
}
