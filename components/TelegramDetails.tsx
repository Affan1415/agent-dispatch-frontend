"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TelegramDetailsProps {
  data: {
    telegram_bot_token: string;
    // Add any other fields you need to display
  };
}

const TelegramDetails: React.FC<TelegramDetailsProps> = ({ data }) => {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(data.telegram_bot_token);
    setCopyMessage("Token copied to clipboard!");
    setTimeout(() => setCopyMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <div className="max-w-3xl w-full bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Telegram Bot Details</h1>
        <p className="mb-6 text-gray-400">
          Your Telegram bot has been successfully created.
        </p>

        {/* Bot Token Section */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Bot Token
          </label>
          <div className="flex items-center gap-3">
            <input
              type="text"
              readOnly
              value={data.telegram_bot_token}
              className="w-full p-2 border border-gray-700 rounded-md bg-gray-800 text-white"
            />
            <Button
              onClick={handleCopy}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Copy
            </Button>
          </div>
          {copyMessage && (
            <p className="mt-2 text-green-400 text-sm">{copyMessage}</p>
          )}
        </div>

        {/* Integration Instructions Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Integration Instructions
          </h2>
          <p className="text-gray-400 mb-4">
            To integrate your Telegram bot, use the Telegram app or visit
            BotFather to manage your bot settings. You can customize integration
            options below.
          </p>
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
          <li>BotFather will provide you with an API token. Copy it.</li>
          <li>Paste the token below and submit.</li>
        </ol>
          <div className="flex flex-col gap-4">
            <Button className="bg-purple-500 hover:bg-purple-600">
              Use Telegram App
            </Button>
            <Button className="bg-green-500 hover:bg-green-600">
              Use BotFather Plugin
            </Button>
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              Custom Website Integration
            </Button>
          </div>
          <p className="mt-6 text-gray-400 text-sm">
            For more help, visit{" "}
            <Link
              href="https://t.me/botfather"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              BotFather
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TelegramDetails;
