"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ChatWidgetPreview from "@/components/ChatWidgetPreview";
import EmbeddedCodeGenerator from "@/components/EmbedCodeGenerator";
import CustomizationForm from "@/components/CustomizationForm";
import { supabase } from "@/utils/supabase";
 
const CustomIntegrationComponent = () => {
  const [widgetColor, setWidgetColor] = useState("#2563eb");
  const [widgetPosition, setWidgetPosition] = useState("bottom-right");
  const [widgetMessage, setWidgetMessage] = useState("Hi there! How can I help you?");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [apiKey, setApiKey] = useState("");
  
  // Extract userId from route parameters
  const params = useParams();
  const router = useRouter();
  const userid = params.userid as string;

  useEffect(() => {
    if (userid) {
      setUserId(userid);
    }
    setIsClient(true);
  }, [userid]);

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
      // Insert integration details into the custom_website_chatbot table
      const { error } = await supabase.from("custom_website_chatbot").insert([
        {
          color: widgetColor || null,
          position: widgetPosition || null,
          message: widgetMessage || null,
          user_id: userId,
          api_key: apiKey,
        },
      ]);

      if (error) throw new Error(`Error creating integration: ${error.message}`);

      // Redirect after successful insertion
      window.location.href = `/integrations/${userId}`;
    } catch (error) {
      console.error("Error:", error);
      alert((error as Error).message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  if (!isClient) {
    return null; // Ensure this component only renders client-side
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-white">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Create Custom Integration
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
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
        <section className="p-6 border border-gray-200 rounded-lg shadow-md bg-white">
          <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
          <p className="text-sm text-gray-500 mb-4">
            See how your chat widget will appear on your website.
          </p>
          <div className="relative w-full h-64 border border-dashed border-gray-300 rounded-lg bg-gray-100">
            <ChatWidgetPreview
              widgetColor={widgetColor}
              widgetPosition={widgetPosition}
              widgetMessage={widgetMessage}
            />
          </div>
        </section>

        {/* Embed Code Section */}
        <section className="p-4 border rounded-lg bg-gray-50">
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
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Integration"}
        </button>
      </form>
    </div>
  );
};

export default CustomIntegrationComponent;
