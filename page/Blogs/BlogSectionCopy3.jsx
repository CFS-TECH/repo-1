"use client";

import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
const blogData = [
  {
    id: 1,
    category: "Support Service",
    date: "Apr 1, 2025",
    readTime: "5 Min",
    title: "Support & Service Updates",
    description:
      "Stay informed with recent blogs focused on customer care and service improvements.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  },
  {
    id: 2,
    category: "Technology Service",
    date: "Apr 1, 2025",
    readTime: "4 Min",
    title: "Technology Service Updates",
    description:
      "Latest updates in technology and digital solutions to improve your workflow.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
  },
  {
    id: 3,
    category: "Digital Solution",
    date: "Apr 1, 2025",
    readTime: "6 Min",
    title: "Digital Growth Insights",
    description:
      "Explore strategies and insights to boost your digital presence effectively.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  },
  {
    id: 4,
    category: "Support Service",
    date: "Apr 1, 2025",
    readTime: "5 Min",
    title: "Customer Support Trends",
    description:
      "Discover the latest customer service trends shaping the future of business.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: 5,
    category: "Technology Service",
    date: "Apr 1, 2025",
    readTime: "5 Min",
    title: "Tech Innovations 2025",
    description:
      "Understand the major tech innovations that will dominate 2025.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  },
  {
    id: 6,
    category: "Digital Solution",
    date: "Apr 1, 2025",
    readTime: "7 Min",
    title: "Smart Digital Marketing",
    description:
      "Smart marketing techniques to scale your digital business faster.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
  },
];

const categories = [
  "All Categories",
  "Support Service",
  "Technology Service",
  "Digital Solution",
];

const BlogSection4 = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredBlogs =
    activeCategory === "All Categories"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <section className="bg-[#ffffff] py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore Our Blogs
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl">
          Read informative articles, trend analysis, and expert perspectives
          all in one place.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-orange-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {filteredBlogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-xs gap-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {blog.date}
                  </div>
                  <span>{blog.readTime}</span>
                </div>

                <h3 className="mt-3 font-semibold text-lg text-gray-900">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {blog.description}
                </p>

                <button className="mt-4 bg-[#243b55] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1a2a3c] transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredBlogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="bg-[#243b55] text-white px-6 py-2 rounded-md hover:bg-[#1a2a3c] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection4;