import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Mega Putra - Paper Packaging Solutions"
        description="Your Trusted Partner in Paper Packaging Solutions"
        openGraph={{
          type: 'website',
          locale: 'id_ID',
          url: 'https://megaputra.com/',
          title: 'Mega Putra - Paper Packaging Solutions',
          description: 'Your Trusted Partner in Paper Packaging Solutions',
          images: [
            {
              url: 'https://megaputra.com/images/banner.jpg',
              width: 1440,
              height: 630,
              alt: 'Mega Putra',
            },
          ],
        }}
      />
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mega Putra",
            "url": "https://megaputra.com",
            "logo": "https://megaputra.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/megaputra",
              "https://www.instagram.com/megaputra",
              "https://www.linkedin.com/company/megaputra"
            ]
          })}
        </script>
      </Head>
      <header className="header">
        <h1>Welcome to Mega Putra</h1>
        <p>Your Trusted Partner in Paper Packaging Solutions</p>
        <Link href="/projects" className="button">Explore More</Link>
      </header>
      <Image src="/images/banner.jpg" alt="Mega Putra" width={1460} height={523} priority />
    </>
  );
}
