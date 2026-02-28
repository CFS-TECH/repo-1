"use client";
import React from "react";
import { User, BadgeCheck, ShieldCheck, Users } from "lucide-react";

const ConsultingSection = () => {
  return (
    <section className="w-full bg-[#f4e3d7] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2b46] mb-4">
              About Our Company
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We provide integrated IT services, financial solutions, and business support systems that help organizations grow efficiently and scale with confidence. By combining modern technology with smart financial planning, we streamline operations, reduce costs, and improve overall performance.<br/><br/>

              <p>Our approach blends innovation, strategy, and expertise to deliver practical and sustainable solutions. We understand each client’s goals and create customized strategies that drive measurable growth, boost productivity, and ensure long-term success.</p>
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
              Read More
            </button>
          </div>

          {/* Right Image with Animation and Styling */}
          <div className="overflow-hidden rounded-xl shadow-lg border-4 border-white transition-all duration-300 ease-in-out hover:shadow-2xl">
            <img
              src="/AboutUs.jpg"
              alt="Consulting"
              className="w-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* ================= FEATURE STRIP WITH GRADIANT AND ANIMATION ================= */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-[#17466f] to-[#0f2b46] py-12 mb-16 shadow-inner">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-10 text-center text-white">
            <FeatureBox
              icon={<User size={36} />}
              title="Skilled Professionals"
              text="Expert team delivering quality results."
            />

            <FeatureBox
              icon={<BadgeCheck size={36} />}
              title="Best Price Promise"
              text="Premium quality services at fair pricing."
            />

            <FeatureBox
              icon={<ShieldCheck size={36} />}
              title="Assured Quality"
              text="Strict standards ensuring consistent excellence."
            />

            <FeatureBox
              icon={<Users size={36} />}
              title="Trusted Services"
              text="Reliable solutions built on transparency."
            />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2b46] mb-6 leading-tight">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">
             We are a forward-thinking company dedicated to delivering integrated IT services, financial solutions, and business support systems that help organizations grow with confidence. Our team combines technical expertise with strategic insight to create solutions that improve efficiency, enhance performance, and support long-term success.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-base">By understanding the unique challenges of each client, we design customized strategies that align with their business goals and ensure sustainable growth in an ever-evolving digital landscape.</p><br/>

            <button className="bg-[#ff7b2e] hover:bg-[#e66a22] text-white font-bold px-8 py-3 rounded-md transition shadow-lg">
              Read More
            </button>
          </div>

          {/* Styled Image 1: Large Rounded Corners */}
          <div className="order-1 md:order-2 relative">
            <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl shadow-2xl">
              <img
                src="/AboutUs2.jpg" 
                alt="Consulting Team"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>


        {/* ================= BOTTOM SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Styled Image 2: Image-in-Image Effect */}
          <div className="relative group">
            {/* Main Image */}
            <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl shadow-xl border-4 border-white">
              <img
                src="/business-team.jpg"
                alt="Business Strategy"
                className="w-full h-[350px] object-cover"
              />
            </div>
            {/* Floating Inset Image (Bottom Right) */}
            <div className="absolute -bottom-6 -right-4 w-48 h-32 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
               <img
                src="/finance-chart.jpg"
                alt="Data Analysis"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0f2b46] mb-2 leading-tight">
              We’re knowledgeable about making your benefits higher
            </h3>
            <div className="w-20 h-1 bg-[#ff7b2e] mb-6"></div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We plainly comprehend that you need not to lose, but rather to gain more cash over your time of work with us. That is the reason we dismiss all high-chance undertakings.
            </p>
            <button className="bg-[#ff7b2e] hover:bg-[#e66a22] text-white font-bold px-8 py-3 rounded-full transition shadow-md">
              Learn more about us
            </button>
          </div>

        </div>
      </div>



    </section>
  );
};

/* ================= Feature Box Component ================= */

const FeatureBox = ({ icon, title, text }) => {
  return (
    <div className="px-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white/10 p-4 rounded-xl">
      <div className="flex justify-center mb-4 text-orange-400">
        <span className="p-3 bg-white/10 rounded-full">{icon}</span>
      </div>
      <h4 className="font-semibold mb-2 text-xl">{title}</h4>
      <p className="text-base text-gray-300 leading-normal">{text}</p>
    </div>
  );
};

export default ConsultingSection;

// test merg 01
