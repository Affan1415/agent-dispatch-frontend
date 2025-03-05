"use client";
import React from "react";
import GlowEffect from "../components/GlowEffect";
import { Button } from "@/components/ui/button";
// Define the type for a single card
interface DashboardCard {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  capacity: number;
}

// Define the props for the component
interface DashboardCardsProps {
  cards: DashboardCard[];
}

const DashboardCards: React.FC<DashboardCardsProps> = ({ cards }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  mt-6 bg-gray-900/40 p-5 rounded-xl">
      {cards.map((card, index) => (
        <div key={index} className="relative w-full p-6 rounded-xl shadow-lg">
          <div
            className={`absolute inset-0 bg-gradient-to-t rounded-xl from-teal-800/20 to-purple-900/10 border border-teal-100/10 `}
          ></div>
          <div className="relative  z-10 text-white">
            <div className="relative mt-12">
              <img
                src={card.image}
                alt={card.alt}
                className="mx-auto h-42 z-[100]"
              />
              <div className="absolute top-0 left-0 -z-[10] opacity-70 scale-[1.6] translate-x-4 -translate-y-2 ">
                <GlowEffect color={"#7b8ce5"} />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-16">
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-gray-400 text-sm">{card.subtitle}</p>
              <p className="mt-2 text-sm">
                Current Capacity:{" "}
                <span className="font-bold">{card.capacity}</span>
              </p>
              <Button className="mt-4 bg-[#7B8CE5] hover:bg-purple-400">
                Details
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
