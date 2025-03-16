"use client";

import React, { useState, useEffect } from "react";
import ChatWidgetPreview from "@/components/ChatWidgetPreview";
import EmbeddedCodeGenerator from "@/components/EmbedCodeGenerator";
import CustomizationForm from "@/components/CustomizationForm";
import { supabase } from "@/utils/supabase";
import BlurredCircle from "./BlurredCircle";
import { CheckIcon } from "lucide-react";

interface CustomIntegrationProps {
  userId: string;
  chatbotid: string;
}

const CustomIntegrationComponent: React.FC<CustomIntegrationProps> = ({
  userId,
  chatbotid
}) => {
  const [widgetColor, setWidgetColor] = useState("#2563eb");
  const [widgetPosition, setWidgetPosition] = useState("bottom-right");
  const [widgetMessage, setWidgetMessage] = useState(
    "Hi there! How can I help you?"
  );
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [apiKey, setApiKey] = useState("");

  // Generate API key on mount
  useEffect(() => {
    const generateApiKey = async () => {
      try {
        const response = await fetch("/api/generateKey");
        if (!response.ok) {
          throw new Error("Failed to fetch API key");
        }
        const data = await response.json();
        console.log("API Key:", data);
        setApiKey(data.apiKey);
      } catch (error) {
        console.error("Error generating API key:", error);
      }
    };
    generateApiKey();

    // Mark this component as client-side once mounted
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!userId) {
      alert("User ID is missing.");
      setLoading(false);
      return;
    }

    try {
      // 2. Construct the widget script
      const encodedMessage = encodeURIComponent(widgetMessage);
      const encodedColor = encodeURIComponent(widgetColor);
      const widgetScript = `<script src="https://api.agent-dispatch.com/chat-widget.js?api_key=${apiKey}&color=${encodedColor}&message=${encodedMessage}&position=${widgetPosition}"></script>`;

      // 3. Insert into 'custom_website_chatbots' table
      const { error: websiteChatbotError } = await supabase
        .from("custom_website_chatbots")
        .insert([
          {
            chatbot_id: chatbotid,
            api_key: apiKey,
            widget_script: widgetScript,
          },
        ]);

      if (websiteChatbotError) {
        throw new Error(
          `Error creating website chatbot: ${websiteChatbotError.message}`
        );
      }

      // 4. Redirect after successful insertion
      window.location.href = `/instruction/${chatbotid}`;
    } catch (error) {
      console.error("Error:", error);
      alert((error as Error).message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) {
    // Render nothing (or a loader) until we confirm we're in a client environment
    return null;
  }

  return (
    <div className="w-full flex flex-col items-center p-6 py-16 md:mt-16 md:mb-16  bg-gradient-to-t rounded-xl border   from-blue-800/10 to-purple-900/10  border-teal-100/10 text-white">
      <div className="absolute left-0 opacity-[0.7] -z-0 ">
        <BlurredCircle />
      </div>
      <div className="absolute right-0 opacity-[0.7] scale-x-[-1] -z-0 ">
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
          <div className="flex flex-col  items-center justify-center">
            <div className="rounded-full size-16 flex items-center justify-center p-1 border-2 border-gray-300">
              <div className="bg-gradient-to-tr from-blue-700/90 to-teal-700/30 text-white text-xl w-full h-full rounded-full flex items-center justify-center font-bold">
                3
              </div>
            </div>
          </div>

          <div className="w-24 h-[2px]  bg-blue-700/40"></div>

          <div className="flex flex-col  items-center justify-center">
            <div className="rounded-full size-14 flex items-center justify-center ">
              <div className="bg-gradient-to-tr from-blue-700/40 to-teal-700/30 text-gray-500/60 text-xl w-full h-full rounded-full flex items-center justify-center font-bold">
                4
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full max-w-xl ">
          <span className=" text-gray-200 text-lg translate-x-1">Train</span>
          <span className=" text-gray-200 text-lg ml-24 translate-x-6 ">
            Test
          </span>

          <span className=" text-white font-bold  text-lg ml-24 translate-x-6 ">
            Customize
          </span>

          <span className=" text-gray-500/60 text-lg  ml-24 translate-x-2 ">
            Deploy
          </span>
        </div>
      </div>
      <div className="text-center fleex flex-col z-[100] items-center justify-center">
        <h2 className="text-4xl lg:text-5xl mt-2 font-semibold w-full  leading-tight">
          <span className="bg-gradient-to-r from-white to-blue-300 text-transparent bg-clip-text">
            Customization!
          </span>{" "}
          As You Like.
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base max-w-4xl">
          Choose the colors, postion and integrate the agent into your website.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full z-[100] max-w-5xl space-y-4 mt-6"
      >
        {/* Customization Form */}
        <CustomizationForm
          widgetColor={widgetColor}
          setWidgetColor={setWidgetColor}
          widgetPosition={widgetPosition}
          setWidgetPosition={setWidgetPosition}
          widgetMessage={widgetMessage}
          setWidgetMessage={setWidgetMessage}
        />

        {/* Chat Widget Preview */}
        <section className="p-6 border border-gray-200 text-white rounded-lg shadow-md  bg-gradient-to-t  from-blue-800/10 to-purple-900/10  border-teal-100/10 ">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <p className="text-sm text-gray-500 mb-4">
            See how your chat widget will appear on your website.
          </p>
          <div className="relative w-full h-64 border border-dashed border-teal-700/50 rounded-lg  ">
            <ChatWidgetPreview
              widgetColor={widgetColor}
              widgetPosition={widgetPosition}
              widgetMessage={widgetMessage}
            />
          </div>
        </section>

        {/* Embed Code Section */}
        <section className="p-4 border rounded-lg bg-gradient-to-t  from-blue-800/10 to-purple-900/10  border-teal-100/10">
          <h2 className="text-lg font-semibold">Embed Code</h2>
          <EmbeddedCodeGenerator
            widgetColor={widgetColor}
            widgetPosition={widgetPosition}
            widgetMessage={widgetMessage}
            apikey={apiKey}
          />
        </section>

        <button
          type="submit"
          disabled={loading}
          className="px-10 py-4 rounded-full   border border-teal-700/30 w-full text-center bg-[#7B8CE5] justify-center flex flex-row items-center gap-3 to-black/0 text-white mt-6  hover:bg-indigo-300/80 transition"
        >
          {loading ? "Deploying..." : "Deploy the Bot"}
        </button>
      </form>
    </div>
  );
};

export default CustomIntegrationComponent;
