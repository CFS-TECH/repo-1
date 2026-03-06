"use client";
import React from "react";
import { motion } from "framer-motion";
// Fixed: Added 'Percent' and removed the non-existent 'FaPercent'
import { Car, Zap, Banknote, CalendarDays, Percent } from "lucide-react"; 
const VehicleLoanBanner = () => {
  const bgImageUrl = "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=2000&auto=format&fit=crop";
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: delay, ease: "easeOut" },
    }),
  };
  return (
    <section className="relative w-full h-[50vh] flex items-center overflow-hidden">
      {/* 1. Background Image */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />

      {/* 2. Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
      <div className="absolute inset-0 z-10 bg-slate-950/30 backdrop-brightness-90" />

      {/* 3. Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">   
          {/* Left Side */}
          <div className="max-w-xl flex-shrink-0">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-10 h-[2px] bg-orange-500 rounded-full" />
              <span className="text-orange-500 text-xs md:text-sm font-bold uppercase tracking-[3px]">
                Drive Your Dream Today
              </span>
            </motion.div>

            <motion.h1 
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-4xl font-black text-white leading-tight mb-5 tracking-tighter"
            >
              Easy & Affordable 
              <span className="text-orange-500 underline decoration-orange-500/30 underline-offset-8"> Vehicle Loans
                 
              </span>
            </motion.h1>

            <motion.p 
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-slate-300 mt-2 text-l md:text-l leading-relaxed  mb-5"
            >
            Get flexible financing options for new and pre-owned vehicles. Pocket-friendly EMIs, minimal documentation, and quick approvals.
            </motion.p>

            <motion.div 
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-6 flex flex-wrap items-center gap-6"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgb(234 88 12 / 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-600 hover:bg-orange-700 text-white px-4
                 py-2 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-900/20 transition-all flex items-center gap-3"
              >
                <Car className="w-5 h-5" />
                Apply for Loan
              </motion.button>
              <button className="text-white hover:text-orange-400 font-semibold text-sm flex items-center gap-2 group transition-colors">
                Check Eligibility
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleLoanBanner;