"use client";
import { JobCard, } from "@/components/Cards/Cards";
import { Briefcase, Clock, Laptop, TrendingUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  IoMdArrowDropright,
  IoMdArrowForward,
  IoMdSearch,
} from "react-icons/io";

const CareerSearchPage = async ({ slug }) => {
  return (
    <div className="w-full pt-8">
      <section className="flex items-start flex-col space-y-5 max-w-3xl mx-auto">
        {/* Search Section  */}
        <section className="w-full">
          <section className="flex h-12 w-full max-w-full items-center overflow-hidden rounded-lg border border-gray-300 bg-white px-4 shadow-sm transition-all focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
            <section>
              <IoMdSearch />
            </section>
            <input
              value={slug}
              type="text"
              className=" h-full w-full bg-transparent px-3 text-gray-700 outline-none placeholder:text-gray-400"
              placeholder="Search..."
            />
            <section className="w-16 flex rounded-full p-1 group items-center justify-center h-8 bg-orange-500 duration-300 transition-all ease-in-out cursor-pointer hover:scale-105 shadow text-white">
              <IoMdArrowForward className="w-full h-full group-hover:scale-150 duration-300 transition-all ease-in-out  " />
            </section>
          </section>
        </section>
        <section className="flex items-start flex-col space-y-3 w-full ">
         <JobCard/>
        </section>
      </section>
    </div>
  );
};

export default CareerSearchPage;




