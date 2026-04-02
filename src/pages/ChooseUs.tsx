import React from "react";
import {
  GraduationCap,
  Award,
  Clock,
  BookOpen,
  Globe,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface FeatureData {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const FEATURES: FeatureData[] = [
  {
    id: "instructors",
    title: "Native Expert Instructors",
    description:
      "Learn from certified native Mandarin speakers with years of teaching experience",
    icon: GraduationCap,
  },
  {
    id: "hsk",
    title: "HSK Exam Preparation",
    description:
      "Comprehensive HSK prep courses designed to help you pass with confidence",
    icon: Award,
  },
  {
    id: "schedule",
    title: "Flexible Schedules",
    description:
      "Choose class times that fit your lifestyle with our adaptable scheduling system",
    icon: Clock,
  },
  {
    id: "interactive",
    title: "Interactive Learning",
    description:
      "Engage with multimedia content, live practice sessions, and real-world scenarios",
    icon: BookOpen,
  },
  {
    id: "culture",
    title: "Cultural Immersion",
    description:
      "Dive deep into Chinese culture, traditions, and customs while learning the language",
    icon: Globe,
  },
  {
    id: "progress",
    title: "Progress Tracking",
    description:
      "Monitor your improvement with regular assessments and personalized feedback",
    icon: TrendingUp,
  },
];

export default function ChooseUs() {
  return (
    <section
      id="features"
      className="min-h-screen bg-[#FFFFFF] py-20 px-4 font-sans relative"
    >
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 tracking-tight">
          Why Choose <span className="text-[#DA291C]">Youhao Mandarin</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Experience world-class Mandarin education with our proven teaching
          methodology and expert instructors
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10 mb-16">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-200 hover:scale-105 hover:border-red-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#DA291C] rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Icon size={24} className="text-white" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#1A2B49] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom Banner */}
      <div className="max-w-max mx-auto bg-[#FEF4E0] rounded-full px-6 py-3 flex items-center justify-center gap-2.5 shadow-sm border border-[#FDE6B5]">
        <Sparkles size={18} className="text-[#EAB308] fill-[#EAB308]" />
        <p className="text-[#9C6D18] text-sm font-semibold">
          Join 1000+ students who achieved their Mandarin goals
        </p>
      </div>
    </section>
  );
}
