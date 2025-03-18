import Head from "next/head";

const SEO = ({ title, description, keywords, image, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="IT Team Mega Putra" />

      {/* Open Graph untuk social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description } />
      <meta property="og:image" content={image || "/images/banner.png"} />
      <meta property="og:url" content={url || "https://megaputra.com"} />
      <meta property="og:type" content="website" />

      {/* Favicon */}
      <link rel="icon" href="/images/logos.png" />
    </Head>
  );
};

export default SEO;
