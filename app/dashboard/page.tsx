"use client";

import React, { useState, useEffect } from "react";
import DashboardCards from "@/components/DashboardCards";
import BlurredCircle from "../../components/BlurredCircle";
import BlurredEllipse from "../../components/BlurredEllipse";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { LayoutGridIcon, Loader2Icon, PlusIcon } from "lucide-react";

export default function DashboardPage() {
  const [chatbots, setChatbots] = useState<any[]>([]);
  const [userId, setUserId] = useState<any>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [plan, setPlan] = useState<string>("FREE");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPurchasing, setIsPurchasing] = useState<boolean>(false);

  const supabase = createClient();

  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);

      // Fetch user and their plan in a single call
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError || !user) {
        console.error("Error getting user:", userError);
        setIsLoading(false);
        return;
      }

      console.log(user);
      setUserId(user.id);
      setUserEmail(user.email ?? "");

      // Fetch user plan
      const { data: userPlanData, error: planError } = await supabase
        .from("users")
        .select("plan_sub")
        .eq("userID", user.id)
        .single();

      if (planError) {
        console.error("Error fetching user plan:", planError);
      } else {
        setPlan(userPlanData?.plan_sub?.toLowerCase() || "free");
      }

      // Fetch chatbots for the logged-in user
      const { data, error } = await supabase
        .from("chatbots")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching chatbots:", error);
      } else {
        setChatbots(data);
      }

      setIsLoading(false);
    }

    fetchUserData();
  }, [supabase]);

  // Define chatbot limits
  const chatbotLimit = plan === "pro" ? 1 : 0;
  const hasReachedLimit = chatbots.length >= chatbotLimit;

  const createCheckoutSession = async (userId: string, userEmail: string) => {
    setIsPurchasing(true);
    console.log(userId, userEmail);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          userEmail,
          priceId: "price_1QzdpULSawqmEqNTbYbWNmre",
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.url) {
        setIsPurchasing(false);
        window.location.href = data.url;
      } else {
        console.error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Map chatbots to expected format for DashboardCards
  const chatbotCards = chatbots.map((bot) => ({
    id: bot.chatbot_id, // Added chatbot id
    image: bot.image || "/images/1.png", // fallback image if none provided
    alt: bot.name,
    title: bot.name,
    subtitle: bot.description || "Chatbot",
    capacity: 0, // adjust or remove as needed
  }));

  return (
    <>
      {isLoading ? (
        <div className="py-32 flex items-center justify-center w-fit mx-auto ">
          <Loader2Icon className="w-12 h-12 text-white animate-spin rotate-360" />
        </div>
      ) : (
        <div className="p-8 bg-black min-h-[80vh] relative flex items-center justify-center">
          <div className="absolute left-0 opacity-90">
            <BlurredCircle />
          </div>
          <div className="absolute right-0 opacity-90 scale-x-[-1]">
            <BlurredCircle />
          </div>

          {plan === "pro" ? (
            <>
              {(chatbots?.length ?? 0) ? (
                <div className="max-w-screen-xl flex flex-col self-start  w-full">
                  <div className="flex justify-between items-center w-full mb-6 max-w-screen-xl z-10  ">
                    <h1 className="text-3xl font-semibold text-white flex flex-row gap-2 items-center">
                      <LayoutGridIcon className="w-6 h-6 text-white" />
                      Dashboard
                    </h1>

                    <Link
                      href={hasReachedLimit ? "#" : `/create-chatbot/${userId}`}
                    >
                      <button
                        className={` flex flex-row items-center gap-2   text-white px-6 py-2 rounded-full transition ${
                          hasReachedLimit
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500 hover:bg-blue-600 text-white"
                        }`}
                        disabled={hasReachedLimit}
                      >
                        {!hasReachedLimit ? (
                          <>
                            <PlusIcon className="w-6 h-6 text-white" /> Create a
                            New Chatbot
                          </>
                        ) : (
                          <>Limit Exceeded</>
                        )}
                      </button>
                    </Link>
                  </div>
                  <div className="p-2 rounded-xl">
                    <DashboardCards cards={chatbotCards} />
                  </div>
                </div>
              ) : (
                <>
                  <section className="flex flex-col md:flex-row z-[50] h-[70vh]  max-h-[600px] items-center justify-center gap-12 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
                    {/* Left Side - Text & Button */}
                    <div className="max-w-xl text-center md:text-left text-white">
                      <h2 className="text-4xl lg:text-6xl font-semibold w-full  leading-tight">
                        <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                          No Agents
                        </span>
                        <span> Have Been Queued for </span>
                        <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-teal-100 text-transparent bg-clip-text">
                          Work!
                        </span>
                      </h2>
                      <p className="text-gray-400 mt-8 text-sm sm:text-base">
                        Click on the "Create Agent" button to queue the Chatbot
                        Developer Agent and let it handle the work for you
                        effortlessly. Watch as it automates tasks, optimizes
                        performance, and enhances your chatbot development
                        experience!
                      </p>

                      {hasReachedLimit ? (
                        <button
                          onClick={() => {
                            createCheckoutSession(userId, userEmail);
                          }}
                          className={`px-6 py-2 rounded-full cursor-pointer   text-white  hover:bg-blue-600 mt-8 bg-[#7B8CE5] disabled:bg-gray-600  text-white"`}
                          disabled={isPurchasing}
                        >
                          {isPurchasing ? (
                            <span>Please Wait ...</span>
                          ) : (
                            <>Buy the Agent</>
                          )}
                        </button>
                      ) : (
                        <Link href={`/create-chatbot/${userId}`}>
                          <button
                            className={`px-6 py-2 rounded-full transition mt-8 bg-[#7B8CE5] hover:bg-blue-600 text-white`}
                          >
                            Create a Chatbot
                          </button>
                        </Link>
                      )}

                      {hasReachedLimit && (
                        <p className="text-red-400 mt-2 text-sm">
                          Subscribe to Pro plan to increase limit to 5 chatbots.
                        </p>
                      )}
                    </div>

                    {/* Right Side - Bot Image */}
                    <div className="w-full md:w-[35%] flex justify-center overflow-hiden">
                      <div className="relative ">
                        <div className="relative w-[300px] lg:w-[610px]   mx-auto xl:translate-x-[10%] h-auto flex items-center justify-center z-[10]">
                          <Image
                            src="/images/2.png"
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
                </>
              )}
            </>
          ) : (
            <>
              <section className="flex flex-col md:flex-row z-20 h-[70vh]  max-h-[600px] items-center justify-center gap-12 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16">
                {/* Left Side - Text & Button */}
                <div className="max-w-xl text-center md:text-left text-white">
                  <h2 className="text-4xl lg:text-6xl font-semibold w-full  leading-tight">
                    <span className="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-300 text-transparent bg-clip-text">
                      You are on
                    </span>
                    <span> Free </span>
                    <span className="bg-gradient-to-r from-pink-300 via-pink-200 to-teal-100 text-transparent bg-clip-text">
                      Plan
                    </span>
                  </h2>
                  <p className="text-gray-400 mt-8 text-sm sm:text-base">
                    Click on the "Buy Agent" button to queue the Chatbot
                    Developer Agent and let it handle the work for you
                    effortlessly. Watch as it automates tasks, optimizes
                    performance, and enhances your chatbot development
                    experience!
                  </p>

                  <button
                    onClick={() => {
                      createCheckoutSession(userId, userEmail);
                    }}
                    className={`px-6 py-2 rounded-full cursor-pointer   text-white  hover:bg-blue-600 mt-8 bg-[#7B8CE5] disabled:bg-gray-600  text-white"`}
                    disabled={isPurchasing}
                  >
                    {isPurchasing ? (
                      <span>Please Wait ...</span>
                    ) : (
                      <>Buy the Agent</>
                    )}
                  </button>
                </div>

                {/* Right Side - Bot Image */}
                <div className="w-full md:w-[35%] flex justify-center overflow-hiden">
                  <div className="relative ">
                    <div className="relative w-[300px] lg:w-[610px]   mx-auto xl:translate-x-[10%] h-auto flex items-center justify-center z-[10]">
                      <Image
                        src="/images/2.png"
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
            </>
          )}
        </div>
      )}
    </>
  );
}
