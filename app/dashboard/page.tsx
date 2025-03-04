"use client";
import React, { useState, useEffect } from "react";
import DashboardCards from "@/components/DashboardCards";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function DashboardPage() {
  const [chatbots, setChatbots] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    async function fetchChatbots() {
      // Get the currently logged-in user
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) {
        console.error("Error getting user:", userError);
        return;
      }
      const user = userData.user;
      if (!user) {
        console.error("User not logged in");
        return;
      }

      // Fetch chatbots only for the logged-in user by filtering on user_id
      const { data, error } = await supabase
        .from("chatbots")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Error fetching chatbots:", error);
      } else {
        setChatbots(data);
      }
    }
    fetchChatbots();
  }, [supabase]);

  // Map the fetched chatbots to the format expected by DashboardCards
  const chatbotCards = chatbots.map((bot) => ({
    image: bot.image || "/default-chatbot.png", // fallback image if none provided
    alt: bot.name,
    title: bot.name,
    subtitle: bot.description || "Chatbot",
    capacity: 0, // capacity field is not used; adjust or remove as needed
  }));

  return (
    <div className="p-8 bg-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
        <Link href="/dashboard/create-chatbot">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
            Create a Chatbot
          </button>
        </Link>
      </div>

      <DashboardCards cards={chatbotCards} />
    </div>
  );
}
