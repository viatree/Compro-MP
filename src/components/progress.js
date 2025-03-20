import { useState } from "react";


export default function progress() {
    
   return(
   <section className="relative py-12 flex flex-col items-center">
  <h1 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-6">
    How It Works
  </h1>


  <div className="relative w-full max-w-6xl">

    <div className="w-full bg-[#29a0da] h-26 flex items-center justify-between px-10 md:px-15 lg:px-22 relative">
      
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg">

      <svg
       viewBox="140 0 1000 100">
        <line x1="190" y1="100" x2="240" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        <line x1="190" y1="0" x2="240" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        </svg>
        <svg
       viewBox="130 0 1000 100">
        <line x1="390" y1="100" x2="440" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        <line x1="390" y1="0" x2="440" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        </svg>
        <svg
       viewBox="80 0 1000 100">
        <line x1="590" y1="100" x2="640" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        <line x1="590" y1="0" x2="640" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        </svg>
        <svg
       viewBox="100 0 1000 100">
        <line x1="790" y1="100" x2="840" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        <line x1="790" y1="0" x2="840" y2="50" stroke="white" strokeWidth="4" strokeDasharray="7,5"/>
        </svg>
      </svg>

      <span className="text-white font-bold text-lg">Inquiry</span>
      <span className="text-white font-bold text-lg">Quotation</span>
      <span className="text-white font-bold text-lg">Development</span>
      <span className="text-white font-bold text-lg">Production</span>
      <span className="text-white font-bold text-lg">Shipment</span>
    </div>
  </div>
</section>

)
}