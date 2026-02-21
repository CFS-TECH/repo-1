"use client"
import React from "react";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚀 Message Sent! We'll get back to you soon.");
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-6xl font-black text-gray-900 tracking-tight">
            Talk to a <span className="text-[#ff6b00]">human.</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-xl">
            We don't use bots. Our team of experts is here to help you scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Info Grid (Staggered Cards) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 - White & Orange Accent */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 sm:col-span-2">
              <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="text-[#ff6b00]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Email Us</h3>
              <p className="text-gray-500 mt-2 mb-4 text-sm">Our friendly team is here to help.</p>
              <a href="mailto:hello@example.com" className="text-[#ff6b00] font-bold flex items-center gap-2 group">
                hello@example.com <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Card 2 - Brand Navy Blue */}
            <div className="bg-[#102a43] p-8 rounded-[2rem] shadow-lg text-white">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold">Call Us</h3>
              <p className="text-gray-300 mt-1 text-sm">Mon-Fri 9am-6pm</p>
              <p className="mt-4 font-mono font-bold">+91 123 456 7890</p>
            </div>

            {/* Card 3 - Brand Orange */}
            <div className="bg-[#ff6b00] p-8 rounded-[2rem] shadow-lg text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold">Office</h3>
              <p className="text-orange-100 mt-1 text-sm">Visit our studio</p>
              <p className="mt-4 text-sm leading-relaxed text-white font-medium">New Delhi, DLF Phase 3</p>
            </div>
          </div>

          {/* RIGHT SIDE: Minimalist Floating Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-[#102a43]/5 relative">
              {/* Badge */}
              <div className="absolute -top-4 right-10 bg-[#102a43] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Quick Response
              </div>

              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 bg-[#ff6b00] h-8 rounded-full"></div>
                <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Send a message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-2xl outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="rahul@company.com"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-2xl outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-2xl outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-2xl outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-1">Your Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-3xl outline-none transition-all resize-none"
                    required
                  ></textarea>
                </div>

                {/* Styled identical to your hero section buttons */}
                <button 
                  type="submit"
                  className="w-full bg-[#ff6b00] hover:bg-[#e65c00] text-white p-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                >
                  Shoot Message
                  <Send size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
            {/* Small Footer Detail */}
            <p className="text-center mt-8 text-gray-400 text-sm">
              By sending this, you agree to our <span className="text-[#ff6b00] underline cursor-pointer">Privacy Policy</span>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;