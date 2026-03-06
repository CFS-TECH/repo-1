"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, CreditCard, ShieldCheck, Rocket } from "lucide-react";

const LoanProcess = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
      title: "Online Application",
      description: "Submit your basic details and income proof in just 2 minutes.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Quick Verification",
      description: "Our experts will verify your documents instantly.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: "Loan Approval",
      description: "Get your loan approved within 24-48 hours upon document validation.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Get Your Keys",
      description: "Funds are transferred directly to the dealer—drive your car home!",
    },
  ];

  return (
    <section className="py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
          >
            Get a Vehicle Loan in <span className="text-orange-600">4 Simple Steps</span>
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
           The loan process is simplified and faster, allowing customers to avoid stress and focus on buying and driving their dream car.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-slate-50">
                0{index + 1}
              </div>

              <div className="mb-6 inline-block bg-orange-50 p-4 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(step.icon, { 
                    className: "w-8 h-8 transition-colors duration-300 group-hover:text-white text-orange-500" 
                })}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-10 bg-slate-900 rounded-3xl p-8 md:p-8 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Check Your Eligibility</h3>
            <p className="text-slate-300 mb-8 text-balance mx-auto">
               Check your loan eligibility quickly with our simple and secure online process. Get instant results, explore flexible loan options, and move one step closer to driving your dream car today.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105">
              Check Now
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default LoanProcess;