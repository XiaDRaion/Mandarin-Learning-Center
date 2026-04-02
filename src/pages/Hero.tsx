import React from "react";
import { GraduationCap, MessageCircle, ArrowRight, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-[#FFFDF9] via-[#FFFDF9] to-[#FFF5F5] py-8 px-4 font-sans overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FFE8E8] text-[#DA291C] px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            <GraduationCap size={18} />
            <span>Professional Mandarin Training</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-[4rem] font-bold text-[#1A2B49] leading-[1.1] mb-4 tracking-tight">
            Master Mandarin <br />
            Chinese <br />
            <span className="text-[#DA291C]">
              Your Journey to <br /> Fluency Starts Here
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 text-lg mb-6 leading-relaxed max-w-[90%]">
            Learn Mandarin with expert instructors through HSK preparation
            courses and flexible learning programs tailored to your level.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Primary Button with scale-105 hover */}
            <button className="bg-[#DA291C] text-white px-8 py-4 rounded-xl flex items-center gap-2 font-semibold shadow-[0_8px_20px_rgba(218,41,28,0.2)] transition-all duration-300 hover:scale-105 hover:bg-[#B82217] hover:shadow-[0_10px_25px_rgba(218,41,28,0.3)]">
              <MessageCircle size={20} />
              Start Learning Today
            </button>

            {/* Secondary Button with blue-800 hover */}
            <button className="bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-4 rounded-xl flex items-center gap-2 font-semibold transition-all duration-300 hover:bg-blue-800 hover:text-white hover:border-blue-800 hover:shadow-lg">
              Explore Courses
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#1E3A8A]">
                1000+
              </span>
              <span className="text-gray-500 text-sm font-medium">
                Students
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#1E3A8A]">
                95%
              </span>
              <span className="text-gray-500 text-sm font-medium">
                Pass Rate
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-extrabold text-[#1E3A8A]">8+</span>
              <span className="text-gray-500 text-sm font-medium">Years</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Graphic */}
        <div className="relative w-full max-w-lg mx-auto lg:ml-auto mt-10 lg:mt-0">
          {/* Main Picture Container */}
          <div className="relative w-full aspect-[3/3.3] bg-gradient-to-br from-[#FFF4E5] to-[#FCF9F2] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 transition-transform duration-500 hover:scale-105 cursor-pointer">
            {/* <img src="..." alt="Students" className="w-full h-full object-cover rounded-[2.5rem]" /> */}

            {/* Top Right Floating Panda Avatar */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-white z-20">
              <img
                src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=200&auto=format&fit=crop"
                alt="Panda"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Left Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 z-20">
              <div className="w-12 h-12 bg-[#FFE8E8] rounded-full flex items-center justify-center shrink-0">
                <Trophy size={24} className="text-[#DA291C]" />
              </div>
              <div>
                <p className="text-[#1A2B49] font-bold leading-tight">
                  HSK Certified
                </p>
                <p className="text-gray-500 text-sm">Expert Instructors</p>
              </div>
              {/* Decorative Red Top Border on Badge */}
              <div className="absolute -top-px left-0 w-full h-0.5 bg-[#DA291C] rounded-t-2xl"></div>
            </div>
          </div>

          {/* Decorative background blur behind the image to make it pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#DA291C]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        </div>
      </div>
    </section>
  );
}
