"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Apple,
  Smartphone,
  Layers,
  PenTool,
  ShieldCheck,
  Settings,
} from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const MobileAppDevelopment = () => {
  // --- Embedded Professional Data ---
  const mobileData = [
    {
      title: "Native iOS Development",
      desc: "High-performance, secure, and scalable applications built specifically for the Apple ecosystem using modern Swift architecture.",
      icon: <Apple size={32} strokeWidth={1.5} />,
      tags: ["Swift", "Objective-C", "iOS SDK"],
    },
    {
      title: "Native Android Development",
      desc: "Robust and versatile Android applications engineered with Kotlin to run flawlessly across a vast array of devices and screen sizes.",
      icon: <Smartphone size={32} strokeWidth={1.5} />,
      tags: ["Kotlin", "Java", "Android Studio"],
    },
    {
      title: "Cross-Platform (Hybrid)",
      desc: "Accelerate time-to-market and reduce costs with a single codebase that delivers a native-like experience on both iOS and Android.",
      icon: <Layers size={32} strokeWidth={1.5} />,
      tags: ["React Native", "Flutter", "Node.js"],
    },
    {
      title: "UI/UX App Design",
      desc: "User-centric interface designs with smooth micro-interactions that guarantee high user retention and seamless navigation.",
      icon: <PenTool size={32} strokeWidth={1.5} />,
      tags: ["Figma", "Prototyping", "Wireframing"],
    },
    {
      title: "Enterprise Mobility",
      desc: "Custom internal applications built with enterprise-grade security to streamline operations and empower your on-the-go workforce.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      tags: ["Secure API", "Cloud Sync", "Data Encryption"],
    },
    {
      title: "App Maintenance & Scaling",
      desc: "Continuous monitoring, bug fixing, and feature updates to ensure your mobile application grows alongside your business.",
      icon: <Settings size={32} strokeWidth={1.5} />,
      tags: ["Performance Optimization", "QA Testing"],
    },
  ];

  // --- Animation Variants ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-24 relative z-10 bg-[#fafafa] rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)] overflow-hidden border-t border-gray-100">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#fd741e] font-bold text-xs uppercase tracking-widest w-max mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
              Mobile Engineering
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#102a42] mb-6 leading-[1.1] tracking-tight">
              Next-Gen <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#102a42] to-[#fd741e]">
                Mobile Applications
              </span>
            </h3>
            <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
              Reach your customers wherever they are. We build intuitive,
              fast-performing, and secure mobile software that turns users into
              loyal brand advocates.
            </p>
          </div>

          <button className="hidden md:flex items-center gap-3 font-bold text-[#102a42] hover:text-[#fd741e] transition-colors border-b-2 border-transparent hover:border-[#fd741e] pb-1">
            View Case Studies <FaArrowRight />
          </button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mobileData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="group relative bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#fd741e]/10 hover:border-orange-100 transition-all duration-500 flex flex-col cursor-pointer overflow-hidden transform hover:-translate-y-2"
            >
              {/* Top Right Decorative Shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-50 to-transparent rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 ease-in-out"></div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[#fafafa] border border-gray-100 text-[#fd741e] flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#fd741e] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h4 className="text-2xl font-bold text-[#102a42] mb-4 group-hover:text-[#fd741e] transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Tech Stack Tags & Action */}
              <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-semibold rounded-md border border-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow pops in on hover */}
                <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#fd741e] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <FaArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View CTA */}
        <button className="md:hidden mt-10 w-full flex items-center justify-center gap-3 font-bold text-[#102a42] bg-white py-4 rounded-xl border border-gray-200 shadow-sm active:scale-95 transition-all">
          View Case Studies <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;
