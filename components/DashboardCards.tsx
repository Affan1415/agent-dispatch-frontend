"use client";
import React, { useEffect, useState } from "react";
import GlowEffect from "../components/GlowEffect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { supabase } from "@/utils/supabase";

// Define the type for a single card with a chatbot id
interface DashboardCard {
  id: string; // Chatbot ID
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  capacity: number;
}

// Define the props for the component
interface DashboardCardsProps {
  cards: DashboardCard[];
  hasReachedLimit: boolean;
  userId: string;
}

const agents = [
  {
    id: "1",
    name: "Nova - Social Media Manager",
    role: "AI Social Media Manager",
    description:
      "Seamlessly integrate a smart, interactive social media manager into your website with a single script. Enhance engagement, automate customer interactions, and streamline your online presence effortlessly!",
    image: "images/Sophia.png",
    price: "49",
    glowColor: "#68E4FF",
  },
  {
    id: "2",
    name: "Sophia - Customer Engagement Specialist",
    role: "Customer Service & Social Media Agent",
    description:
      "Deploy an intelligent customer engagement agent that seamlessly integrates with your website or social media. Improve interactions, automate responses, and ensure 24/7 support—all in minutes!",
    image: "images/Phone.png",
    price: "49",
    glowColor: "#DC75F5",
  },
  {
    id: "3",
    name: "Neon - eCommerce Expert",
    role: "eCommerce Expert (Coming Soon!)",
    description:
      "Your dedicated AI-driven eCommerce specialist for scaling online businesses. From store setup to product launches and seamless operations, optimize growth with ease!",
    image: "images/Business.png",
    price: "49",
    glowColor: "#68E4FF",
  },
];

interface DescProps {
  id: string;
}

const Desc: React.FC<DescProps> = ({ id }) => {
  const [description, setDescription] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Check custom_website_chatbots first
        const { data: customData } = await supabase
          .from("custom_website_chatbots")
          .select("*")
          .eq("chatbot_id", id)
          .single();

        if (customData) {
          setDescription(
            "Seamlessly integrate a smart, interactive social media manager into your website with a single script. Enhance engagement, automate customer interactions, and streamline your online presence effortlessly!"
          );
          setTitle("Sophia - Customer Service Agent Websites");
          return;
        }

        // Check telegram_chatbots if not found in custom_website_chatbots
        const { data: telegramData } = await supabase
          .from("telegram_chatbots")
          .select("*")
          .eq("chatbot_id", id)
          .single();

        if (telegramData) {
          setDescription(
            "Deploy an intelligent customer engagement agent that seamlessly integrates with your website or social media. Improve interactions, automate responses, and ensure 24/7 support—all in minutes!"
          );
          setTitle("Sophia - Social Media Agent");
          return;
        }

        // If not found in either table
        setDescription(null);
      } catch (error) {
        console.error("Error fetching chatbot details:", error);
        setDescription(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p className="text-sm mt-2 text-gray-400">Loading...</p>;
  }

  if (description) {
    return (
      <>
        <p className="mt-2 font-bold  text-lg">{title}</p>
        <p className="mt-2 text-sm text-gray-300">{description}</p>
      </>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <p className="text-xl">Chatbot not found.</p>
    </div>
  );
};

const DashboardCards: React.FC<DashboardCardsProps> = ({
  cards,
  hasReachedLimit,
  userId,
}) => {
  return (
    <div className="flex flex-col  mt-6 bg-gray-900/40 p-5 rounded-xl">
      <h1 className="text-2xl mb-4   text-gray-300 flex flex-row gap-2 items-center">
        Agents out in field.
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative min-h-[450px] w-[350px] lg:w-[340px]  p-6 rounded-xl shadow-lg"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-t rounded-xl from-teal-800/20 to-purple-900/10 border border-teal-100/10`}
            ></div>
            <div className="relative z-10 text-white">
              <div className="relative mt-12">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="mx-auto h-42 z-[100]"
                />
                <div className="absolute top-0 left-0 -z-[10] opacity-70 scale-[1.6] translate-x-4 -translate-y-2">
                  <GlowEffect color={"#7b8ce5"} />
                </div>
              </div>
              <div className="flex flex-col gap-1 mt-16">
                <h3 className="text-2xl font-bold">{card.title}</h3>

                <Desc id={card.id} />

                <p className="mt-2 text-sm">
                  Current Capacity:{" "}
                  <span className="font-bold">{card.capacity}</span>
                </p>
                <Link href={`/details/${card.id}`}>
                  <Button className="mt-4 bg-[#7B8CE5] w-full hover:bg-purple-400">
                    Analytics & Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
