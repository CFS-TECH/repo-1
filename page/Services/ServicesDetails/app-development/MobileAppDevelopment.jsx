import React from "react";

const MobileAppDevelopment = () => {
  return <div>
       <section className="py-24 relative z-10 bg-white rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-black text-[#102a42] mb-4">
              Mobile Application Development
            </h3>
            <p className="text-gray-500 max-w-2xl text-lg">
              Reach your customers wherever they are with intuitive,
              fast-performing mobile software for smartphones and tablets.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {mobileData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(16,42,66,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 text-[#fd741e] flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#fd741e] group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-[#102a42] mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  </div>;
};

export default MobileAppDevelopment;
