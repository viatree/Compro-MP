import '../styles/globals.module.scss';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import Header from '../components/Header';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
     <Header />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
