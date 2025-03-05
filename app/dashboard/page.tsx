"use client";
import React, { useState, useEffect } from "react";
import DashboardCards from "@/components/DashboardCards";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function DashboardPage() {
  const [chatbots, setChatbots] = useState<any[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [plan, setPlan] = useState<string>("FREE");
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

      setUserId(user.id);

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
  const chatbotLimit = plan === "pro" ? 5 : 1;
  const hasReachedLimit = chatbots.length >= chatbotLimit;

  // Map chatbots to expected format for DashboardCards
  const chatbotCards = chatbots.map((bot) => ({
    image: bot.image || "images/1.png",
    alt: bot.name,
    title: bot.name,
    subtitle: bot.description || "Chatbot",
    capacity: 0, // Adjust or remove as needed
  }));

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
        <div>
          <Link href={hasReachedLimit ? "#" : `/create-chatbot/${userId}`}>
            <button
              className={`px-6 py-2 rounded-full transition ${
                hasReachedLimit
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              disabled={hasReachedLimit}
            >
              Create a Chatbot
            </button>
          </Link>
          {hasReachedLimit && (
            <p className="text-red-400 mt-2 text-sm">
              Subscribe to Pro plan to increase limit to 5 chatbots.
            </p>
          )}
        </div>
      </div>
      {isLoading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <DashboardCards cards={chatbotCards} />
      )}
    </div>
  );
}
