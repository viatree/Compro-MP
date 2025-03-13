import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[url('/images/banner.png')] bg-cover flex items-center mt-18">
      {/* Overlay (opsional untuk efek lebih jelas) */}
      <div className="relative w-full max-w-[80%] mx-auto text-left text-white px-6 pl-10 md:pl-20 z-10">
        <h1
          className="text-6xl font-semibold drop-shadow-md mt-8"
          style={{ textShadow: "2px 8px 15px rgba(0, 0, 0, 0.4)" }}
        >
          Welcome to Mega Putra
        </h1>
        <p className="mt-6 text-[25px] font-semibold">
          Your Trusted Partner in Paper Packaging Solutions
        </p>

        {/* Button dengan gambar */}
        <Link href="/solutions" className="relative mt-6 inline-block">
          <img src="/images/button.png" alt="Explore More" className="w-[200px] h-auto" />
          <span className="absolute top-1/2 left-18 transform -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-[18px] ml-">
            Explore More
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
