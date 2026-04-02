import React from "react";
import { Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";

interface LearningPathData {
  id: string;
  badge: string;
  levelLabel: string;
  levelName: string;
  title: string;
  description: string;
  duration: string;
  alignment: string;
  learnings: string[];
}

const LEARNING_PATHS: LearningPathData[] = [
  {
    id: "basic",
    badge: "HSK 1-2",
    levelLabel: "Level",
    levelName: "Basic",
    title: "Foundation Chinese",
    description:
      "Perfect for absolute beginners starting their Mandarin journey",
    duration: "3 months",
    alignment: "HSK 1-2 Aligned",
    learnings: [
      "Pinyin pronunciation mastery",
      "Essential vocabulary (500+ words)",
      "Basic conversation skills",
      "Chinese character recognition",
    ],
  },
  {
    id: "intermediate",
    badge: "HSK 3-4",
    levelLabel: "Level",
    levelName: "Intermediate",
    title: "Conversational Chinese",
    description:
      "Build confidence in daily communication and expand your vocabulary",
    duration: "6 months",
    alignment: "HSK 3-4 Aligned",
    learnings: [
      "Complex sentence structures",
      "Intermediate vocabulary (1500+ words)",
      "Reading short articles",
      "Writing basic compositions",
    ],
  },
];

export default function LearningPath() {
  return (
    <section className="min-h-screen bg-[#FFFDF9] py-20 px-4 font-sans">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 tracking-tight">
          Choose Your <span className="text-[#DA291C]">Learning Path</span>
        </h2>
        <p className="text-gray-500 text-lg">
          From complete beginners to advanced learners, we have the perfect
          course designed for your proficiency level
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {LEARNING_PATHS.map((path) => (
          <div
            key={path.id}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Card Top / Cream Banner area */}
            <div className="bg-[#FEFBF4] h-48 p-8 flex flex-col relative">
              {/* Top Right Red Badge */}
              <div className="self-end bg-[#DA291C] text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-sm">
                {path.badge}
              </div>

              {/* Floating Level Indicator Box */}
              <div className="mt-auto">
                <div className="bg-white inline-block px-5 py-2.5 rounded-2xl shadow-sm border border-gray-50">
                  <p className="text-xs text-gray-500 font-semibold mb-0.5">
                    {path.levelLabel}
                  </p>
                  <p className="text-xl font-bold text-[#1A2B49]">
                    {path.levelName}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-8 pt-10 flex flex-col flex-1">
              <h3 className="text-2xl font-bold text-[#1A2B49] mb-3">
                {path.title}
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {path.description}
              </p>

              {/* Meta Info (Duration & Alignment) */}
              <div className="flex items-center gap-6 text-sm text-gray-600 mb-8 font-medium">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-[#DA291C]" />
                  <span>{path.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-[#DA291C]" />
                  <span>{path.alignment}</span>
                </div>
              </div>

              {/* Learning Points */}
              <div className="mb-8 flex-1">
                <p className="font-bold text-[#1A2B49] mb-4">
                  What You'll Learn:
                </p>
                <ul className="space-y-3.5">
                  {path.learnings.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-[#22C55E] shrink-0 mt-0.5"
                      />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full bg-[#DA291C] text-white rounded-xl py-4 font-semibold hover:bg-[#B82217] transition-colors duration-200 flex justify-center items-center gap-2 shadow-sm">
                Enroll Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
