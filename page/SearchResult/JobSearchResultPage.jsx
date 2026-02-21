import Link from 'next/link';
import { MapPin, Briefcase, DollarSign, ArrowLeft, Building, Clock } from 'lucide-react';
import { IoMdArrowForward } from 'react-icons/io';

export default function JobCardUI() {
  const jobData = {
    title: 'Senior Frontend Engineer',
    company: 'CrossOver FinTech',
    location: 'Remote',
    salary: '$120k - $150k',
    type: 'Full-time',
    postedAt: '2 days ago',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Navigation */}
        <Link href="/careers" className="inline-flex items-center gap-2 text-[#102a43] hover:text-[#fd741e] font-bold mb-6 transition-colors duration-300">
          <ArrowLeft size={20} /> Back to Search Results
        </Link>

        {/* Job Card Container - 'group' yahan parent par lagaya hai */}
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 p-8 mb-6 transition-all duration-300 cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left Section: Job Info */}
            <div>
              {/* Title hover hone par orange ho jayega */}
              <h1 className="text-3xl font-bold text-[#102a42] mb-3 group-hover:text-[#fd741e] transition-colors duration-300">
                {jobData.title}
              </h1>
              <div className="flex items-center gap-2 text-xl text-[#102a43] font-semibold mb-6">
                <Building size={24} className="text-[#fd741e]" />
                {jobData.company}
              </div>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <MapPin size={16} className="text-gray-400" /> {jobData.location}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <Briefcase size={16} className="text-gray-400" /> {jobData.type}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <DollarSign size={16} className="text-gray-400" /> {jobData.salary}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <Clock size={16} className="text-gray-400" /> {jobData.postedAt}
                </span>
              </div>
            </div>
            
            {/* Right Section: Button */}
            <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#fd741e] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#102a43] hover:shadow-lg transition-all duration-300 ease-in-out">
              View Details 
              {/* Card par hover hone se arrow thoda aage move karega */}
              <IoMdArrowForward className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
          </div>
        </div>

      </div>
    </div>
  );
}