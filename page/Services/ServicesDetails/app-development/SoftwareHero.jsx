import React from "react";

const SoftwareHero = () => {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden text-center">
      {/* Soft background glows similar to the screenshot */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-[#fd741e] text-sm font-bold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-[#fd741e]"></span>
          PREMIUM SOFTWARE SERVICES
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-[#094a84] leading-tight mb-6">
          Build Powerful Applications with Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-[#fd741e] to-orange-500">
            Custom Software
          </span>{" "}
          Solutions
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
          From scalable mobile apps to robust desktop software, our expert development team delivers high-performance digital solutions designed to streamline your operations and drive massive growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#fd741e] text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
            Start Your Project
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#fd741e] font-bold rounded-full border-2 border-orange-100 hover:border-[#fd741e] transition-colors">
            Explore Platforms
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;