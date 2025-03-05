"use client";
import Head from "next/head";
import { useState } from "react";
import AgentCarousel from "@/components/AgentCarousel";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="h-full bg-black text-white">
      <Head>
        <title>AI-Powered Agents | Agent Dispatch</title>
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
        {/* Left Side - Text & Button */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            <span className="text-gradient">AI-Powered Agents,</span> Always On.
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Expand, optimize, and scale your business with a team of intelligent
            AI assistants.
          </p>
          <button className="mt-4 sm:mt-6 bg-blue-500 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-white font-semibold hover:bg-blue-600 transition">
            Get Started →
          </button>
        </div>

        {/* Right Side - Bot Image */}
        <div className="w-full md:w-[30%] flex justify-center">
          <img
            src="/images/1.png"
            alt="AI Bot"
            className="w-auto max-w-xs sm:max-w-sm"
          />
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="bg-black min-h-screen flex justify-center items-center">
          <AgentCarousel />
        </div>
      </section>

      {/* 24/7 Availability */}
      <section className="py-8 sm:py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            A tireless teammate, always on duty.
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            AI agents work 24/7 to streamline your workflow.
          </p>
        </div>

        {/* Right Content */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mt-6 md:mt-0">
          24/7
        </h2>
      </section>

      {/* Tools Integration */}
      <section className="relative py-8 sm:py-12 md:py-24 bg-black text-white px-4 sm:px-8 md:px-12 lg:px-20 h-auto overflow-hidden">
        {/* Centered Text */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Tailored to Your Business, Just Like Real Employees.
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Your AI team learns the ins and outs of your business, giving
            personalized answers about your brand. Upload files, share
            instructions, or link your website to enhance results—the more they
            know, the better they perform.
          </p>
        </div>

        {/* Floating Integration Cards */}
        <div className="relative w-full h-auto mt-8 sm:mt-12 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl px-4 sm:px-0">
            {/* Facebook Insights */}
            <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
              <img src="/facebook-icon.png" className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Facebook Insights
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Trustpilot, 43 reviews
                </p>
              </div>
            </div>

            {/* Brand Website */}
            <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
              <img src="/globe-icon.png" className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Brand Website
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  eCommerce, 24 pages
                </p>
              </div>
            </div>

            {/* Conversation with Julia */}
            <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[280px] whitespace-nowrap hover:scale-105 transition duration-300">
              <img src="/gmail-icon.png" className="w-6 h-6 sm:w-8 sm:h-8" />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Conversation with Julia
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Follow-up scheduled
                </p>
              </div>
            </div>

            {/* Team Photos */}
            <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
              <img
                src="/google-drive-icon.png"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Team Photos
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Company retreat 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Bot Image at Bottom Right */}
        <div className="absolute bottom-0 right-10 md:right-[15%] w-24 md:w-56 flex justify-end">
          <img src="/images/Board.png" alt="AI Bot" className="w-full" />
        </div>
      </section>

      {/* Tools Integration Grid */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="text-left max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Seamlessly Connect with Your Favorite Tools.
          </h3>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Enhance your workflow by uniting AI-powered assistants with the
            tools you already use. Smart automation makes managing integrations
            smoother than ever.
          </p>
        </div>

        {/* Grid Layout for Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10 max-w-4xl mx-auto">
          {[
            { name: "Facebook", logo: "images/facebook.png" },
            { name: "Instagram", logo: "images/instagrm.png" },
            { name: "Google", logo: "images/google.png" },
            { name: "YouTube", logo: "images/youtube.png" },
            { name: "Microsoft", logo: "images/microsoft.png" },
            { name: "Logoipsum", logo: "images/logoipsum.png" },
            { name: "LinkedIn", logo: "images/linkedin.png" },
            { name: "Slack", logo: "images/slack.png" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="border border-gray-700 p-4 sm:p-6 flex items-center justify-center rounded-lg h-16 sm:h-20 md:h-28"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-6 sm:h-8 md:h-10"
              />
            </div>
          ))}
        </div>
      </section>

      {/* AI Chat Bubbles Section */}
      <section className="bg-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 relative">
        {/* Heading and Description */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Work Gets Done—Even While You Rest.
          </h3>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Let AI handle the routine—automate tasks like creating social media
            posts, responding to comments, and more with powerful business
            automation tools.
          </p>
        </div>

        {/* AI Chat Bubbles Wrapper */}
        <div className="relative w-full max-w-3xl mx-auto mt-8 sm:mt-10 pb-20 sm:pb-40">
          {/* Nova's Chat */}
          <div className="bg-indigo-500 text-white p-4 sm:p-6 rounded-xl w-48 sm:w-56 md:w-96 flex items-center gap-3 absolute left-0 top-0 sm:top-10 overflow-hidden">
            <img
              src="images/haed1.png"
              alt="Nova Bot"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex-shrink-0"
            />
            <span className="whitespace-normal text-center flex-1 text-xs sm:text-sm md:text-base">
              Nova, plan and schedule my social media posts.
            </span>
          </div>

          {/* Kai's Chat */}
          <div className="bg-blue-700 text-white p-4 sm:p-6 rounded-xl w-48 sm:w-56 md:w-96 flex items-center justify-center gap-4 absolute right-0 sm:right-[-25px] top-20 sm:top-10">
            <img
              src="images/head2.png"
              alt="Kai Bot"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
            />
            <span className="whitespace-nowrap text-center flex-1 text-xs sm:text-sm md:text-base">
              Kai, review my Facebook comments.
            </span>
          </div>

          {/* Sage's Chat */}
          <div className="bg-purple-700 text-white p-4 sm:p-6 rounded-xl w-48 sm:w-56 md:w-96 flex items-center justify-center gap-4 absolute left-0 sm:left-1/4 top-40">
            <img
              src="images/head3.png"
              alt="Sage Bot"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12"
            />
            <span className="whitespace-nowrap text-center flex-1 text-xs sm:text-sm md:text-base">
              Sage, get me ready for today’s meetings.
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 rounded-xl mt-12 sm:mt-20">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold">
          Trusted by <span className="text-blue-400">30k+ World Class</span>{" "}
          Companies
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 sm:mt-10 max-w-4xl mx-auto">
          {[
            {
              name: "Alex Mercer",
              title: "Co-founder, XYZ",
              review:
                "Tried Nova Assist, and it’s been a game-changer! The AI’s adaptability and quick responses make work a breeze.",
            },
            {
              name: "Jordan Ellis",
              title: "Co-founder, XYZ",
              review:
                "I use Lumi AI daily—it schedules my meetings, organizes tasks, and even drafts emails. Highly recommend!",
            },
            {
              name: "Priya Sharma",
              title: "Co-founder, XYZ",
              review:
                "At first, I wasn’t sure about Vero AI, but after a week, it started generating perfect marketing strategies!",
            },
            {
              name: "Marcus Lee",
              title: "Co-founder, XYZ",
              review:
                "Kai Support stands out. It handles customer inquiries seamlessly and saves me hours of work.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-4 sm:p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-300 text-sm sm:text-lg">⭐ ⭐ ⭐ ⭐ ⭐</p>
              <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                "{testimonial.review}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full"></div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 sm:mt-8 flex justify-center items-center gap-4 text-gray-400">
          <button className="px-2 sm:px-3 py-1 rounded-full bg-gray-800">
            {"<"}
          </button>
          <span className="text-xs sm:text-sm">1 / 7</span>
          <button className="px-2 sm:px-3 py-1 rounded-full bg-gray-800">
            {">"}
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10">
          {/* Left Section: Title & Description */}
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              Questions & Answers.
            </h3>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">
              Learn more about Agent Dispatch
            </p>
          </div>

          {/* Right Section: FAQ List */}
          {/* <div className="md:w-1/2 space-y-3 sm:space-y-4">
            {[
              "How does the AI adapt to my business needs?",
              "What tools does your platform integrate with?",
              "Can I customize my AI assistants?",
              "How do I get started with Agent Dispatch?",
              "What kind of support do you offer?",
            ].map((question, index) => (
              <button
                key={index}
                className="w-full flex justify-between items-center p-3 sm:p-4 bg-gray-900 rounded-lg"
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <span className="text-sm sm:text-base">{question}</span>
                <span className="text-gray-400">
                  {faqOpen === index ? "▲" : "▼"}
                </span>
              </button>
            ))}
          </div> */}
        </div>
      </section>
    </div>
  );
}
