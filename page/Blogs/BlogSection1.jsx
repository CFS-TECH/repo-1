"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  ArrowRight,
  Clock,
  Hash,
  Sparkles,
} from "lucide-react";

const BlogSection1 = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center relative overflow-hidden">
      
      <div className="w-full py-10 px-6 md:px-6 lg:px-24 bg-[#FDF0E9] relative">
        <div className="absolute top-0 right-0 w-70 h-70 bg-orange-200 rounded-full blur-[120px] opacity-30 -translate-y-1/2" />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-[0.2em] uppercase text-xs bg-orange-100 px-4 py-2 rounded-full">
              <Sparkles size={16} />
              <span>Latest Insights</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              What’s <span className="text-orange-500">New?</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fd741e" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#102a43] text-white text-sm font-bold rounded-full shadow-xl transition-all flex items-center gap-2 group"
          >
            Explore All News
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

      {/* 2. MAIN CONTENT - Full Width Split Layout */}
      <div className="w-full flex flex-col lg:flex-row min-h-[70vh]">
        
        {/* --- LEFT SIDE: IMAGE (Full Width on Mobile, 50% on Desktop) --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden group"
        >
          <img
            src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1771839859/copy_of_futurism-perspective-digital-nomads-lifestyle_se1qzg_e410f1.jpg"
            alt="Digital Banking Strategy"
            className="w-full h-150 pl-16 object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white"
        >
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-10 text-xs text-slate-500 font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100">
              <Hash size={16} /> FinTech 2026
            </span>
            <span className="flex items-center gap-2 pt-1.5">
              <Clock size={16} /> 6 Min Read
            </span>
            <span className="flex items-center gap-2 pt-1.5">
              <CalendarDays size={16} /> Feb 20, 2026
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
            IT Innovation in <br />
            <span className="text-orange-500 italic">Web Development</span>
          </h3>

          {/* Summary */}
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
            Driving scalable digital transformation and architecting modern business growth 
            strategies globally. Our expert-led research defines the next frontier of web technology.
          </p>

          {/* Read More Link */}
          <motion.div 
            initial="initial"
            whileHover="hover"
            className="flex items-center gap-6 cursor-pointer group w-fit"
          >
            <span className="text-2xl font-black text-slate-900 group-hover:text-orange-500 transition-colors">
              Start Reading
            </span>
            <motion.div
              variants={{
                initial: { x: 0, backgroundColor: "#f1f5f9", color: "#0f172a" },
                hover: { x: 15, backgroundColor: "#f97316", color: "#ffffff" },
              }}
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            >
              <ArrowRight size={28} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Sub-Ticker (Optional for Full-Width Look) */}
      <div className="w-full py-4 bg-slate-900 overflow-hidden flex whitespace-nowrap">
        <div className="flex animate-marquee gap-10">
          {[1,2,3,4,5,6].map(i => (
            <span key={i} className="text-white/20 text-xs font-black uppercase tracking-widest">
               FinTech • Innovation • Scalability • Transformation • Future •
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BlogSection1;