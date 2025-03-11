const Services = () => {
    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-600">What We Offer</h2>
        <p className="mt-4 text-center text-gray-700">
          PT Mega Putra telah berkembang menjadi perusahaan produksi packaging kertas terkemuka.
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
  