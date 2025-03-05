"use client";

import React, { useState } from "react";
import { supabase } from "@/utils/supabase";

interface TelegramBotSetupProps {
  userId: string;
}

export default function TelegramBotSetup({ userId }: TelegramBotSetupProps) {
  const [telegramToken, setTelegramToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!telegramToken) {
      setMessage("Please enter a valid Telegram bot token.");
      return;
    }
    setLoading(true);
    setMessage("");

    // Data payload to be sent
    const payload = {
      userID: userId,
      telegram_bot_token: telegramToken,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined in the environment variables.");
      }
      console.log("UserID:", userId);
      const response = await fetch(`${apiUrl}/telegram/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const apiResult = await response.json();
      console.log(apiResult);
      if (!response.ok)
        throw new Error(apiResult.message || "Failed to send data to API");

      setMessage("Bot token successfully saved and sent to API!");
      setTelegramToken("");
    } catch (err) {
      if (err instanceof Error) {
        setMessage(`Error: ${err.message}`);
      } else {
        setMessage("An unknown error occurred");
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white p-4">
      <div className="max-w-lg w-full mx-auto p-8 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Set Up Your Telegram Bot
        </h2>
        <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-1">
          <li>
            Open Telegram and search for <strong>BotFather</strong>.
          </li>
          <li>
            Start a chat and use the command <code>/newbot</code>.
          </li>
          <li>Choose a name and a unique username for your bot.</li>
          <li>
            BotFather will provide you with an API token. Copy it.
          </li>
          <li>Paste the token below and submit.</li>
        </ol>
        <p className="mb-4 text-center">
          Need help?{" "}
          <a
            href="https://www.t.me/botfather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Open BotFather Chat
          </a>
        </p>

        {userId ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Telegram Bot Token"
              value={telegramToken}
              onChange={(e) => setTelegramToken(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Token"}
            </button>
          </form>
        ) : (
          <p className="text-red-500">User ID not found. Please try again.</p>
        )}

        {message && (
          <p className="mt-6 text-center text-sm text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
