import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { FaCode, FaHeadset, FaMobileScreen, FaRocket } from "react-icons/fa6";


const SoftwareTechGrid = () => {
  const features = [
    {
      title: "Clean & Scalable Code",
      icon: <FaCode size={24} />,
      description: "Built with industry best practices ensuring your software can scale as your business grows.",
    },
    {
      title: "Enterprise-Grade Security",
      icon: <FaShieldAlt size={24} />,
      description: "Advanced encryption and security protocols to protect your sensitive business and user data.",
    },
    {
      title: "High-Performance",
      icon: <FaRocket size={24} />,
      description: "Optimized architecture for lightning-fast load times and seamless data processing.",
    },
    {
      title: "Cross-Device Sync",
      icon: <FaMobileScreen size={24} />,
      description: "Real-time synchronization across mobile, desktop, and web platforms for a unified experience.",
    },
    {
      title: "24/7 IT Support",
      icon: <FaHeadset size={24} />,
      description: "Dedicated post-launch maintenance and support to keep your applications running smoothly.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-3">
          Software Excellence
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-[#094a84] mb-4">
          Engineered for Performance & Security
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-16">
          We integrate cutting-edge technology to ensure your digital solutions are powerful, reliable, and built for the future.
        </p>

        {/* 3-2 Grid Layout matching the screenshot */}
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-left group"
            >
              <div className="w-14 h-14 rounded-lg bg-orange-50 text-[#fd741e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-[#094a84] mb-3 group-hover:text-[#fd741e] transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftwareTechGrid;