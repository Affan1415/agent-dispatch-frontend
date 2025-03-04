"use client";

import { useState, useRef, useEffect } from "react";
import { InfoIcon } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProtectedPage() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState("");
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
    const trimmedMessages = messages.slice(-5);
    console.log("Trimmed Messages Before Sending:", trimmedMessages);
    try {
      // Get API URL from env variables
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
          history: trimmedMessages,
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

      setMessages((prev) => [...prev, { text: responseText, isUser: false }]);
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to fetch response");
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 w-full flex flex-col gap-6 p-6">
      <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
        <InfoIcon size="16" strokeWidth={2} />
        This is a protected page. You can only see it as an authenticated user.
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl">Chat with RAG</h2>
        <div className="mt-6">
          <Link
            href={`/integrations/${userId}/${botid}`}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
          >
            Go to Integrations
          </Link>
        </div>
        <div className="flex flex-col gap-4 max-h-[400px] overflow-auto p-4 border rounded-lg bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs p-3 mb-3 rounded-lg text-sm ${
                  message.isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-4 mt-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
            className="p-3 border rounded w-full shadow-sm"
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
