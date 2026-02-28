import React from "react";
import {
  FaRegClipboard,
  FaPenNib,
  FaCode,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const ProcessBar = () => {
  const webDevelopmentProcessData = [
    {
      title: "Requirement & Business Analysis",
      icons: <FaRegClipboard size={32} />,
      description:
        "We begin by understanding your business vision and key goals to create a strategy that aligns with your objectives.",
    },
    {
      title: "UI/UX Design & Planning",
      icons: <FaPenNib size={32} />,
      description:
        "Our design team creates modern, user-friendly layouts that reflect your brand identity and improve engagement.",
    },
    {
      title: "Development & Coding",
      icons: <FaCode size={32} />,
      description:
        "We build your website with clean, secure, and optimized code that works seamlessly on all devices.",
    },
    {
      title: "Testing & Quality Assurance",
      icons: <FaShieldAlt size={32} />,
      description:
        "Before launch, we rigorously test your site to ensure speed, responsiveness, and flawless performance.",
    },
    {
      title: "Launch & Optimization",
      icons: <FaRocket size={32} />,
      description:
        "Once launched, we continue optimizing your website to ensure it delivers measurable results.",
    },
  ];

  return (
    <div className="w-full mx-auto px-6 py-24 bg-[#f9f0eb]">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold tracking-[0.2em] text-[#fd741e] uppercase mb-4">
          How We Work
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Our Website{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd741e] to-orange-400">
            Development
          </span>{" "}
          Process
        </h3>
      </div>

      {/* Modern Staggered Timeline */}
      <div className="relative">
        {/* Central Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-[#102a43]"></div>

        <div className="space-y-12 md:space-y-0">
          {webDevelopmentProcessData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-between w-full md:mb-16 ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <div className="p-8 rounded-3xl bg-white border border-orange-300 hover:border-[#fd741e]/30 transition-all duration-500 group">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className="mb-6 p-5 rounded-2xl bg-white shadow-xl shadow-orange-100/50 text-[#fd741e] animate-bounce delay-[10000ms]"
                        style={{ animationDuration: "4s" }}
                      >
                        {item.icons}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#fd741e] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed max-w-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Point (Desktop Only) */}
                <div className="hidden md:flex items-center justify-center w-[10%] relative z-10">
                  <div className="w-4 h-4 rounded-full bg-[#fd741e] ring-8 ring-orange-50"></div>
                </div>

                {/* Empty Side for Spacing (Desktop Only) */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;
