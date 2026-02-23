"use client";
import React from "react";
const ContactBanner = () => {
  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('\contact2.jpg')",
      }}
    >
    
      <div className="absolute inset-0 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600/40 opacity-80"></div>

      <div className="relative text-center text-white px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
          Contact Us
        </h1>
      
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p className="text-sm md:text-base opacity-90 font-medium italic">
          Any question or remarks? Just write us a message!
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;