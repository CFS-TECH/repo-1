"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const blogs = [
  {
    title: "Top Digital & FinTech Trends Shaping the Future of Business in 2026",
    category: "India News",
    time: "2 Hours ago",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=500",
  },
  {
    title: "AI Innovation Transforming Modern Banking",
    category: "Tech News",
    time: "4 Hours ago",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500",
  },
  {
    title: "Digital Payments Growth in 2026",
    category: "FinTech",
    time: "6 Hours ago",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
  },
  {
    title: "Future of AI in Financial Services",
    category: "AI News",
    time: "8 Hours ago",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500",
  },
];

const BlogSection2 = () => {
  return (
    <section 

    style={{
        backgroundImage: "url('/bgC.jpg')",
      }}
      // Changed to gray-50 to match your CareerSearchPage background
      className="relative flex items-center justify-center min-h-screen p-6 md:p-16 overflow-hidden"
    >
      {/* Background Decorative Glow (Adapted for light mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* LEFT SIDE: Featured Big Card */}
        <div className="w-full md:w-3/5 relative group overflow-hidden rounded-[2rem] shadow-lg border border-gray-200 h-[450px] md:h-[550px]">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200')" }}
          ></div>
          
          {/* IMAGE SECTION  */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex flex-col justify-end p-10">
            <span className="bg-orange-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full w-fit tracking-wider uppercase mb-4 shadow-md">
              Featured Insight
            </span>
          
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-4">
              Transforming the <span className="text-orange-500">Digital Future</span>
            </h2>
            <p className="text-gray-200 max-w-lg text-lg leading-relaxed opacity-90">
              Explore how AI and FinTech are merging to create a seamless business ecosystem in 2026.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Vertical Swiper */}
        <div className="w-full md:w-2/5 flex flex-col">
          <div className="mb-8 pl-2">
            <div className="flex items-center gap-3 mb-2">
               <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
              </span>
              {/* Changed text from white to gray-900 */}
              <h3 className="text-gray-200 text-2xl font-bold tracking-tight">Latest Updates</h3>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-transparent rounded-full"></div>
          </div>
          
          <div className="h-[450px]"> 
            <Swiper
              direction={"vertical"} 
              slidesPerView={3}      
              spaceBetween={16}      
              loop={true}            
              speed={1000}           
              autoplay={{
                delay: 3500,         
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className=""
            >
              {blogs.map((blog, index) => (
                <SwiperSlide key={index} className="bg-transparent rounded-xl">
                  {/* Changed from dark glassmorphism to white card with gray borders */}
                  <div className="bg-white p-4 border border-blue-700 shadow-sm flex gap-5 items-center h-full transition-all duration-300 hover:shadow-md hover:border-[#fd741e] rounded-lg  group cursor-pointer">
                    
                    <div className="overflow-hidden rounded-xl w-28 h-24 shrink-0 border border-gray-700">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex flex-col pr-2">
                      <span className="text-[10px] font-extrabold text-orange-500 uppercase tracking-widest mb-1">
                        {blog.category}
                      </span>
                      {/* Changed title text to gray-900 */}
                      <h4 className="text-md font-bold text-[#102a43] leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {blog.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-3">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {/* Changed time text to gray-500 */}
                        <p className="text-[11px] text-gray-500 font-medium">
                          {blog.time}
                        </p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection2;