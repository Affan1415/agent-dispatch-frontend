"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import PricingCarousel to disable SSR for Swiper components
const PricingCarousel = dynamic(() => import("@/components/PricingCarousel"), {
  ssr: false,
});

const plans = [
  {
    name: "Nova - AI Assistant",
    description:
      "A reliable AI partner for business owners and busy professionals.",
    price: 49,
    image: "/robot.png",
  },
  {
    name: "Orion - Business AI",
    description:
      "Advanced AI designed for entrepreneurs and corporate teams.",
    price: 79,
    image: "/business-ai.png",
  },
  {
    name: "Luna - Creative AI",
    description:
      "AI-powered assistant for designers, writers, and creatives.",
    price: 59,
    image: "/creative-ai.png",
  },
];

const PricingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section with Carousel */}
      <PricingCarousel plans={plans} />

      {/* Resource Usage */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Resource Usage</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Monthly Credits:</strong> Each plan includes specific
            credits per month for AI-powered tasks.
          </li>
          <li>
            <strong>Usage Limits:</strong> Actions like scheduling and content
            generation deduct credits.
          </li>
          <li>
            <strong>Top-Up Anytime:</strong> Purchase additional credits or
            upgrade your plan anytime.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PricingPage;
