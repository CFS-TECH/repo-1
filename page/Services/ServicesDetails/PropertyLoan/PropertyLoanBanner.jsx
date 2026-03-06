"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, BarChart3, Globe, Landmark, ArrowUpRight, CheckCircle2 } from "lucide-react";

const PropertyLoanBanner = () => {
  // Professional office/meeting background
  const bgImageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full h-[50vh] flex items-center overflow-hidden bg-slate-900 text-white">
      
      {/* Background Image with subtle overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      />
      
      {/* Gradient Overlays for a 'Power' look */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
        >
          
          {/* Text Content (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest">
                Scale Your Enterprise
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl md:text-4xl font-black mb-6 tracking-tight leading-none">
              Fuel Your 
              <span className="text-orange-500 italic"> Business Growth</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-slate-400 text-l md:text-l max-w-xl mb-6 leading-relaxed">
              Customized financial solutions for SMEs and Corporates. Get the capital you need to expand operations, buy equipment, or boost inventory.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <button className="bg-white hover:bg-amber-600 text-slate-950 px-3
               py-2 rounded-full font-black flex items-center gap-2 transition-all shadow-xl shadow-amber-500/20 active:scale-95">Apply Today <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="border border-slate-700 hover:bg-slate-800 text-white px-8  rounded-full font-bold transition-all">
                Talk to Expert
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyLoanBanner;