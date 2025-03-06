// app/details/[chatbotid]/page.tsx
import React from "react";
import { createClient } from "@/utils/supabase/server";
import CustomDetails from "@/components/CustomDetails";
import TelegramDetails from "@/components/TelegramDetails";

interface DetailsPageProps {
  params: {
    chatbotid: string;
  };
}

export default async function DetailsPage({ params }: DetailsPageProps) {
  const { chatbotid } = params;
  const supabase = await createClient();

  // Try to fetch the chatbot details from custom_website_chatbots first.
  const { data: customData, error: customError } = await supabase
    .from("custom_website_chatbots")
    .select("*")
    .eq("chatbot_id", chatbotid)
    .single();

  if (customError) {
    console.error("Error fetching custom website chatbot:", customError);
  }
  if (customData) {
    return <CustomDetails widget_script={customData.widget_script} />
    ;
  }

  // If not found, try fetching from telegram_chatbots.
  const { data: telegramData, error: telegramError } = await supabase
    .from("telegram_chatbots")
    .select("*")
    .eq("chatbot_id", chatbotid)
    .single();

  if (telegramError) {
    console.error("Error fetching telegram chatbot:", telegramError);
  }
  if (telegramData) {
    return <TelegramDetails data={telegramData} />;
  }

  // If no record is found in either table, show a not-found message.
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-xl">Chatbot not found.</p>
    </div>
  );
}
