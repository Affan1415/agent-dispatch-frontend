"use client";
import React from "react";
import dynamic from "next/dynamic";
import {
  CheckCircle,
  CreditCard,
  TrendingUp,
  ShieldCheck,
  RefreshCcw,
  Clock,
  HelpCircle,
  Zap,
} from "lucide-react";

// Dynamically import PricingCarousel to disable SSR for Swiper components
const PricingCarousel = dynamic(() => import("@/components/PricingCarousel"), {
  ssr: false,
});

const plans = [
  {
    name: "Nova - AI Assistant",
    description:
      "A reliable AI partner for business owners and busy professionals.",
    price: 0,
    image: "images/Inspector.png",
  },
  {
    name: "Orion - Business AI",
    description: "Advanced AI designed for entrepreneurs and corporate teams.",
    price: 59,
    image: "images/Magni.png",
  },
  {
    name: "Luna - Creative AI",
    description: "AI-powered assistant for designers, writers, and creatives.",
    price: 79,
    image: "images/Builder.png",
  },
];

const PricingPage = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center w-full">
      {/* Hero Section with Carousel */}
      <div className="max-w-screen-xl w-full flex flex-col  py-16">
        <div>
          <PricingCarousel plans={plans} />
        </div>

        {/* Resource Usage */}
        <div className="px-4 mf:px-12 lg:px-28">
          <div className="p-6 md:p-10 w-full min-h-[500px]  bg-gradient-to-t rounded-xl mx-auto from-teal-800/20 to-purple-900/10 border border-teal-100/10 ">
            <h2 className="text-2xl font-bold mb-4">Usage</h2>
            <ul className="list-none space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Monthly Credits:</strong> Each plan includes a set
                  number of credits per month, which can be used for AI-powered
                  tasks such as content generation, scheduling, and analytics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CreditCard className="text-blue-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Usage Limits:</strong> Actions like AI-driven
                  scheduling, text-to-image generation, and automation workflows
                  deduct credits from your balance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <TrendingUp className="text-yellow-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Top-Up Anytime:</strong> Need more credits? You can
                  purchase additional credits or upgrade your plan at any time
                  for uninterrupted service.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="text-purple-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Fair Usage Policy:</strong> To maintain a high-quality
                  experience, fair usage limits apply. If you exceed your
                  limits, you may need to upgrade or wait for the next renewal
                  cycle.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCcw className="text-red-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Auto-Renewal & Expiry:</strong> Credits automatically
                  renew monthly, and unused credits may not roll over unless
                  specified in your plan.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-orange-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Priority Access:</strong> Higher-tier plans may
                  include priority processing for AI tasks, ensuring faster
                  response times and improved performance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="text-indigo-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Bonus Credits & Discounts:</strong> Get exclusive
                  discounts or bonus credits on special occasions, promotions,
                  or through loyalty programs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <HelpCircle className="text-teal-500 w-6 h-6 mt-1" />
                <span className="text-gray-200">
                  <strong>Support & Assistance:</strong> Higher plans may
                  include premium support, faster response times, and direct
                  assistance from our expert team.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
