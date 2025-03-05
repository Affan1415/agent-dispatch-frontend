"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CreateChatBot() {
  const params = useParams();
  const userId = params?.userId as string; // Ensure that your route is /create-chatbot/[userId]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <div className="w-full max-w-5xl text-center">
        <h2 className="text-3xl font-semibold">Your Agents</h2>
        <p className="text-gray-400 text-sm mb-6">
          Select an agent to view details.
        </p>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
        {[
          {
            id: 1,
            name: "Nova",
            role: "AI Assistant",
            image: "/images/1.png",
            capacity: 1,
          },
          {
            id: 2,
            name: "Lumi",
            role: "Sales Strategist",
            image: "/images/2.png",
            capacity: 2,
          },
        ].map((agent) => (
          <div
            key={agent.id}
            className="bg-gray-900 rounded-xl p-6 text-center shadow-lg flex flex-col items-center"
          >
            <img
              src={agent.image}
              alt={agent.name}
              className="w-28 h-28 mb-4"
            />
            <h3 className="text-xl font-bold">{agent.name}</h3>
            <p className="text-gray-400 text-sm">{agent.role}</p>
            <p className="mt-2 text-sm">
              Current Capacity:{" "}
              <span className="font-bold">{agent.capacity}</span>
            </p>
            <Link href={`/create-chatbot/${userId}/upload-pdf/${agent.id}`}>
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 w-full">
                Create
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
          <span className="text-3xl font-bold">+</span>
        </div>
      </div>
    </div>
  );
}
