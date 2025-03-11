const Hero = () => {
    return (
      <section className="relative bg-[url('/hero-image.jpg')] bg-cover bg-center h-[500px] flex items-center">
        <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl font-bold">Welcome to Mega Putra</h1>
          <p className="mt-4 text-lg">Your Trusted Partner in Paper Packaging Solutions</p>
          <a href="/solutions" className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">Explore More</a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  