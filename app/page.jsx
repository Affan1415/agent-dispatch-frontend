"use client";
import Head from "next/head";
import { useState } from "react";
import AgentCarousel from "../components/AgentCarousel";
import Image from "next/image";
import { StarIcon } from "lucide-react";

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);
  const BlurredCircle = () => {
    return (
      <svg
        width="647"
        height="1295"
        viewBox="0 0 647 1295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <g filter="url(#filter0_f_8_1191)">
          <circle
            cx="647.5"
            cy="647.5"
            r="447.5"
            fill="url(#paint0_radial_8_1191)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_8_1191"
            x="0"
            y="0"
            width="1295"
            height="1295"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_8_1191"
            />
          </filter>
          <radialGradient
            id="paint0_radial_8_1191"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(647.5 647.5) rotate(90) scale(447.5)"
          >
            <stop stopColor="#1B255E" />
            <stop offset="1" stopColor="#1B255E" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  };

  const BlurredCircleLeft = () => {
    return (
      <svg
        width="648"
        height="1295"
        viewBox="0 0 648 1295"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <g filter="url(#filter0_f_10_1514)">
          <circle
            cx="0.5"
            cy="647.5"
            r="447.5"
            fill="url(#paint0_radial_10_1514)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_10_1514"
            x="-647"
            y="0"
            width="1295"
            height="1295"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_10_1514"
            />
          </filter>
          <radialGradient
            id="paint0_radial_10_1514"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(0.5 647.5) rotate(90) scale(447.5)"
          >
            <stop stopColor="#1B255E" />
            <stop offset="1" stopColor="#1B255E" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  };
  const BlurredEllipse = () => {
    return (
      <svg
        width="747"
        height="222"
        viewBox="0 0 747 222"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <g filter="url(#filter0_f_5_874)">
          <ellipse
            cx="391"
            cy="111"
            rx="371"
            ry="91"
            fill="url(#paint0_radial_5_874)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_5_874"
            x="0"
            y="0"
            width="782"
            height="222"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="10"
              result="effect1_foregroundBlur_5_874"
            />
          </filter>
          <radialGradient
            id="paint0_radial_5_874"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(391 111) rotate(90) scale(91 371)"
          >
            <stop stopColor="#1B255E" />
            <stop offset="1" stopColor="#1B255E" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div className="h-full bg-black text-white relative overflow-x-hidden ">
      <Head>
        <title>AI-Powered Agents | Agent Dispatch</title>
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row  h-[70vh]  max-h-[600px] items-center justify-center gap-12 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
        {/* Left Side - Text & Button */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl lg:text-6xl font-semibold w-full  leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
              AI-Powered Agents,
            </span>
            <br /> Always On.
          </h2>
          <p className="text-gray-400 mt-8 text-sm sm:text-base">
            Leverage AI-driven automation to handle repetitive tasks, provide
            insightful data analysis, and improve decision-making. From customer
            support and content creation to marketing strategies, our AI
            assistants seamlessly integrate into your workflow maximizing
            efficiency.
          </p>
          <button className="mt-8 sm:mt-6 bg-[#7B8CE5] px-4 sm:px-6 py-2 sm:py-3  text-white font-semibold hover:bg-blue-600 transition rounded-full">
            Get Started →
          </button>
        </div>

        {/* Right Side - Bot Image */}
        <div className="w-full md:w-[35%] flex justify-center overflow-hiden">
          <div className="relative ">
            <div className="relative w-[300px] lg:w-[610px]   mx-auto xl:translate-x-[10%] h-auto flex items-center justify-center z-[10]">
              <Image
                src="/images/1.png"
                className=" z-[10]"
                alt="AI Bot"
                width={1200}
                height={1200}
              />
            </div>
            <div className="absolute opacity-40 md:opacity-65 -translate-x-[200px] lg:-translate-x-0 -translate-y-[80px]  scale-90 ">
              <BlurredEllipse />
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}

      <section className="py-8 mt-8 sm:mt-0 sm:py-12 flex z-50 items-center justify-center md:py-16">
        <div className="max-w-screen-xl px-7 sm:px-8 md:px-12 lg:px-20 w-full flex flex-col gap-12 ">
          <h1 className="text-2xl md:text-4xl lg:text-3xl max-w-[750px] font-medium self-start">
            The Next Generation of AI Workforce, Tailored to Your business.
            Transforming Work into Effortless Efficiency.
          </h1>

          <div className="w-[60%]   self-end h-[1px] bg-gradient-to-r from-purple-400 via-blue-500 to-green-300"></div>
        </div>
      </section>

      <section
        id="agents"
        className="py-0 sm:py-12 flex items-center justify-center md:py-16 relative"
      >
        <div className="absolute left-0 opacity-90 ">
          <BlurredCircleLeft />
        </div>
        <div className="bg-black max-w-screen-xl w-full flex justify-center items-center">
          <AgentCarousel />
        </div>
      </section>

      {/* 24/7 Availability */}
      <section className="py-8 sm:py-12 md:py-32 gap-32 flex items-center justify-center relative">
        <div className="absolute right-0 opacity-90 -z-0 ">
          <BlurredCircle />
        </div>
        <div className="max-w-screen-xl items-center justify-between z-10 flex flex-col lg:flex-row w-full gap-12  px-7 sm:px-8 md:px-12 lg:px-20 ">
          <div className="max-w-xl text-center md:text-left w-full ">
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
              A tireless teammate, always on duty.
            </h3>
            <p className="text-gray-400 max-w-xl mt-4 text-sm sm:text-base font-light">
              Available around the clock—your AI workforce that thrives on
              overtime, ensuring you save what matters most: your time.
            </p>

            <p className="text-gray-400 max-w-xl  text-sm sm:text-base font-light mt-8">
              Break barriers and work seamlessly across the globe with AI that
              speaks, understands, and delivers in over 100 languages.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full flex md:items-end md:justify-end gap-2 z-10 md:gap-6 flex-col ">
            <div className="fleex flex-col gap-6 h-full items-center justify-center">
              <h2 className=" text-center text-8xl md:text-[150px] z-10 font-bold bg-gradient-to-r from-purple-500 via-blue-300 to-teal-300 text-transparent bg-clip-text ">
                24/7
              </h2>
              <p className="text-center text-lg md:text-2xl mt-4">
                Availability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Integration */}
      <section
        id="features"
        className="relative py-16 md:py-24  text-white px-7 sm:px-8 md:px-12 lg:px-20 h-auto overflow-hidden"
      >
        {/* Centered Text */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl  ">
            Tailored to Your Business, Just Like Real Employees.
          </h2>
          <p className="text-gray-400 mt-4 lg:mt-8 text-sm sm:text-base font">
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
              <img
                src="/images/fb-icon.png"
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
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
              <img
                src="/images/globe-icon.png"
                className="w-6 h-6 sm:w-12 sm:h-12"
              />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Brand Website
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Customer Serice Bot Integrations
                </p>
              </div>
            </div>

            {/* Conversation with Julia */}
            <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[280px] whitespace-nowrap hover:scale-105 transition duration-300">
              <img
                src="/images/telegram.png"
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  Telegram Integration
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Chatbot which responds efficiently and correctly.
                </p>
              </div>
            </div>

            {/* Team Photos */}
            <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
              <img
                src="/images/drive-icon.png"
                className="w-6 h-6 sm:w-10 sm:h-10"
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
      <section className="bg-black text-white py-16 md:py-32 flex items-center justify-center w-full relative ">
        <div className="absolute left-0 opacity-90  -z-0">
          <BlurredCircleLeft />
        </div>
        <div className="max-w-screen-xl px-7 sm:px-8 md:px-12 lg:px-20 w-full z-10">
          <div className="text-center md:text-left  mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl  max-w-lg ">
              Seamlessly Connect with Your Favorite Tools.
            </h3>
            <p className="text-gray-400 mt-4 md:mt-10 text-sm sm:text-base max-w-md">
              Enhance your workflow by uniting AI-powered assistants with the
              tools you already use. Smart automation makes managing
              integrations smoother than ever.
            </p>
          </div>

          {/* Grid Layout for Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 bg-gradient-to-tr from-purple-400/30 via-blue-600/40 to-teal-300/20   p-[1px] md:grid-cols-4 gap-[1px]  w-full  mt-8 sm:mt-16  mx-auto">
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
                className="p-4 sm:p-6 bg-black flex items-center justify-center  h-16 sm:h-20 md:h-28"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-6 sm:h-8 md:h-10"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Bubbles Section */}
      <section className=" text-white w-full py-16 md:py-16  flex items-center justify-center relative">
        <div className="max-w-screen-xl w-full  px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Work Gets Done—Even While You Rest.
            </h3>
            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Let AI handle the routine—automate tasks like creating social
              media posts, responding to comments, and more with powerful
              business automation tools.
            </p>
          </div>

          {/* AI Chat Bubbles Wrapper */}
          <div className=" w-full max-w-3xl mx-auto mt-8 sm:mt-10  flex flex-col  gap-4">
            {/* Nova's Chat */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center ">
              <div className="bg-indigo-500 text-white p-4 sm:p-6 max-w-lg max-h-[80px] rounded-[30px]  w-full flex flex-row items-center  gap-3   ">
                <img
                  src="images/haed1.png"
                  alt="Nova Bot"
                  className="w-16 h-16 md:w-28 md:h-28  md:-translate-x-12 -rotate-[25deg]"
                />
                <span className="whitespace-normal text-center  md:-translate-x-8  text-sm md:text-base">
                  Nova, Customer Service Chatbot.
                </span>
              </div>

              {/* Kai's Chat */}
              <div className="bg-blue-700 text-white p-4 sm:p-6 max-w-lg max-h-[80px]  rounded-[30px] w-full  flex flex-row items-center gap-4 ">
                <img
                  src="images/head2.png"
                  alt="Kai Bot"
                  className="w-16 h-16 md:w-20 md:h-20  md:-translate-x-12 -rotate-[25deg]"
                />
                <span className="whitespace-nowrap text-center  md:-translate-x-8   text-sm md:text-base">
                  Lumi, Social Media Chatbots.
                </span>
              </div>
            </div>

            {/* Sage's Chat */}
            <div className="flex items-center justify-center w-full">
              <div className="bg-purple-700 text-white p-4 sm:p-6 max-w-lg max-h-[80px] rounded-[30px] w-full flex flex-row items-center gap-4 ">
                <img
                  src="images/head3.png"
                  alt="Sage Bot"
                  className="w-16 h-16 md:w-20 md:h-20  md:-translate-x-12 -rotate-[25deg]"
                />
                <span className="whitespace-nowrap text-center md:-translate-x-8  text-sm md:text-base">
                  Sage, Marketing Content Writer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="to-black w-full flex items-center justify-center text-white px-6 py-8 sm:py-12 md:py-32  relative">
        <div className="absolute right-0 opacity-90  -z-0">
          <BlurredCircle />
        </div>
        <div className="bg-gradient-to-b from-gray-900 to-black px-4 sm:px-8 md:px-12 lg:px-20 rounded-2xl py-10 max-w-screen-xl z-10">
          <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-300/80 to-teal-300/70 text-transparent bg-clip-text">
              World Class
            </span>{" "}
            Companies
          </h3>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-2 sm:mt-10 max-w-4xl mx-auto">
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
                className="bg-black p-4 sm:p-6 rounded-lg shadow-lg "
              >
                <div className="flex flex-row gap-1 items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                  "{testimonial.review}"
                </p>
                <div className="mt-4 flex items-center gap-3">
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
          {/* <div className="mt-6 sm:mt-16 flex justify-center items-center gap-4 text-gray-400">
            <button className="px-2 sm:px-3 py-1 rounded-full bg-gray-800">
              {"<"}
            </button>
            <span className="text-xs sm:text-sm">1 / 7</span>
            <button className="px-2 sm:px-3 py-1 rounded-full bg-gray-800">
              {">"}
            </button>
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-2 sm:py-12 md:py-16 px-7 sm:px-8 md:px-12 lg:px-20 bg-black text-white relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 z-10">
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
          <div className="md:w-1/2 space-y-3 sm:space-y-4">
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
          </div>
        </div>
      </section>
    </div>
  );
}
