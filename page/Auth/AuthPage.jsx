"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  User,
  Mail,
  AtSign,
  ArrowRight,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // 1: Details, 2: OTP
  const [loading, setLoading] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <section className="fixed top-0 right-0 w-full h-screen z-[100]">
      <section className="min-h-full  bg-[#fafafa] flex items-center justify-center p-6 relative overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#094a84]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#fd741e]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(9,74,132,0.1)] border border-gray-100 overflow-hidden z-10"
        >
          {/* Top Toggle Section */}
          <div className="flex p-2 bg-gray-50 m-6 rounded-2xl border border-gray-100">
            <button
              onClick={() => {
                setIsLogin(true);
                setStep(1);
              }}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${isLogin ? "bg-white text-[#094a84] shadow-sm" : "text-gray-400"}`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setIsLogin(false);
                setStep(1);
              }}
              className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${!isLogin ? "bg-white text-[#094a84] shadow-sm" : "text-gray-400"}`}
            >
              Sign Up
            </button>
          </div>

          <div className="px-8 pb-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-[#094a84] mb-2">
                {step === 1
                  ? isLogin
                    ? "Welcome Back!"
                    : "Create Account"
                  : "Verify OTP"}
              </h2>
              <p className="text-gray-400 text-sm">
                {step === 1
                  ? "Experience secure password-less access"
                  : "Enter the 6-digit code sent to your mobile"}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="details"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleSendOTP}
                  className="space-y-4"
                >
                  {!isLogin && (
                    <>
                      <div className="relative">
                        <User
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                          size={18}
                        />
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-[#094a84] focus:bg-white outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="relative">
                        <AtSign
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                          size={18}
                        />
                        <input
                          type="text"
                          placeholder="Username"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-[#094a84] focus:bg-white outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="relative">
                        <Mail
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                          size={18}
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-[#094a84] focus:bg-white outline-none transition-all text-sm"
                        />
                      </div>
                    </>
                  )}
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
                      size={18}
                    />
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      required
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent rounded-2xl focus:border-[#094a84] focus:bg-white outline-none transition-all text-sm"
                    />
                  </div>

                  <button
                    disabled={loading}
                    className="w-full py-4 bg-[#094a84] text-white font-bold rounded-2xl hover:bg-[#073a66] transition-all shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Send OTP"}{" "}
                    <ArrowRight size={18} />
                  </button>
                </motion.form>
              ) : (
                <motion.form
                  key="otp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength="1"
                        className="w-12 h-14 text-center text-xl font-bold bg-gray-50 border border-transparent rounded-xl focus:border-[#fd741e] focus:bg-white outline-none transition-all shadow-inner"
                      />
                    ))}
                  </div>

                  <button className="w-full py-4 bg-[#fd741e] text-white font-bold rounded-2xl hover:bg-[#e06314] transition-all shadow-lg shadow-orange-900/10 flex items-center justify-center gap-2">
                    Verify & {isLogin ? "Login" : "Register"}{" "}
                    <ShieldCheck size={18} />
                  </button>

                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm font-bold text-gray-400 hover:text-[#094a84] transition-colors"
                    >
                      Change Number?
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Trust Badge */}
            <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-center gap-6 opacity-40 grayscale">
              <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                <Smartphone size={14} /> SMS Secured
              </div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                <ShieldCheck size={14} /> ISO 27001
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default AuthPage;
