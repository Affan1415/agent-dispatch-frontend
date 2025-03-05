"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/utils/supabase";

const IntegrationInstructionsPage = () => {
  const params = useParams();
  const chatbotId = params?.chatbot_id as string; // Expecting route: /instructions/[chatbot_id]
  const [widgetScript, setWidgetScript] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedIntegration, setSelectedIntegration] = useState<
    "wordpress" | "shopify" | "custom"
  >("wordpress");

  useEffect(() => {
    const fetchWidgetScript = async () => {
      if (!chatbotId) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("custom_website_chatbots")
        .select("widget_script")
        .eq("chatbot_id", chatbotId)
        .single();
      if (error) {
        console.error("Error fetching widget script:", error);
      } else if (data) {
        setWidgetScript(data.widget_script);
      }
      setLoading(false);
    };

    fetchWidgetScript();
  }, [chatbotId]);

  const handleCopy = () => {
    if (widgetScript) {
      navigator.clipboard.writeText(widgetScript);
      alert("Widget script copied to clipboard!");
    }
  };

  const renderInstructions = () => {
    switch (selectedIntegration) {
      case "wordpress":
        return (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              WordPress Integration
            </h3>
            <p>
              To integrate your chat widget into WordPress, install a plugin
              like <strong>"Insert Headers and Footers"</strong> or use a custom
              HTML widget. Paste the script code in your theme’s header or
              footer. Consult the plugin documentation for further guidance.
            </p>
          </div>
        );
      case "shopify":
        return (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Shopify Integration</h3>
            <p>
              For Shopify, edit your theme's <code>theme.liquid</code> file and
              paste the script tag right before the closing{" "}
              <code>&lt;/body&gt;</code> tag. Alternatively, use an app that
              allows you to add custom scripts. This will load the chat widget
              across your store.
            </p>
          </div>
        );
      case "custom":
        return (
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Custom Website Integration
            </h3>
            <p>
              For a custom website, simply add the embed code to your HTML,
              ideally in the header or footer. Paste the script tag into your
              website’s code where you want the chat widget to appear. Ensure
              that it is loaded on every page where the widget is required.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Integration Instructions
      </h1>
      {loading ? (
        <p>Loading widget script...</p>
      ) : widgetScript ? (
        <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Your Widget Script</h2>
          <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
            {widgetScript}
          </pre>
          <button
            onClick={handleCopy}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Copy Script
          </button>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Integration Options</h2>
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded ${
                  selectedIntegration === "wordpress"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedIntegration("wordpress")}
              >
                WordPress
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  selectedIntegration === "shopify"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedIntegration("shopify")}
              >
                Shopify
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  selectedIntegration === "custom"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedIntegration("custom")}
              >
                Custom Website
              </button>
            </div>
            {renderInstructions()}
          </div>
        </div>
      ) : (
        <p className="text-red-500">No widget script found.</p>
      )}
    </div>
  );
};

export default IntegrationInstructionsPage;
