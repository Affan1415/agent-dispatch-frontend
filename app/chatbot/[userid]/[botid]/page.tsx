"use client";

import { useState, useRef, useEffect } from "react";
import { InfoIcon } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProtectedPage() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false); // For typing indicator
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const params = useParams();
  const botid = params?.botid as string;

  useEffect(() => {
    const userid = params?.userid as string;
    if (userid) {
      console.log("User ID from params:", userid);
      setUserId(userid);
    }
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError("Prompt cannot be empty");
      return;
    }

    setError("");
    setMessages((prev) => [...prev, { text: prompt, isUser: true }]);
    setPrompt("");

    // Simulate bot typing
    setIsBotTyping(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined");
      }

      const res = await fetch(`${apiUrl}/chat/rag`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: prompt,
          user_id: userId,
          history: messages.slice(-5),
        }),
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response:", data);

      const responseText =
        data.response?.content && typeof data.response.content === "string"
          ? data.response.content
          : "No valid response from server";

      // Simulate streaming effect
      let displayedText = "";
      for (let i = 0; i < responseText.length; i++) {
        displayedText += responseText[i];
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { text: displayedText, isUser: false },
        ]);
        await new Promise((resolve) => setTimeout(resolve, 20)); // Adjust speed here
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch response");
    } finally {
      setIsBotTyping(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 w-full flex flex-col gap-6 p-4 sm:p-6 min-h-screen">
      {/* Chat Header */}
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Chat with RAG</h2>
        <div className="mt-4">
          <Link
            href={`/integrations/${userId}/${botid}`}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Go to Integrations
          </Link>
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col gap-4 bg-white rounded-lg shadow-lg p-4">
        <div className="flex-1 flex flex-col gap-4 overflow-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isUser
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isBotTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
