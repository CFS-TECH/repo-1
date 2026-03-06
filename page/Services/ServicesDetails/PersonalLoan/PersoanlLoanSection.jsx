"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Clock, ShieldCheck, Percent, ArrowRight } from "lucide-react";

const PersonalloanSection = () => {
  const features = [
    {
      icon: <Percent className="w-6 h-6" />,
      title: "Lowest Interest Rates",
      desc: "Rates starting from 10.5% tailored to your profile.",
      color: "bg-blue-500",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Digital KYC",
      desc: "No physical paperwork. 100% paperless approval.",
      color: "bg-orange-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-Hour Disbursal",
      desc: "Money in your account before you know it.",
      color: "bg-green-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "No Hidden Costs",
      desc: "Full transparency on processing fees & charges.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="py-10 bg-[#f9f0eb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Text & Stats */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-orange-200 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                Seamless Experience
              </span>
              <h2 className="text-5xl md:text-4xl font-black text-slate-900 mt-3 mb-3 leading-tight">
                Unlock Financial Freedom <br /> 
                <span className="text-orange-500">In Just 3 Steps.</span>
              </h2>
              <p className="text-black text-lg mb-4 leading-relaxed">
                We've simplified the borrowing process. Whether it's a medical emergency, 
                dream wedding, or home renovation—we’ve got your back.
              </p>

              {/* Mini List */}
              <div className="space-y-4 mb-10">
                {["Minimal Documentation", "Flexible Repayment Tenure", "Direct Bank Transfer"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-orange-500 w-5 h-5" />
                    {item}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 bg-slate-900 text-white  px-4 py-2 rounded-xl font-bold hover:bg-orange-600 transition-all group">
                Get Your Offer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Animated Cards Grid */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-60 -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm"
                >
                  <div className={`${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -bottom-6 -right-6 bg-white shadow-2xl p-4 rounded-2xl flex items-center gap-4 border border-slate-50 hidden md:flex"
            >
              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle2 className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Trusted By</p>
                <p className="text-sm font-black text-slate-900">10k+ Customers</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalloanSection;