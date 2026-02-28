"use client"
import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "BPO Service Updates 2026",
    category: "Support Service",
    description: "Discover how we are redefining customer support with 24/7 service excellence.",
    author: "Amit Sharma",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Feb 15, 2026",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500",
    likes: 120,
    comments: 20,
  },
  {
    id: 2,
    title: "The Future of Fintech in India",
    category: "Technology Service",
    description: "A deep dive into how blockchain are shaping the rural economy this year.",
    author: "Priya Das",
    authorImg: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Feb 20, 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500",
    likes: 89,
    comments: 7,
  },
  {
    id: 3,
    title: "Scaling Your Digital Startup",
    category: "Digital Solution",
    description: "Strategies to scale your SaaS or E-commerce business using modern cloud infrastructure.",
    author: "Rahul Varma",
    authorImg: "https://randomuser.me/api/portraits/men/85.jpg",
    date: "Feb 22, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
    likes: 256,
    comments: 42,
  },
];

const BlogSection3 = () => {
  const [activeTab, setActiveTab] = useState("All Categories");
  const [liked, setLiked] = useState({});

  const categories = ["All Categories", "Support Service", "Technology Service", "Digital Solution"];

  const filteredBlogs = activeTab === "All Categories" 
    ? blogData 
    : blogData.filter((blog) => blog.category === activeTab);

  const handleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="bg-[#ffffff] py-10 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto ">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Knowledge <span className="text-[#FF8138]">Hub</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">
            Stay ahead of the curve with our latest insights on technology, 
            finance, and digital transformation.
          </p>
        </div>

        {/* --- Filter Tabs with Bottom Line --- */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-8 border-b border-black/10 relative px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`pb-4 text-sm font-bold transition-all relative ${
                  activeTab === cat ? "text-slate-900" : "text-slate-600 hover:text-[#FF8138]"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF8138] rounded-t-full transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group flex flex-col h-full border-t-[10px] border-[#FF8138]"
            >
              {/* Image Section */}
              <div className="relative p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-inner bg-slate-100">
                  <img 
                    src={blog.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={blog.title} 
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-slate-900 hover:bg-[#FF8138] hover:text-white transition-all shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    </button>
                    <button 
                      onClick={() => handleLike(blog.id)}
                      className={`p-2.5 backdrop-blur-sm rounded-xl transition-all shadow-md ${liked[blog.id] ? "bg-[#FF8138] text-white" : "bg-white/90 text-slate-900"}`}
                    >
                      <svg className="w-5 h-5" fill={liked[blog.id] ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <img src={blog.authorImg} className="w-5 h-5 rounded-full border border-orange-200" alt="author" />
                  <span className="text-xs font-bold text-slate-500">{blog.author} • {blog.date}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-[#FF8138] transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium opacity-80 line-clamp-3">
                  {blog.description}
                </p>

                {/* Footer of Card */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button className="text-sm font-extrabold bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-[#FF8138] transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                    Read More
                  </button>
                  
                  <div className="flex gap-4 text-[11px] font-black text-slate-400">
                    <span className="flex items-center gap-1 hover:text-[#FF8138] transition-colors">
                      ❤️ {liked[blog.id] ? blog.likes + 1 : blog.likes}
                    </span>
                    <span className="flex items-center gap-1 hover:text-[#FF8138] transition-colors">
                      💬 {blog.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Load More --- */}
        <div className="mt-10 text-center">
          <button className="bg-slate-900 text-white px-4 py-2 rounded-2xl font-black text-lg hover:bg-[#FF8138] transition-all hover:-translate-y-1 shadow-2xl active:scale-60">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection3;