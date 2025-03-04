"use client";
import React from "react";
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
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-xl p-6 text-center shadow-lg"
        >
          <img
            src={card.image}
            alt={card.alt}
            className="mx-auto w-24 h-24 mb-4"
          />
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-gray-400 text-sm">{card.subtitle}</p>
          <p className="mt-2 text-sm">
            Current Capacity: <span className="font-bold">{card.capacity}</span>
          </p>
          <Button className="mt-4 bg-blue-500 hover:bg-blue-600">
            Details
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
