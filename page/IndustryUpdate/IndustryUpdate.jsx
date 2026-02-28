"use client";
import React, { useState } from "react";
import { ArrowUpRight, Search, BookOpen, Clock, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const IndustryUpdatesLight = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Fintech", "Digital Marketing", "Web Dev", "SEO"];

  const updates = [
    {
      id: 1,
      category: "Fintech",
      date: "Feb 28, 2026",
      readTime: "5 min",
      title: "RBI Announces New Guidelines for Digital Lending Startups",
      description:
        "Understand how the latest regulatory changes impact unsecured business loans and the fintech ecosystem in India.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
      featured: true,
    },
    {
      id: 2,
      category: "Digital Marketing",
      date: "Feb 25, 2026",
      readTime: "3 min",
      title: "Google's Latest Algorithm Update: What SEO Agencies Need to Know",
      description:
        "A complete breakdown of the recent search ranking shifts and how to adjust your on-page strategies.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 3,
      category: "Web Dev",
      date: "Feb 22, 2026",
      readTime: "4 min",
      title: "Why MERN Stack Remains the Top Choice for Enterprise SaaS",
      description:
        "Exploring the scalability, performance, and community support that keeps MongoDB, Express, React, and Node at the top.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 4,
      category: "Fintech",
      date: "Feb 18, 2026",
      readTime: "6 min",
      title: "The Rise of Revenue-Based Financing for SMEs",
      description:
        "How small businesses are leveraging their future cash flows to secure immediate capital without giving up equity.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
    {
      id: 5,
      category: "SEO",
      date: "Feb 15, 2026",
      readTime: "7 min",
      title: "Mastering Core Web Vitals for Better Search Rankings",
      description:
        "A technical deep dive into optimizing your React applications to pass Google's strict performance metrics.",
      image:
        "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
      featured: false,
    },
  ];

  const filteredUpdates = updates.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost =
    filteredUpdates.find((item) => item.featured) || filteredUpdates[0];
  const regularPosts = filteredUpdates.filter(
    (item) => item.id !== featuredPost?.id,
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-24 selection:bg-orange-200 selection:text-orange-900">
      {/* ================= LIGHT HERO TYPOGRAPHY ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 text-orange-500 font-bold tracking-wide text-sm uppercase mb-4">
            <Hash size={16} />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6 text-slate-900">
            Insights that drive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              business growth.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Discover the latest trends in development, marketing, and finance.
            Curated updates for modern digital agencies.
          </p>
        </motion.div>
      </div>

      {/* ================= FLOATING CONTROL BAR ================= */}
      <div className="sticky  z-0 max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl md:rounded-full shadow-lg shadow-slate-200/40"
        >
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="light-active-pill"
                    className="absolute inset-0 bg-orange-100 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-slate-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-full py-2.5 pl-11 pr-4 outline-none focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium"
            />
          </div>
        </motion.div>
      </div>

      {/* ================= BENTO GRID LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatePresence mode="wait">
          {filteredUpdates.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* LARGE FEATURED CARD (Spans 8 columns on Desktop) */}
              {featuredPost && (
                <div className="lg:col-span-8 group relative bg-white rounded-[2rem] p-4 md:p-6 border border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col cursor-pointer overflow-hidden">
                  <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative mb-6">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold mb-3">
                      <span>{featuredPost.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="flex items-center gap-1.5 text-orange-500">
                        <Clock size={16} /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {featuredPost.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                      Read Full Article
                      <ArrowUpRight
                        size={20}
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* SIDEBAR CARDS (Spans 4 columns on Desktop) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {regularPosts.slice(0, 2).map((post) => (
                  <div
                    key={post.id}
                    className="group bg-white rounded-[2rem] p-5 border border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col h-full cursor-pointer"
                  >
                    <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between text-sm text-slate-500 font-medium pt-4 border-t border-slate-100">
                        <span>{post.date}</span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                          <ArrowUpRight
                            size={16}
                            className="text-slate-400 group-hover:text-orange-600"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* LIST VIEW FOR REMAINING POSTS */}
              {regularPosts.length > 2 && (
                <div className="col-span-1 lg:col-span-12 mt-8">
                  <div className="flex items-center gap-2 mb-6 px-2">
                    <BookOpen size={20} className="text-slate-400" />
                    <h3 className="text-xl font-bold text-slate-900">
                      More Updates
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {regularPosts.slice(2).map((post) => (
                      <div
                        key={post.id}
                        className="group flex items-center gap-5 p-4 bg-white rounded-2xl border border-slate-200 hover:border-orange-200 transition-colors cursor-pointer shadow-sm hover:shadow-md"
                      >
                        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-orange-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                            {post.category}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <span className="text-xs text-slate-500 font-medium">
                            {post.date} • {post.readTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* EMPTY STATE */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full py-32 flex flex-col items-center justify-center text-center bg-white rounded-[2rem] border border-slate-200 border-dashed"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                <Search size={28} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                No articles found
              </h3>
              <p className="text-slate-500 font-medium">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 px-6 py-2 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IndustryUpdatesLight;
