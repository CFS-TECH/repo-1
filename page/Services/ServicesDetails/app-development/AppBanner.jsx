import React from "react";
import { motion } from "framer-motion";

const AppBanner = () => {
  return (
    <div>
      {/* ================= 1. HERO BANNER ================= */}
      <section className="relative pt-[160px] pb-32 overflow-hidden flex items-center justify-center max-h-[80vh]">
        {/* Animated Background Blobs for Premium Feel */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            // variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeInUp}
              className="px-5 py-2 rounded-full bg-white border border-orange-100 text-[#fd741e] font-bold tracking-widest uppercase text-xs mb-6 shadow-sm inline-flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
              Comprehensive Software Solutions
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-black text-[#102a42] leading-tight mb-8"
            >
              Engineering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#102a42] to-[#fd741e]">
                High-Performance
              </span>
              <br className="hidden md:block" /> Software
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Tailored to your operational needs and target audience. Whether
              your users are at their desks or on the go, we build robust,
              scalable, and secure applications across all major platforms.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeInUp}
              className="flex items-center gap-3 px-6 py-3 text-xs bg-gradient-to-r from-[#fd741e] to-orange-500 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(253,116,30,0.3)] hover:shadow-[0_15px_40px_rgba(253,116,30,0.4)] transition-all"
            >
              Consult Our Experts <FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppBanner;
