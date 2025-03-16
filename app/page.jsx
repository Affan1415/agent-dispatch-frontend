"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import AgentCarousel from "../components/AgentCarousel";
import Image from "next/image";

import {
  ChevronDown,
  ChevronUp,
  Globe,
  MessageCircle,
  Send,
  Users,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

const FAQs = [
  {
    question: "What can I use Agent Dispatch for?",
    answer:
      "Agent Dispatch helps automate customer support, task management, and AI-driven interactions for businesses.",
  },
  {
    question: "Can Sophia work on a website and my social media?",
    answer:
      "Yes! You can integrate Sophia with any website and Telegram for now, with more platforms coming soon.",
  },
  {
    question: "Does Agent Dispatch integrate with other software?",
    answer:
      "Currently, it works with Telegram and websites. Soon, Instagram, WhatsApp, and Facebook will be added.",
  },
  {
    question: "What do I do if I need a more custom AI solution?",
    answer:
      "Contact us on the Contact page and submit the form. We'll get back to you with a tailored solution!",
  },
  {
    question: "How do I get started?",
    answer:
      "Click on 'Get Started,' log in, upload your PDF, and your agent is ready to go!",
  },
];

export default function Home() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    };

    getUser();
  }, []); // Removed supabase from dependency array to avoid unnecessary re-fetches.

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

  const GlowEffect = ({ color }) => (
    <svg
      width="225"
      height="225"
      viewBox="0 0 365 365"
      className="scale-110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_77_165)">
        <circle
          cx="182.5"
          cy="182.5"
          r="125.5"
          fill={`url(#paint0_radial_77_165_${color})`}
          fillOpacity="0.7"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_77_165"
          x="0.91061"
          y="0.91061"
          width="363.179"
          height="363.179"
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
            stdDeviation="28.0447"
            result="effect1_foregroundBlur_77_165"
          />
        </filter>
        <radialGradient
          id={`paint0_radial_77_165_${color}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(182.5 182.5) rotate(90) scale(125.5)"
        >
          <stop stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
  const agents = [
    {
      id: "1",
      name: "Nova - Social Media Manager",
      role: "AI Social Media Manager",
      description:
        "Seamlessly integrate a smart, interactive social media manager into your website with a single script. Enhance engagement, automate customer interactions, and streamline your online presence effortlessly!",
      image: "images/Sophia.png",
      price: "49",
      glowColor: "#68E4FF",
    },
    {
      id: "2",
      name: "Sophia - Customer Engagement Specialist",
      role: "Customer Service & Social Media Agent",
      description:
        "Deploy an intelligent customer engagement agent that seamlessly integrates with your website or social media. Improve interactions, automate responses, and ensure 24/7 support—all in minutes!",
      image: "images/Phone.png",
      price: "49",
      glowColor: "#DC75F5",
    },
    {
      id: "3",
      name: "Neon - eCommerce Expert",
      role: "eCommerce Expert (Coming Soon!)",
      description:
        "Your dedicated AI-driven eCommerce specialist for scaling online businesses. From store setup to product launches and seamless operations, optimize growth with ease!",
      image: "images/Business.png",
      price: "49",
      glowColor: "#68E4FF",
    },
  ];

  return (
    <div className="h-full bg-black text-white relative overflow-x-hidden ">
      <Head>
        <title>AI-Powered Agents | Agent Dispatch</title>
      </Head>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row h-[40vh] lg:h-[80vh] mt-32 lg:mt-4 items-center justify-center relative w-full bg-[url('/images/bg.jpeg')] bg-cover bg-[position:-0%]">
        <div className="bg-gradient-to-b from-black/90 via-black/0 to-black/90 absolute w-full h-full z-0"></div>

        <div className="bg-gradient-to-r from-black/80 via-black/0 to-black/80 absolute w-full h-full z-0"></div>
        <div className="max-w-screen-xl flex flex-row z-[10] items-center justify-centergap-12 sm:gap-8 px-7 sm:px-0   py-8 sm:py-12 md:py-16">
          <div className="max-w-3xl text-center md:text-left bg-gradient-to-r from-black/20 via-black/0 to-black/10 backdrop-blur-lg p-10 lg:p-16 rounded-xl border border-blue-400/20 ">
            <h2 className="text-4xl lg:text-6xl font-semibold w-full  leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                Your employees that never sleep!
              </span>
            </h2>
            <p className="text-gray-400 mt-8 text-sm sm:text-base mb-8">
              Agent-Dispatch is your all-in-one command center to streamline
              operations, boost productivity, and maximize profits. Manage and
              coordinate your agents effortlessly! anytime, anywhere!
            </p>
            <Link
              href="/pricing"
              className="mt-16  bg-[#7B8CE5] px-4 sm:px-6 py-2 sm:py-3  text-white font-semibold hover:bg-blue-600 transition rounded-full"
            >
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* AI Models Section */}

      <section className="py-8 mt-32 md:mt-8 sm:mt-0 sm:py-12 flex z-50 items-center justify-center md:py-32">
        <div className="max-w-screen-xl px-7 sm:px-8 md:px-12 lg:px-20 w-full flex flex-col items-center justify-center gap-12 ">
          <h1 className="text-2xl md:text-4xl text-center lg:text-3xl max-w-[750px] font-medium ">
            The Next Generation of AI Workforce, Tailored to Your business.
            Transforming Work into Effortless Efficiency.
          </h1>

          <div className="w-[40%] lg:mt-4   h-[1px] bg-gradient-to-r from-purple-400 via-blue-500 to-green-300"></div>
        </div>
      </section>

      <section
        id="agents"
        className="py-0 sm:py-12 flex items-center justify-center md:py-0 relative lg:mb-8"
      >
        <div className="absolute left-0 opacity-90 ">
          <BlurredCircleLeft />
        </div>

        <div className="bg-black flex-col  max-w-screen-xl w-full flex justify-center items-center">
          <h2 className="text-4xl text-center lg:text-6xl font-semibold w-full   leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
              Our Agents
            </span>
          </h2>
          <div className="relative flex items-center justify-center  mt-8 md:mt-32 md:mb-32">
            <div className="relative flex o w-full flex-col  items-center justify-center">
              <div className="flex flex-col lg:flex-row gap-6 transition-transform duration-500">
                {agents.map((agent, i) => (
                  <div
                    key={agent.name}
                    className={`relative w-[350px] lg:w-[360px] p-6 rounded-xl shadow-lg ${i === 0 ? "lg:-translate-x-8" : ""} ${i === 1 ? "lg:scale-[1.2] lg:z-10 lg:shadow-3xl lg:shadow-blue-700/20 lg:w-[350px]" : "w-[320]"} ${i === 2 ? "lg:translate-x-8" : ""}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-t rounded-xl from-blue-800/20 to-purple-900/10 border border-teal-100/10 `}
                    ></div>
                    <div className="relative  flex flex-col justify-between h-full z-10 ">
                      <div className="relative mt-12">
                        <img
                          src={agent.image}
                          alt={agent.name}
                          className="mx-auto h-48 z-[100]"
                        />
                        <div className="absolute top-0 left-0 -z-[10] opacity-70 scale-125 translate-x-4 -translate-y-2 ">
                          <GlowEffect color={agent.glowColor} />
                        </div>
                        {agent.id === "1" && (
                          <div className="absolute flex flex-row  left-0 right-0 bottom-0 translate-y-6">
                            <img
                              src={"/images/wix.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] -translate-y-12 translate-x-4 shadow-xl"
                            />
                            <img
                              src={"/images/shopify.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] translate-y-2 -translate-x-2 shadow-xl"
                            />
                            <img
                              src={"/images/Webflow.svg"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] translate-y-2 translate-x-2 shadow-xl"
                            />
                            <img
                              src={"/images/wordpress.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] -translate-y-12 -translate-x-4 shadow-xl"
                            />
                          </div>
                        )}
                        {agent.id === "2" && (
                          <div className="absolute flex flex-row  left-0 right-0 bottom-0 translate-y-6">
                            <img
                              src={"/images/whatsapp.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] -translate-y-12 translate-x-4 shadow-xl"
                            />
                            <img
                              src={"/images/telegram.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] translate-y-2 -translate-x-2 shadow-xl"
                            />
                            <img
                              src={"/images/instagram.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] translate-y-2 translate-x-2 shadow-xl"
                            />
                            <img
                              src={"/images/communication.png"}
                              alt={agent.name}
                              className="mx-auto h-6 z-[100] -translate-y-12 -translate-x-4 shadow-xl"
                            />
                          </div>
                        )}{" "}
                      </div>
                      <h4 className="text-xl font-semibold text-white mt-24">
                        {agent.name}
                      </h4>
                      <p className="text-white font-medium mt-4">
                        {agent.role}
                      </p>
                      <p className="text-gray-400 text-md  mt-6">
                        {agent.description}
                      </p>

                      <p className="text-4xl text-white mt-8  ">
                        ${agent.price}{" "}
                        <span className="text-xl text-gray-500">/ month</span>
                      </p>
                      {user ? (
                        agent.id === 1 ? (
                          <button
                            onClick={() => {
                              createCheckoutSession(user.id, user.email);
                            }}
                            className="bg-[#7b8de570] self-end w-full px-6 py-2 rounded-lg mt-6 text-white  transition-all duration-300 hover:bg-indigo-600 hover:scale-105"
                          >
                            Get the Agent
                          </button>
                        ) : (
                          <button className="bg-[#7b8de570] self-end w-full px-6 py-2 rounded-lg mt-6 text-white  transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                            Coming Soon
                          </button>
                        )
                      ) : (
                        <Link href="/sign-in">
                          <p className="bg-[#7b8de570] text-center w-full px-6 py-2 rounded-lg mt-6 text-white  transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                            Get the Agent
                          </p>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Availability */}
      <section className="py-8 sm:py-12 md:py-32 gap-32 flex items-center justify-center relative">
        <div className="absolute right-0 opacity-90 -z-0 ">
          <BlurredCircle />
        </div>
        <div className="max-w-screen-xl items-center justify-between z-10 flex flex-col lg:flex-row w-full gap-12  px-7 sm:px-8 md:px-12 lg:px-20 ">
          <div className=" max-w-4xl  flex items-center justify-center flex-col text-center md:text-left w-full ">
            <h3 className="text-2xl sm:text-2xl md:text-3xl w-full font-semibold text-center ">
              <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 text-transparent bg-clip-text">
                A Tireless Workforce, Always on Duty.
              </span>
            </h3>
            <p className="text-gray-300 max-w-xl mt-4 text-sm sm:text-base text-center font-light">
              <span className="font-semibold">Available 24/7,</span> our
              Al-powered agents work{" "}
              <span className="font-semibold">around the clock,</span> so you
              don't have to.{" "}
              <span className="font-semibold">
                Automate tasks, enhance customer support,
              </span>{" "}
              and maximize efficiency while{" "}
              <span className="font-semibold">saving valuable time.</span>{" "}
            </p>

            <p className="text-gray-300 max-w-xl  text-sm sm:text-base font-light text-center mt-8">
              Break barriers and scale globally with Al that speaks,
              understands, and delivers in{" "}
              <span className="font-semibold">over 100 languages.</span>{" "}
            </p>
            <p className="text-gray-300 max-w-xl  text-sm sm:text-base font-light mt-8">
              {"    "}
            </p>
            <h3 className="text-2xl sm:text-2xl md:text-3xl  text-center font-semibold">
              <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-200 text-center  text-transparent bg-clip-text">
                A Tireless Workforce, Always on Duty.
              </span>
            </h3>
            <p className="text-gray-300 max-w-xl mt-4 text-sm sm:text-base text-center font-light">
              Your <span className="font-semibold">Al team learns</span> the ins
              and outs of your business, delivering accurate and personalized
              responses. <span className="font-semibold">Simply</span> upload
              files, share instructions, or{" "}
              <span className="font-semibold">integrate</span> your website—the
              more they know, the better they perform.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full flex md:items-end md:justify-end gap-2 z-10 md:gap-6 flex-col  max-w-fit">
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
        className="relative py-16 md:py-20  text-white px-7 sm:px-8 md:px-12 w-full lg:px-20 h-auto overflow-hidden"
      >
        {/* Floating Integration Cards */}
        <section
          id="features"
          className="relative py-16 md:py-24 text-white px-7 sm:px-8 md:px-12 w-full lg:px-20 h-auto overflow-hidden"
        >
          {/* Centered Text */}
          <div className="text-center flex flex-col items-center justify-center w-full mx-auto">
            <h2 className="text-4xl lg:text-6xl max-w-4xl font-semibold w-full  leading-tight">
              <span className="bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                Tailored to Your Business, Just Like Real Employees.
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mt-4 lg:mt-8 text-sm sm:text-base text-center">
              Your AI team learns the ins and outs of your business, giving
              personalized answers about your brand. Upload files, share
              instructions, or link your website to enhance results—the more
              they know, the better they perform.
            </p>
          </div>

          {/* Floating Integration Cards */}
          <div className="relative w-full h-auto mt-8 sm:mt-12 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl px-4 sm:px-0">
              {/* 24/7 AI Agents */}
              <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
                <MessageCircle className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">
                    24/7 AI Agents
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    AI-powered agents handle customer interactions around the
                    clock.
                  </p>
                </div>
              </div>

              {/* Tailored AI Solutions */}
              <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
                <Globe className="w-6 h-6 sm:w-12 sm:h-12 text-white" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">
                    Tailored AI Solutions
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    AI agents that adapt to your brand’s voice and business
                    needs.
                  </p>
                </div>
              </div>

              {/* Smart Integrations */}
              <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
                <Send className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">
                    Smart Integrations
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Connect seamlessly with your favorite tools and platforms.
                  </p>
                </div>
              </div>

              {/* Continuous Learning & Insights */}
              <div className="bg-gray-900 p-4 sm:p-5 rounded-xl shadow-md flex items-center gap-3 sm:gap-4 min-w-[260px] hover:scale-105 transition duration-300">
                <Users className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">
                    Continuous Learning
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    AI agents improve over time, learning from past
                    interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Bot Image at Bottom Right */}
      </section>

      <section className="py-8 sm:py-12 md:py-16 gap-32 flex items-center justify-center relative">
        <div className="absolute right-0  opacity-90 -z-0 ">
          <BlurredCircle />
        </div>
        <div className="max-w-screen-xl items-center justify-between z-10 flex flex-col lg:flex-row w-full gap-12  px-7 sm:px-8 md:px-12 lg:px-20 ">
          <div className=" max-w-4xl  flex flex-col items-center justify-center text-center md:text-left w-full ">
            <h3 className="text-2xl sm:text-2xl text-center md:text-6xl w-full font-semibold  ">
              <span className="bg-gradient-to-r  from-blue-300 via-purple-200 to-pink-200 text-transparent bg-clip-text">
                A co-worker who's always on the clock.
              </span>
            </h3>
            <p className="text-gray-300 max-w-xl text-center mt-6 text-sm sm:text-base  font-light">
              Available 24/7. The only employees who love overtime. Always ready
              to save your most valuable asset your time.
            </p>

            <p className="text-gray-300 max-w-xl text-center  text-sm sm:text-base font-light  mt-8">
              Speaks in 100+ languages. Go global, select, communicate, and
              complete your work in over 100 languages.
            </p>
            <p className="text-gray-300 max-w-xl  text-sm sm:text-base font-light mt-8">
              {"    "}
            </p>
          </div>

          {/* Right Content */}
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
        </div>
      </section>

      {/* Tools Integration Grid */}
      <section className=" text-white py-16 md:py-32 flex items-center justify-center w-full relative ">
        <div className="absolute left-0 opacity-90  -z-0">
          <BlurredCircleLeft />
        </div>
        <div className="max-w-screen-xl px-7 sm:px-8 md:px-12 lg:px-20 w-full z-10">
          <div className="text-center md:text-left items-center justify-center flex flex-col w-full mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-center  max-w-3xl ">
              Seamlessly Connect with Your Favorite Tools.
            </h3>
            <p className="text-gray-400 mt-4 md:mt-6 text-center text-sm sm:text-base max-w-2xl">
              Enhance your workflow by uniting AI-powered assistants with the
              tools you already use. Smart automation makes managing
              integrations smoother than ever.
            </p>
          </div>

          {/* Grid Layout for Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 bg-gradient-to-tr from-purple-400/30 via-blue-600/40 to-teal-300/20   p-[1px] md:grid-cols-4 gap-[1px]  w-full   mt-8 sm:mt-16  mx-auto">
            {[
              { name: "Whatsapp", logo: "images/whatsapp.png" },
              { name: "Instagram", logo: "images/instagram.png" },
              { name: "Shopify", logo: "images/shopify.png" },
              { name: "Wix", logo: "images/wix.png" },
              { name: "telegram", logo: "images/telegram.png" },
              { name: "wordpress", logo: "images/wordpress (1).png" },
              { name: "Facebook", logo: "images/communication.png" },
              { name: "Webflow", logo: "images/Webflow.svg" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="p-4 sm:p-6 bg-black flex items-center flex-col gap-3 justify-center "
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="size-6 sm:size-8 md:size-16 rounded-lg "
                />
                <span className=" tracking-wide">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chat Bubbles Section */}
      <section className="py-8 sm:py-12 md:py-16 gap-32 flex items-center justify-center relative">
        <div className="absolute right-0 opacity-90 -z-0 ">
          <BlurredCircle />
        </div>
        <div className="max-w-screen-xl items-center justify-between z-10 flex flex-col lg:flex-row w-full gap-12  px-7 sm:px-8 md:px-12 lg:px-20 ">
          {/* Right Content */}
          <div className="w-full md:w-[30%]  flex justify-center overflow-hiden">
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
          <div className=" max-w-5xl  lg:ml-24  flex items-center justify-center flex-col text-center md:text-left w-full ">
            <h3 className="text-2xl sm:text-2xl text-center md:text-6xl w-full font-semibold  ">
              <span className="bg-gradient-to-r  from-blue-300 via-purple-200 to-pink-200 text-transparent bg-clip-text">
                Work Gets Done - Even While You Rest.
              </span>
            </h3>
            <p className="text-gray-300 text-center max-w-xl mt-6 text-sm sm:text-base  font-light">
              Let AI handle the routine — automate tasks like creating social
              media posts, responding to comments, and more with powerful
              business automation tools.
            </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-2 sm:mt-10 max-w-4xl mx-auto">
            {[
              {
                name: "Emma Clarke",
                title: "Head of Support, Nexora Solutions",
                review:
                  "Sophia Customer Engagement Agent has transformed our support system! It instantly handles queries, resolves issues efficiently, and has improved our response time by 70%. Our customers love the seamless experience!",
              },
              {
                name: "Daniel Foster",
                title: "Marketing Lead, Virex Media",
                review:
                  "The Sophia Social Media Agent on Telegram is a lifesaver! It manages all customer inquiries efficiently and provides instant responses. I can't imagine how we handled customer queries before!",
              },
              {
                name: "Samantha Rodriguez",
                title: "Founder, EcomEase",
                review:
                  "I was skeptical at first, but Sophia AI exceeded my expectations. The customer engagement agent provides round-the-clock support, reducing workload for my team while ensuring a great customer experience.",
              },
              {
                name: "Liam Harrison",
                title: "Community Manager, Digitech Group",
                review:
                  "Using Sophia Social Media Agent on Telegram has significantly boosted our engagement. It responds to messages, shares updates, and interacts with users in real time. A must-have for any brand!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-black p-4 sm:p-6 rounded-lg shadow-lg "
              >
                <div className="flex flex-row gap-1 items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index}>⭐️</div>
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
      <section className="py-12 px-7 sm:px-8 md:px-12 lg:px-20 bg-black text-white relative">
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
          <div className="md:w-1/2 space-y-3 sm:space-y-4 duration-200 ease-in-out transition-all">
            {FAQs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4 text-left"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {faqOpen === index ? (
                    <ChevronUp className="text-gray-400 w-5 h-5" />
                  ) : (
                    <ChevronDown className="text-gray-400 w-5 h-5" />
                  )}
                </button>
                {faqOpen === index && (
                  <p className="p-4 text-gray-300 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
