"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaCloud,
  FaCode,
  FaDesktop,
  FaGlobe,
  FaMobileScreen,
  FaRocket,
  FaServer,
  FaUsers,
  FaWindows,
} from "react-icons/fa6";
import { FaCogs, FaShieldAlt } from "react-icons/fa";
import AppBanner from "./AppBanner";

const SoftwareServices = () => {
  // --- ANIMATION VARIANTS (For Framer Motion) ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // --- DATA MAPPING ---
  const mobileData = [
    {
      title: "iOS App Development",
      icon: <FaApple size={28} />,
      desc: "We design premium, highly secure applications specifically tailored for Apple devices. Strictly following Apple’s design guidelines for a flawless user experience.",
    },
    {
      title: "Android App Development",
      icon: <FaAndroid size={28} />,
      desc: "Versatile, scalable applications designed to run flawlessly across the massive ecosystem of Android smartphones and tablets.",
    },
    {
      title: "Cross-Platform Mobile Apps",
      icon: <FaMobileScreen size={28} />,
      desc: "Use a single codebase to run on both operating systems, reducing development time and costs without sacrificing performance.",
    },
  ];

  const desktopData = [
    {
      title: "Windows Applications",
      icon: <FaWindows size={28} />,
      desc: "Custom software for the world’s most widely used OS. Ideal for enterprise tools, POS systems, and heavy data-processing software.",
    },
    {
      title: "macOS Applications",
      icon: <FaApple size={28} />,
      desc: "Sleek, high-performing desktop software optimized for Apple’s Mac computers, integrating perfectly with the macOS environment.",
    },
    {
      title: "Cross-Platform Desktop",
      icon: <FaDesktop size={28} />,
      desc: "Versatile software that functions seamlessly on Windows, macOS, and Linux, ensuring your entire team can use the tools.",
    },
  ];

  const webData = [
    {
      title: "Progressive Web Apps (PWAs)",
      icon: <FaMobileScreen size={28} />,
      desc: "Software delivered through the web that looks and acts like a native app, complete with offline capabilities and push notifications.",
    },
    {
      title: "SaaS Platforms",
      icon: <FaCloud size={28} />,
      desc: "Cloud-based solutions allowing users to access your tools via a subscription model from any device with internet.",
    },
    {
      title: "Enterprise Web Portals",
      icon: <FaGlobe size={28} />,
      desc: "Secure, browser-based internal software built for your team to manage data, CRM, and daily workflows.",
    },
  ];

  const backendData = [
    {
      title: "Custom APIs",
      icon: <FaCode size={32} />,
      desc: "The 'bridges' allowing your mobile, desktop, and web applications to communicate securely with databases and third-party tools.",
    },
    {
      title: "Cloud Architecture",
      icon: <FaServer size={32} />,
      desc: "Secure, scalable server setups that ensure your software runs fast and your data remains protected 24/7.",
    },
  ];

  const whyChooseData = [
    {
      title: "High-Performance",
      icon: <FaRocket size={24} />,
      desc: "Engineered for speed, minimizing load times.",
    },
    {
      title: "Robust Security",
      icon: <FaShieldAlt size={24} />,
      desc: "Bank-level encryption to protect your data.",
    },
    {
      title: "Scalable Infrastructure",
      icon: <FaCogs size={24} />,
      desc: "Built to grow seamlessly alongside your business.",
    },
    {
      title: "User-Centric Design",
      icon: <FaUsers size={24} />,
      desc: "Intuitive interfaces with zero learning curve.",
    },
  ];

  return (
    <div className="font-sans bg-[#f8fafc] overflow-hidden">
      {/* ================= 1. HERO BANNER ================= */}
      <AppBanner />

      {/* ================= 2. MOBILE APP DEVELOPMENT ================= */}
   

      {/* ================= 3. DESKTOP APP DEVELOPMENT (Dark Premium Mode) ================= */}
      <section className="py-32 relative bg-[#102a42] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 text-center"
          >
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              Desktop Application Development
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
              For complex business operations, high-performance computing, or
              offline capabilities, we build powerful applications installed
              directly onto computer hardware.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {desktopData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-[#1a3e5e]/40 backdrop-blur-md p-10 rounded-3xl border border-[#1a3e5e] hover:border-[#fd741e]/50 hover:bg-[#1a3e5e]/60 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#102a42] border border-[#1a3e5e] text-[#fd741e] flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 4. WEB-BASED SOFTWARE ================= */}
      <section className="py-32 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="lg:w-1/3"
            >
              <h3 className="text-4xl md:text-5xl font-black text-[#102a42] mb-6">
                Web-Based Software
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Powerful software programs that run directly inside a web
                browser. No downloads, no installations—highly accessible from
                anywhere in the world.
              </p>
              <div className="w-20 h-1.5 bg-[#fd741e] rounded-full"></div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {webData.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${idx === 2 ? "sm:col-span-2" : ""}`}
                >
                  <div className="text-[#fd741e] mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold text-[#102a42] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 5. BACKEND & API ================= */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black text-[#102a42] mb-4">
              Backend & API Architecture
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The invisible powerhouse behind your applications, ensuring a
              strong, secure, and lightning-fast foundation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          >
            {backendData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-orange-50/50 p-10 rounded-[2.5rem] border border-orange-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-24 h-24 shrink-0 rounded-[1.5rem] bg-gradient-to-br from-[#fd741e] to-orange-400 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-2xl font-bold text-[#102a42] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 6. WHY CHOOSE US ================= */}
      <section className="py-32 bg-[#102a42] relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#fd741e]/20 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
              className="lg:w-1/3"
            >
              <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-3">
                What We Do
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
                Built for Scale & Security
              </h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                We don't just write code; we architect solutions. From the
                initial blueprint to the final deployment, our focus is on
                creating software that seamlessly integrates into your
                workflows.
              </p>
              <button className="px-8 py-4 bg-white text-[#102a42] hover:bg-[#fd741e] hover:text-white font-bold rounded-full transition-colors shadow-lg">
                Partner With Us
              </button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {whyChooseData.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-[#1a3e5e]/50 backdrop-blur-sm p-8 rounded-3xl border border-[#1a3e5e] hover:border-[#fd741e]/50 transition-all flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#102a42] text-[#fd741e] flex items-center justify-center shadow-inner">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareServices;
