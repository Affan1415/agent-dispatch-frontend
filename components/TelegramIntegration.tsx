"use client";

import React, { useState } from "react";
import { supabase } from "@/utils/supabase";
import BlurredCircle from "./BlurredCircle";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CheckIcon } from "lucide-react";

interface TelegramBotSetupProps {
  userId: string;
  chatbotid: string;
}

export default function TelegramBotSetup({ userId, chatbotid }: TelegramBotSetupProps) {
  const [telegramToken, setTelegramToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isStepDone, setIsStepDone] = useState(false);

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
      chatbotId: chatbotid,
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

      setMessage("Redirecting to Dashboard");
      setIsStepDone(true);
      setTimeout(() => {
        setTelegramToken("");
        redirect("/dashboard");
      }, 2000);
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
    <div className="h-full flex items-center justify-center flex-col md:my-16  bg-gradient-to-t rounded-xl border   from-blue-800/20 to-purple-900/10  border-teal-100/10 w-full p-7">
      <div className="absolute left-0 opacity-90 ">
        <BlurredCircle />
      </div>
      <div className="absolute right-0 opacity-90 scale-x-[-1]  ">
        <BlurredCircle />
      </div>
      <div className="w-full max-w-screen-xl flex flex-col gap-2  mb-8 items-center justify-center text-gray-400">
        <div className="flex flex-row max-w-3xl w-full items-center justify-center">
          <div className="flex flex-col  items-center justify-center">
            <div className="rounded-full size-14 flex items-center border border-gray-200 justify-center ">
              <div className="bg-gradient-to-tr from-teal-700/80 to-teal-700/30 text-white text-xl w-full h-full rounded-full flex items-center justify-center font-bold">
                <CheckIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="w-24 h-[2px] bg-blue-700/40"></div>
          <div className="flex flex-col  items-center justify-center">
            <div className="rounded-full size-14 flex items-center border border-gray-200 justify-center ">
              <div className="bg-gradient-to-tr from-teal-700/80 to-teal-700/30 text-white text-xl w-full h-full rounded-full flex items-center justify-center font-bold">
                <CheckIcon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <div className="w-24 h-[2px] bg-blue-700/40"></div>
          {!isStepDone ? (
            <div className="flex flex-col  items-center justify-center">
              <div className="rounded-full size-16 flex items-center justify-center p-1 border-2 border-gray-300">
                <div className="bg-gradient-to-tr from-blue-700/90 to-teal-700/30 text-white text-xl w-full h-full rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col  items-center justify-center">
              <div className="rounded-full size-14 flex items-center border border-gray-200 justify-center ">
                <div className="bg-gradient-to-tr from-teal-700/80 to-teal-700/30 text-white text-xl w-full h-full rounded-full flex items-center justify-center font-bold">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row items-center justify-center w-full max-w-xl ">
          <span className={` text-gray-200 text-lg -translate-x-2`}>Train</span>
          <span className={` text-gray-200  text-lg ml-24 translate-x-2 `}>
            Test
          </span>

          {!isStepDone ? (
            <span
              className={` text-white font-bold text-lg  ml-24  translate-x-5`}
            >
              Deploy
            </span>
          ) : (
            <span className={` text-gray-200  text-lg ml-24 translate-x-4 `}>
              Deploy
            </span>
          )}
        </div>
      </div>
      <div className=" w-full mx-auto p-8   text-white shadow-lg z-20 rounded-xl">
        <div className="flex flex-row gap-4 items-center">
          <Image
            src="/images/telegram.png"
            alt="telegram"
            width={60}
            height={60}
          />
          <h2 className="text-4xl lg:text-6xl font-semibold w-full  leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 text-transparent bg-clip-text">
              Telegram!
            </span>
            <span> Set it up. </span>
          </h2>
        </div>
        <ol className="list-decimal list-inside text-gray-100 mb-6 space-y-1 mt-4">
          <li>
            Open Telegram and search for <strong>BotFather</strong>.
          </li>
          <li>
            Start a chat and use the command <code>/newbot</code>.
          </li>
          <li>Choose a name and a unique username for your bot.</li>
          <li>BotFather will provide you with an API token. Copy it.</li>
          <li>Paste the token below and submit.</li>
        </ol>
        <p className="mb-4 text-left">
          Need help?{" "}
          <a
            href="https://www.t.me/botfather"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-medium pl-2"
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
              className="w-full p-3 border border-teal-700/30 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400/80 to-blue-600/20 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
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
