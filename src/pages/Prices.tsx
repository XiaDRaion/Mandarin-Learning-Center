import React from "react";
import { Check, MessageCircle, Sparkles } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: PricingFeature[];
  isPopular?: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Package",
    description: "Perfect for beginners starting their journey",
    price: "Rp 1,500,000",
    period: "per month",
    features: [
      { text: "8 group classes per month" },
      { text: "Access to learning materials" },
      { text: "Progress tracking dashboard" },
      { text: "Community forum access" },
      { text: "Email support" },
    ],
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "Most popular choice for serious learners",
    price: "Rp 2,800,000",
    period: "per month",
    isPopular: true,
    features: [
      { text: "12 group classes per month" },
      { text: "4 one-on-one sessions" },
      { text: "All learning materials included" },
      { text: "HSK practice tests" },
      { text: "Priority support" },
      { text: "Cultural workshops access" },
    ],
  },
  {
    id: "intensive",
    name: "Intensive Package",
    description: "Maximum immersion for rapid progress",
    price: "Rp 4,500,000",
    period: "per month",
    features: [
      { text: "Unlimited group classes" },
      { text: "8 one-on-one sessions" },
      { text: "Premium learning resources" },
      { text: "Full HSK prep materials" },
      { text: "24/7 support" },
      { text: "Cultural immersion events" },
      { text: "Personalized study plan" },
    ],
  },
];

export default function Prices() {
  return (
    <section className="min-h-screen bg-[#FFFDF9] py-20 px-4 font-sans">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A2B49] mb-4 tracking-tight">
          Flexible <span className="text-[#DA291C]">Pricing Plans</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Choose the perfect plan that fits your learning goals and budget
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-3xl p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] 
              ${
                plan.isPopular
                  ? "border-2 border-[#DA291C] transform lg:-translate-y-2"
                  : "border border-gray-100"
              }
            `}
          >
            {/* Most Popular Badge */}
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-[#DA291C] text-white text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-2xl flex items-center gap-1.5 uppercase tracking-wide">
                <Sparkles size={14} />
                Most Popular
              </div>
            )}

            {/* Card Header */}
            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bold text-[#1A2B49] mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{plan.description}</p>

              <div className="mb-1">
                <span className="text-4xl font-extrabold text-[#1E3A8A]">
                  {plan.price}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{plan.period}</p>
            </div>

            {/* Features List */}
            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-[#22C55E] shrink-0 mt-0.5"
                    />
                    <span className="text-gray-600 text-sm">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Button */}
            <button
              className={`w-full rounded-xl py-4 font-semibold transition-colors duration-200 flex justify-center items-center gap-2 shadow-sm
                ${
                  plan.isPopular
                    ? "bg-[#DA291C] text-white hover:bg-[#B82217]"
                    : "bg-[#1E3A8A] text-white hover:bg-[#152C69]"
                }
              `}
            >
              <MessageCircle size={18} />
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="max-w-max mx-auto mt-12 bg-[#FEF4E0] rounded-full px-6 py-3 flex items-center justify-center gap-2 shadow-sm border border-[#FDE6B5]">
        <span role="img" aria-label="money bag" className="text-lg">
          💰
        </span>
        <p className="text-[#9C6D18] text-sm font-semibold">
          Special discounts available for group enrollments
        </p>
      </div>
    </section>
  );
}
