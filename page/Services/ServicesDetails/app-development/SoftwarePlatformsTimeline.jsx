import React from "react";
import { FaApple, FaAndroid, FaDesktop, FaCloud } from "react-icons/fa6";

const SoftwarePlatformsTimeline = () => {
  const platformsData = [
    {
      title: "iOS Application Development",
      icon: <FaApple size={20} />,
      description:
        "We build native, high-performance applications tailored for the Apple ecosystem. Our iOS solutions ensure a flawless, secure, and intuitive user experience on iPhones and iPads.",
    },
    {
      title: "Android App Development",
      icon: <FaAndroid size={20} />,
      description:
        "Reach a massive global audience with scalable and secure Android applications. We design apps that perform beautifully across all Android devices and screen sizes.",
    },
    {
      title: "Desktop Software Solutions",
      icon: <FaDesktop size={20} />,
      description:
        "Empower your business with robust desktop applications for Windows, macOS, and Linux. We build tools that streamline complex enterprise workflows without relying on a browser.",
    },
    {
      title: "Cloud & Web Applications",
      icon: <FaCloud size={20} />,
      description:
        "Deploy powerful SaaS platforms and enterprise portals. Our cloud-based web apps provide accessibility from anywhere, backed by secure and scalable server architecture.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Main Vertical Line */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gray-200"></div>

          <div className="space-y-12">
            {platformsData.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8 group">
                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center text-[#fd741e] group-hover:border-[#fd741e] group-hover:bg-orange-50 transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>

                {/* Content Card */}
                <div className="bg-white w-full p-8 rounded-2xl shadow-[0_2px_15px_rgb(0,0,0,0.04)] border border-gray-100 group-hover:shadow-md transition-shadow">
                  {/* Faint Background Number matching your screenshot style */}
                  <span className="absolute right-8 top-6 text-6xl font-black text-gray-50 pointer-events-none">
                    0{idx + 1}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-[#094a84] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base pr-8">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwarePlatformsTimeline;
