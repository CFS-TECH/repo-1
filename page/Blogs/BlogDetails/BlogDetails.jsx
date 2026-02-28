"use client";
import React from "react";
import { CalendarDays, Eye, MessageSquare, ChevronRight, Share2 } from "lucide-react";

const BlogDetails = ({ slug }) => {
  const formattedSlug = slug?.replace(/-/g, " ").toUpperCase() || "TECH";

  const suggestions = [
    {
      title: "IT Consultancy",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400",
      icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
      points: ["Website Development", "Web Application Development", "Custom Software Solutions", "API Development & Integration"]
    },
    {
      title: "Capital Solutions",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400",
      icon: "https://cdn-icons-png.flaticon.com/512/2454/2454282.png",
      points: ["Personal Loans", "Business Loans", "Home Loans", "Car Loans"]
    },
    {
      title: "Customer Operations",
      image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d26e?auto=format&fit=crop&w=400",
      icon: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
      points: ["Back Office", "Customer Support", "Data Management", "Sales & Lead Operations"]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. MAIN BLOG SECTION */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="w-full bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="flex justify-center mb-6">
            <span className="bg-orange-100 text-orange-600 px-10 py-1.5 rounded-full text-xs font-bold tracking-wide">
              Web Development {formattedSlug}
            </span>
          </div>

          <h1 className="text-3xl md:text-3xl font-extrabold text-center text-gray-900 mb-4 leading-tight">
            The Next Generation of Development
          </h1>

          <p className="text-gray-500 text-center mb-6">
            The next generation of development leverages AI, cloud, and automation <br className="hidden md:block" /> 
            to build scalable, secure digital solutions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between mt-3 border-t border-b border-gray-200 py-4 mb-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dsqstik0x/image/upload/v1772024867/498e9577-c9ff-43f1-adf3-a08cadc40390_afutfj.jpg" 
                  alt="Jiya Pandey"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-gray-900 leading-none">Jiya Pandey</p>
                <p className="text-sm text-gray-500 mt-1 italic">Senior Technical Writer</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer"><CalendarDays size={18} /> Feb 4, 2026</div>
              <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer"><Eye size={18} /> 1.2k views</div>
              <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer"><MessageSquare size={18} /> 32 Comments</div>
            </div>
          </div>

          <div className="w-full mb-10 overflow-hidden rounded-2xl group">
            <img
              src="https://res.cloudinary.com/dsqstik0x/image/upload/v1771826557/hands-typing-laptop-with-glowing-email-icons-floating-online-messages-cascading-from-screen_1175634-7911_qx0n0m.jpg" 
              alt="Development"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <article className="prose prose-indigo max-w-none text-gray-700 text-lg leading-8">
            <p className="mb-6">Technology is evolving faster than ever, and the next generation of development is transforming how businesses build, deploy, and scale digital solutions. Modern development is no longer just about writing code — it’s about creating intelligent, scalable, and user-centric systems powered by innovation.</p>
            <h2 className="text-2xl font-bold text-black">1. AI-Driven Development</h2>
            <p>Artificial Intelligence is redefining the development process. From smart code suggestions to automated testing, AI tools help developers write cleaner code, reduce errors, and improve productivity. Machine learning models are now integrated directly into applications, enabling personalization, predictive analytics, and smarter user experiences.</p><br></br>
            <h2 className="text-2xl font-bold text-black">2. Cloud-Native Architecture</h2>
            <p>Cloud computing has become the backbone of modern development. Platforms like Amazon Web Services, Microsoft Azure, and Google Cloud allow businesses to deploy scalable applications without heavy infrastructure costs. Microservices and containerization technologies such as Docker and Kubernetes make systems flexible and easier to manage.</p>
            <h2 className="text-2xl text-black font-bold">Conclusion</h2>
            <p>The next generation of development is intelligent, automated, and deeply integrated with cloud and AI technologies. Businesses that embrace these innovations will gain agility, scalability, and a competitive edge in the digital era. The future of development is not just about building software—it’s about building smarter, faster, and more secure digital ecosystems.</p>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
            <button className="flex items-center gap-2 text-gray-500 hover:text-orange-600 font-semibold transition-all hover:scale-105 transform active:scale-95">
              <Share2 size={20} /> Share Post
            </button>
            <div className="flex gap-2">
              {["React", "NextJS", "Tailwind"].map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs hover:bg-orange-600 hover:text-white transition-all cursor-pointer">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED SUGGESTION SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1a2e44] mb-2">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Empowering clients with smart and secure financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suggestions.map((item, index) => (
            <div key={index} 
                 className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Floating Icon with Animation */}
                <div className="absolute -bottom-6 right-6 bg-white p-2 rounded-lg shadow-lg w-16 h-16 flex items-center justify-center border border-gray-50 transition-all duration-500 group-hover:animate-bounce">
                   <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" />
                </div>
              </div>

              <div className="p-8 pt-10 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{item.title}</h3>
                <ul className="space-y-2 mb-8">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-orange-500 font-bold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-1 text-sm font-bold text-gray-900 hover:text-orange-600 transition-all group/btn">
                  View More 
                  <ChevronRight size={18} className="text-orange-500 font-bold transition-transform group-hover/btn:translate-x-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;