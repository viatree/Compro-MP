const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-[url('/images/banner.png')] bg-cover bg-center flex items-center">
      <div className="absolute "></div>
      <div className="relative w-full max-w-[80%] mx-auto text-left text-white px-6 pl-10 md:pl-20">
        <h1
          className="text-6xl font-semibold drop-shadow-md"
          style={{ textShadow: "2px 8px 15px rgba(0, 0, 0, 0.4)" }}
        >
          Welcome to Mega Putra
        </h1>
        <p className="mt-4 text-2xl font-semibold">Your Trusted Partner in Paper Packaging Solutions</p>
        
        {/* Button dengan gambar */}
        <a
          href="/solutions"
          className="relative mt-6 inline-block"
        >
          <img src="/images/button.png" alt="Explore More" className="w-[200px] h-auto" />
          <span className="absolute top-1/2 left-20 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold">
            Explore More
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
