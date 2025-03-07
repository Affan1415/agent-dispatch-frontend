"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import GlowEffect from "@/components/GlowEffect";
import BlurredCircle from "@/components/BlurredCircle";
import { createClient } from "@/utils/supabase/client";

export default function CreateChatBot() {
  const params = useParams();
  const userId = params?.userid as string; // Ensure that your route is /create-chatbot/[userId]
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push("/sign-in");
      }
    }
    checkAuth();
  }, [router, supabase]);

  return (
    <div className="min-h-[70vh] bg-black text-white flex flex-col items-center p-6 relative">
      <div className="absolute left-0 opacity-90 -z-0 -translate-y-64 ">
        <BlurredCircle />
      </div>
      <div className="absolute right-0 opacity-90 -z-0 scale-x-[-1] -translate-y-64 ">
        <BlurredCircle />
      </div>

      <div className="max-w-screen-xl flex items-center justify-center flex-col gap-12 ">
        <div className="w-full max-w-5xl text-center">
          <h2 className="text-5xl font-semibold">
            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-transparent bg-clip-text">
              Your Agents
            </span>
          </h2>
          <p className="text-gray-400 text-sm mt-4">
            Select an agent to create
          </p>
        </div>

        {/* Agents Grid */}
        <div className="flex flex-row gap-8 items-center justify-center ">
          {[
            {
              id: 1,
              name: "Nova",
              role: "Custom Service Chatbot Agent",
              image: "/images/1.png",
              capacity: 1,
            },
            {
              id: 2,
              name: "Lumi",
              role: "Social Media Messaging Chatbot Agent",
              image: "/images/2.png",
              capacity: 1,
            },
          ].map((agent) => (
            <div
              key={agent.id}
              className="relative w-[320px] p-6 rounded-xl shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-t rounded-xl from-teal-800/20 to-purple-900/10 border border-teal-100/10 `}
              ></div>
              <div className="relative z-10 text-white">
                <div className="relative mt-12">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="mx-auto h-42 z-[100]"
                  />
                  <div className="absolute top-0 left-0 -z-[10] opacity-70 scale-[1.6] translate-x-4 -translate-y-2 ">
                    <GlowEffect color={"#7b8ce5"} />
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-16">
                  <h3 className="text-2xl font-bold">{agent.name}</h3>
                  <p className="text-gray-400 text-sm">{agent.role}</p>
                  <p className="mt-2 text-sm">
                    Current Capacity:{" "}
                    <span className="font-bold">{agent.capacity}</span>
                  </p>
                  <Link href={`/create-chatbot/${userId}/upload-pdf/${agent.id}`}>
                    <Button className="mt-4 bg-[#7B8CE5] hover:bg-purple-400 w-full">
                      Create
                    </Button>
                  </Link>
                </div>
              </div>
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
    </div>
  );
}
