"use client";
import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  ChevronLeft, 
  CheckCircle2, 
  Share2 
} from "lucide-react";

const CareerDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Back Navigation */}
        <Link 
          href="/careers" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to all jobs
        </Link>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Main Job Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Header Card */}
            <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Senior Software Engineer
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <Briefcase className="w-4 h-4 text-orange-500" />
                  Engineering
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  Remote (India)
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <Clock className="w-4 h-4 text-orange-500" />
                  Full-Time
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <DollarSign className="w-4 h-4 text-orange-500" />
                  Competitive
                </span>
              </div>
            </article>

            {/* Description Details Card */}
            <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-8">
              
              {/* About Role */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Role</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are looking for a highly skilled Senior Software Engineer to join our core product team. 
                  In this role, you will be responsible for designing, developing, and deploying scalable FinTech 
                  solutions that impact millions of users. You'll work closely with product managers, designers, 
                  and other engineers to build intuitive and robust applications.
                </p>
              </section>

              {/* Responsibilities */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {[
                    "Architect and build highly scalable backend microservices.",
                    "Collaborate with frontend teams to integrate APIs seamlessly.",
                    "Mentor junior developers and participate in code reviews.",
                    "Optimize applications for maximum speed and scalability.",
                    "Implement security and data protection best practices."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">What We Are Looking For</h2>
                <ul className="space-y-3">
                  {[
                    "5+ years of experience in software development (React, Node.js).",
                    "Strong understanding of cloud platforms (AWS, Azure, or GCP).",
                    "Experience with SQL and NoSQL databases.",
                    "Excellent problem-solving and communication skills.",
                    "Degree in Computer Science or related field (or equivalent experience)."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-2"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </article>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-8 space-y-6 mt-8 lg:mt-0">
            
            {/* Apply Action Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-500/20 mb-4">
                Apply for this Position
              </button>
              
              <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Posted 2 days ago
                </span>
                <button className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
              <h3 className="font-bold text-gray-900 mb-2">About Crossover FinTech</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We are on a mission to revolutionize digital payments and AI-driven banking solutions for the next generation of businesses.
              </p>
              <Link href="/about" className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2">
                Learn more about us
              </Link>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default CareerDetails;