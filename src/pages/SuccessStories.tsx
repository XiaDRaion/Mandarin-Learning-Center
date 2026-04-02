import React from "react";
import { Star, Quote } from "lucide-react";

interface Story {
  id: string;
  initials: string;
  role: string;
  quote: string;
  rating: number;
}

const SUCCESS_STORIES: Story[] = [
  {
    id: "1",
    initials: "SJ",
    role: "Business Professional",
    quote:
      '"Youhao Mandarin transformed my career! Within 6 months, I was confidently conducting business meetings in Mandarin. The HSK preparation was exceptional."',
    rating: 5,
  },
  {
    id: "2",
    initials: "MC",
    role: "University Student",
    quote:
      '"The instructors are incredibly patient and knowledgeable. I passed HSK 4 on my first attempt thanks to their structured approach and constant support."',
    rating: 5,
  },
  {
    id: "3",
    initials: "AP",
    role: "Travel Enthusiast",
    quote:
      '"Learning Mandarin here has been an amazing journey! The cultural immersion aspect made learning fun and engaging. Highly recommended!"',
    rating: 5,
  },
  {
    id: "4",
    initials: "TL",
    role: "Business Owner",
    quote:
      '"Best language school in town! The flexible scheduling allowed me to balance learning with my business. Now I can communicate with Chinese partners effortlessly."',
    rating: 5,
  },
  {
    id: "5",
    initials: "JW",
    role: "Heritage Learner",
    quote:
      '"As someone who wanted to reconnect with my heritage, Youhao Mandarin provided the perfect environment. The teachers are encouraging and the curriculum is well-structured."',
    rating: 5,
  },
  {
    id: "6",
    initials: "ER",
    role: "Lifelong Learner",
    quote:
      "\"Never thought I'd learn Mandarin at my age, but the supportive environment and excellent teaching methods made it possible. It's been a wonderful experience!\"",
    rating: 5,
  },
];

export default function SuccessStories() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFFFFF] to-[#feeee2] py-20 px-4 font-sans relative overflow-hidden">
      {/* Decorative blurred background element to match the right-side glow */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 blur-[100px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#DA291C] mb-4 tracking-tight">
          Success Stories
        </h2>
        {/* Improved contrast here: changed from light gray to slate-600 */}
        <p className="text-slate-600 text-lg">
          Hear from our students who have transformed their lives through
          Mandarin mastery
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {SUCCESS_STORIES.map((story) => (
          <div
            key={story.id}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.15)] transition-all duration-300"
          >
            {/* Quote Icon */}
            <div className="mb-4">
              <Quote
                size={40}
                className="text-[#DA291C] fill-transparent stroke-[1.5]"
              />
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(story.rating)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className="text-[#FBBF24] fill-[#FBBF24]"
                />
              ))}
            </div>

            {/* Testimonial Quote - Improved contrast: changed to text-gray-700 */}
            <div className="flex-grow mb-8">
              <p className="text-gray-700 italic leading-relaxed text-[15px]">
                {story.quote}
              </p>
            </div>

            {/* Student Info Footer */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
              {/* Avatar Bubble */}
              <div className="w-12 h-12 rounded-full border-2 border-[#FFE8E8] flex items-center justify-center bg-white shadow-sm shrink-0">
                <span className="text-[#DA291C] font-bold text-sm tracking-wide">
                  {story.initials}
                </span>
              </div>

              {/* Role - Improved contrast: changed to text-gray-600 */}
              <div className="text-sm font-medium text-gray-600">
                {story.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
