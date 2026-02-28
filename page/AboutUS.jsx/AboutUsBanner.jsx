"use client";
import React from "react";

const AboutUsBanner = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:h-[60vh] flex items-center overflow-hidden bg-black">
      
      {/* IT Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://res.cloudinary.com/dsqstik0x/image/upload/v1772175612/rm314-adj-02_tl3h7i.jpg" 
          alt="IT Technology Background"
          className="w-full h-full object-cover animate-[zoom_25s_linear_infinite]"
        />
        {/* Added Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* LAYER: Content Area */}
      <div className="relative z-10 w-full max-w-7xl  px-16 ">
        <div className="max-w-3xl flex flex-col space-y-6 items-start">
          
          {/* Top Badge: System Status Style */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/20 border border-orange-500/50 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
            <p className="text-orange-100 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              STATUS: DIGITAL_ECOSYSTEM_ACTIVE
            </p>
          </div> 

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
            Building Smart <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-orange-400 to-orange-600">
              Business Ecosystems.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-xl max-w-xl leading-relaxed border-l-2 border-orange-600 pl-6">
            From web development and AI strategy to financial solutions, we transform complex challenges into a seamless digital reality.  
          </p>

          {/* High-Tech CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="relative px-8 py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-500 transition-all shadow-[0_0_15px_rgba(234,88,12,0.4)] overflow-hidden group">
              <span className="relative z-10 uppercase text-sm tracking-wider">Explore Services</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </button>
            
            <button className="relative px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-gray-200 transition-all overflow-hidden group">
              <span className="relative z-10 uppercase text-sm tracking-wider">Get Consultation</span>
              <div className="absolute inset-0 bg-orange-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default AboutUsBanner;