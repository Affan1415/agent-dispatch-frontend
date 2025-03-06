import React from "react";
import { createClient } from "@/utils/supabase/server";
import CustomDetails from "@/components/CustomDetails";
import TelegramDetails from "@/components/TelegramDetails";

export default async function DetailsPage({ params }) {
  const { chatbotid } = params;
  const supabase = await createClient();

  // Fetch from custom_website_chatbots
  const { data: customData, error: customError } = await supabase
    .from("custom_website_chatbots")
    .select("*")
    .eq("chatbot_id", chatbotid)
    .single();

  if (customError) console.error("Error fetching custom chatbot:", customError);
  if (customData) return <CustomDetails widget_script={customData.widget_script} />;

  // Fetch from telegram_chatbots
  const { data: telegramData, error: telegramError } = await supabase
    .from("telegram_chatbots")
    .select("*")
    .eq("chatbot_id", chatbotid)
    .single();

  if (telegramError) console.error("Error fetching telegram chatbot:", telegramError);
  if (telegramData) return <TelegramDetails data={telegramData} />;

  // Default case if no chatbot is found
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-xl">Chatbot not found.</p>
    </div>
  );
}
