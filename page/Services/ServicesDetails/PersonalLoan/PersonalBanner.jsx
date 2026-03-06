"use client";
import React from "react";
import { motion } from "framer-motion";

const PersonalBanner = () => {
  const bgImageUrl = "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2000&auto=format&fit=crop";
  return (
    <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden bg-slate-900">
      
      {/* 1. Background Image with Zoom Animation */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />
      
      {/* 2. Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* 3. Content Container */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center text-white">
        
        {/* Label Animation (Fade in from top) */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-orange-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-3"
        >
          Quick & Easy Process
        </motion.p>

        {/* Heading Animation (Fade in from bottom) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
        >
          Personal Loans Up To <br />
          <span className="text-orange-500">₹25 Lakhs</span>
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-200 text-sm md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Fulfil your dreams instantly. Get attractive interest rates starting from 10.49%* p.a. with minimal documentation.
        </motion.p>

        {/* Button Animation (Pop in + Hover effect) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
        >
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-orange-600/20 active:scale-95">
            Check Eligibility Now
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default PersonalBanner;