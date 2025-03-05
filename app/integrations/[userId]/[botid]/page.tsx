"use client";

import React from "react";
import { useParams } from "next/navigation";
import TelegramIntegration from "@/components/TelegramIntegration";
import CustomBotIntegration from "@/components/CustomBotIntegration";

const Integrations: React.FC = () => {
  const params = useParams();
  // Expecting route parameters like /integrations/[botid]/[userid]
  const botid = params?.botid;
  const userId = params?.userId; // Extract user id from the route
//   console.log(params)

  return (
    <div className="flex min-h-screen bg-black text-white">
      {botid === "1" ? (
        <TelegramIntegration userId={userId} />
      ) : botid === "2" ? (
        <CustomBotIntegration userId={userId} />
      ) : (
        <p className="mt-6 text-center text-gray-400">
          No integration available.
        </p>
      )}
    </div>
  );
};

export default Integrations;
