"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Briefcase, Calendar, Banknote } from "lucide-react";

const  PropertySection = () => {
  // Image showing a happy family or a professional at their new property
  const imageUrl = "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop";

  const criteria = [
    { icon: <Users />, title: "Nationality", desc: "Resident Indian, Non-Resident Indian (NRI), or PIO." },
    { icon: <Calendar />, title: "Age Limit", desc: "Min 21 years at application, Max 70 years at maturity." },
    { icon: <Briefcase />, title: "Employment", desc: "Salaried (min 2 yrs experience) or Self-Employed (min 3 yrs)." },
    { icon: <Banknote />, title: "Min Income", desc: "Monthly income starting from ₹25,000 (varies by city)." },
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* LEFT SIDE: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Background Accent Square */}
            <div className="absolute -top-6 -left-6 w-25 h-25 bg-orange-100 rounded-3xl -z-10" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={imageUrl} 
                alt="Eligibility Criteria" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-orange-600 font-black text-2xl">98%</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Success Rate</p>
              </div>
            </div>

            {/* Bottom Accent Circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-30 bg-slate-100 rounded-full -z-10 opacity-50" />
          </motion.div>

          {/* RIGHT SIDE: Content & Criteria List */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-10">
              <h2 className="text-4xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                Are You <span className="text-orange-600 font-serif italic">Eligible</span> for a Property Loan?
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Review our basic requirements to see if you qualify for a loan today. Our experts can help find the right solution for you.

              </p>
            </div>

            {/* Criteria Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {criteria.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-50 text-orange-600 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed pl-12 border-l border-slate-100">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Check Button */}
            <div className="mt-12 flex items-center gap-6">
              <button className="bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Check Eligibility Now
              </button>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <CheckCircle size={18} />
                Instant Response
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PropertySection;