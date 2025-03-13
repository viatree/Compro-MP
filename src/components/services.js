const Services = () => {
    return (
      <section className=" py-6 px-8 md:px-16 lg:px-24 xl:px-43">
        <h1 className="mt-6 text-3xl font-bold text-left text-[var(--color-primary)]">What We Offer</h1>
        <p className="mt-6 text-left text-base text-[var(--color-text)]">
        First established in 1997, PT Mega Putra has now developed into a leading offset printing and production company which focuses on Packaging. We have more than 15 years of experience in serving both local & international customers.
        </p>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <img src="/images/service1.jpg" className="mx-auto w-32 h-32 rounded-full shadow-lg" />
            <h3 className="mt-4 font-semibold text-lg">Consultation</h3>
          </div>
          <div className="text-center">
            <img src="/images/service2.jpg" className="mx-auto w-32 h-32 rounded-full shadow-lg" />
            <h3 className="mt-4 font-semibold text-lg">Packaging Design</h3>
          </div>
          <div className="text-center">
            <img src="/images/service3.jpg" className="mx-auto w-32 h-32 rounded-full shadow-lg" />
            <h3 className="mt-4 font-semibold text-lg">Offset Printing</h3>
          </div>
          <div className="text-center">
            <img src="/images/service4.jpg" className="mx-auto w-32 h-32 rounded-full shadow-lg" />
            <h3 className="mt-4 font-semibold text-lg">Logistics</h3>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  