"use client";
import Head from "next/head";
import { useState } from "react";
import AgentCarousel from "@/components/AgentCarousel";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>AI-Powered Agents | Agent Dispatch</title>
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-20 py-12 md:py-16">
        {/* Left Side - Text & Button */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            <span className="text-gradient">AI-Powered Agents,</span> Always On.
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Expand, optimize, and scale your business with a team of intelligent
            AI assistants.
          </p>
          <button className="mt-6 bg-blue-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-blue-600 transition">
            Get Started →
          </button>
        </div>

        {/* Right Side - Bot Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/your-image-path.png"
            alt="AI Bot"
            className="w-full max-w-sm"
          />
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-12 md:py-16">
        <div className="bg-black min-h-screen flex justify-center items-center">
          <AgentCarousel />
        </div>
      </section>

      {/* 24/7 Availability */}
      <section className="py-12 md:py-16 flex flex-col md:flex-row items-center justify-between px-4 md:px-20">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            A tireless teammate, always on duty.
          </h3>
          <p className="text-gray-400 mt-2">
            AI agents work 24/7 to streamline your workflow.
          </p>
        </div>

        {/* Right Content */}
        <h2 className="text-6xl font-bold text-blue-400 mt-6 md:mt-0">24/7</h2>
      </section>

      {/* Tools Integration */}
      <section className="relative py-12 md:py-24 bg-black text-white px-4 md:px-20 h-auto overflow-hidden">
        {/* Centered Text */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Tailored to Your Business, Just Like Real Employees.
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Your AI team learns the ins and outs of your business, giving
            personalized answers about your brand. Upload files, share
            instructions, or link your website to enhance results—the more they
            know, the better they perform.
          </p>
        </div>

        {/* Floating Integration Cards */}
        <div className="relative w-full h-[500px] md:h-[350px] mt-12">
          {/* Facebook Insights */}
          <div className="absolute top-0 left-[5%] md:left-[10%] bg-gray-900 p-4 md:p-5 rounded-xl shadow-md flex items-center gap-3 md:gap-4 min-w-[150px] md:min-w-[260px] hover:scale-105 transition transform duration-300">
            <img src="/facebook-icon.png" className="w-6 h-6 md:w-8 md:h-8" />
            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Facebook Insights
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                Trustpilot, 43 reviews
              </p>
            </div>
          </div>

          {/* Brand Website */}
          <div className="absolute top-[10%] right-[5%] md:right-[25%] bg-gray-900 p-4 md:p-5 rounded-xl shadow-md flex items-center gap-3 md:gap-4 min-w-[150px] md:min-w-[260px] hover:scale-105 transition transform duration-300">
            <img src="/globe-icon.png" className="w-6 h-6 md:w-8 md:h-8" />
            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Brand Website
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                eCommerce, 24 pages
              </p>
            </div>
          </div>

          {/* Conversation with Julia */}
          <div className="absolute top-[40%] left-[5%] md:left-[70%] transform -translate-x-1/2 bg-gray-900 p-4 md:p-5 rounded-xl shadow-md flex items-center gap-3 md:gap-4 min-w-[150px] md:min-w-[280px] whitespace-nowrap hover:scale-105 transition transform duration-300">
            <img src="/gmail-icon.png" className="w-6 h-6 md:w-8 md:h-8" />
            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Conversation with Julia
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                Follow-up scheduled
              </p>
            </div>
          </div>

          {/* Team Photos */}
          <div className="absolute bottom-[10%] left-[5%] md:left-[20%] bg-gray-900 p-4 md:p-5 rounded-xl shadow-md flex items-center gap-3 md:gap-4 min-w-[150px] md:min-w-[260px] hover:scale-105 transition transform duration-300">
            <img
              src="/google-drive-icon.png"
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <div>
              <h4 className="text-base md:text-lg font-semibold">
                Team Photos
              </h4>
              <p className="text-gray-400 text-xs md:text-sm">
                Company retreat 2025
              </p>
            </div>
          </div>
        </div>

        {/* AI Bot Image at Bottom Right */}
        <div className="absolute bottom-0 right-4 md:right-10 w-24 md:w-56">
          <img src="/your-ai-bot-image.png" alt="AI Bot" className="w-full" />
        </div>
      </section>

      {/* Tools Integration Grid */}
      <section className="bg-black text-white py-12 md:py-16 px-4 md:px-20">
        <div className="text-left max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold">
            Seamlessly Connect with Your Favorite Tools.
          </h3>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Enhance your workflow by uniting AI-powered assistants with the
            tools you already use. Smart automation makes managing integrations
            smoother than ever.
          </p>
        </div>

        {/* Grid Layout for Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 max-w-4xl mx-auto">
          {[
            { name: "Facebook", logo: "/facebook.svg" },
            { name: "Instagram", logo: "/instagram.svg" },
            { name: "Google", logo: "/google.svg" },
            { name: "YouTube", logo: "/youtube.svg" },
            { name: "Microsoft", logo: "/microsoft.svg" },
            { name: "Logoipsum", logo: "/logoipsum.svg" },
            { name: "LinkedIn", logo: "/linkedin.svg" },
            { name: "Slack", logo: "/slack.svg" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="border border-gray-700 p-4 md:p-6 flex items-center justify-center rounded-lg h-20 md:h-28"
            >
              <img src={tool.logo} alt={tool.name} className="h-6 md:h-10" />
            </div>
          ))}
        </div>
      </section>

      {/* AI Chat Bubbles Section */}
      <section className="bg-black text-white py-12 md:py-16 px-4 md:px-20 relative">
        {/* Heading and Description */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold">
            Work Gets Done—Even While You Rest.
          </h3>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Let AI handle the routine—automate tasks like creating social media
            posts, responding to comments, and more with powerful business
            automation tools.
          </p>
        </div>

        {/* AI Chat Bubbles Wrapper */}
        <div className="relative w-full max-w-3xl mx-auto mt-10 pb-40">
          {/* Nova's Chat */}
          <div className="bg-indigo-500 text-white p-4 md:p-6 rounded-xl w-56 md:w-96 flex items-center gap-3 absolute left-0 top-0 md:top-10 overflow-hidden">
            <img
              src="/nova-bot.svg"
              alt="Nova Bot"
              className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0"
            />
            <span className="whitespace-normal text-center flex-1 text-sm md:text-base">
              Nova, plan and schedule my social media posts.
            </span>
          </div>

          {/* Kai's Chat */}
          <div className="bg-blue-700 text-white p-4 md:p-6 rounded-xl w-56 md:w-96 flex items-center justify-center gap-4 absolute right-0 md:right-[-25px] top-20 md:top-10">
            <img
              src="/kai-bot.svg"
              alt="Kai Bot"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="whitespace-nowrap text-center flex-1 text-sm md:text-base">
              Kai, review my Facebook comments.
            </span>
          </div>

          {/* Sage's Chat */}
          <div className="bg-purple-700 text-white p-4 md:p-6 rounded-xl w-56 md:w-96 flex items-center justify-center gap-4 absolute left-0 md:left-1/4 top-40">
            <img
              src="/sage-bot.svg"
              alt="Sage Bot"
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="whitespace-nowrap text-center flex-1 text-sm md:text-base">
              Sage, get me ready for today’s meetings.
            </span>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-900 to-black text-white py-12 md:py-16 px-4 md:px-20 rounded-xl mt-20">
        <h3 className="text-center text-3xl md:text-4xl font-semibold">
          Trusted by <span className="text-blue-400">30k+ World Class</span>{" "}
          Companies
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
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
            <div key={index} className="bg-black p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 text-lg">⭐ ⭐ ⭐ ⭐ ⭐</p>
              <p className="text-gray-400 mt-2">"{testimonial.review}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center items-center gap-4 text-gray-400">
          <button className="px-3 py-1 rounded-full bg-gray-800">{"<"}</button>
          <span className="text-sm">1 / 7</span>
          <button className="px-3 py-1 rounded-full bg-gray-800">{">"}</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 px-4 md:px-20 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Left Section: Title & Description */}
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-semibold">
              Questions & Answers.
            </h3>
            <p className="mt-2 text-gray-400">
              Learn more about Agent Dispatch
            </p>
          </div>

          {/* Right Section: FAQ List */}
          <div className="md:w-1/2 space-y-4">
            {[
              "How does the AI adapt to my business needs?",
              "What tools does your platform integrate with?",
              "Can I customize my AI assistants?",
              "How do I get started with Agent Dispatch?",
              "What kind of support do you offer?",
            ].map((question, index) => (
              <button
                key={index}
                className="w-full flex justify-between items-center p-4 bg-gray-900 rounded-lg"
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <span>{question}</span>
                <span className="text-gray-400">
                  {faqOpen === index ? "▲" : "▼"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
