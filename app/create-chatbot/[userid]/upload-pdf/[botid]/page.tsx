"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function UploadPDF() {
  const params = useParams();
  const userId = params?.userId; // expecting the dynamic route parameter "userId"
  const botid = params?.botid; // expecting the dynamic route parameter "userId"
  const supabase = createClient();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // New states for chatbot details – adjust default values as needed
  const [agentName, setAgentName] = useState("Nova");
  const [agentDescription, setAgentDescription] = useState("");
  const [widgetColor, setWidgetColor] = useState("");
  const [widgetPosition, setWidgetPosition] = useState("");
  const [widgetMessage, setWidgetMessage] = useState("");
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
        console.log(data);
        setApiKey(data.apiKey);
      } catch (error) {
        console.error("Error generating API key:", error);
      }
    };
    generateApiKey();
  }, []);

  const handleUpload = async () => {
    if (!selectedFile || !userId) {
      setUploadStatus("No file selected or user ID missing.");
      return;
    }

    setUploading(true);
    setUploadStatus("Uploading...");

    const filePath = `PDFS/${userId}/${selectedFile.name}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(filePath, selectedFile, {
        cacheControl: "3600",
        upsert: false,
      });

    setUploading(false);

    if (error) {
      setUploadStatus(`Upload failed: ${error.message}`);
      return;
    }

    setUploadStatus("Upload successful!");
    setSelectedFile(null);
    console.log("File uploaded successfully:", data);
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);

    if (!userId) {
      setUploadStatus("User ID is missing.");
      setLoading(false);
      return;
    }

    try {
      // Insert chatbot data into Supabase
      const { error } = await supabase.from("chatbots").insert([
        {
          name: agentName,
          description: agentDescription || null,
          color: widgetColor || null,
          position: widgetPosition || null,
          message: widgetMessage || null,
          user_id: userId,
          api_key: apiKey,
        },
      ]);

      if (error) throw new Error(`Error creating agent: ${error.message}`);

      // Use the environment variable for the API URL
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not defined in the environment variables.");
      }

      // Fetch the latest PDF document from your backend
      const response = await fetch(
        `${apiUrl}/chat/fetch_latest_pdf/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch document.");
      }

      console.log("✅ Document retrieved successfully!");
      alert("Document retrieved successfully!");

      // Redirect after successful insertion & document retrieval
      window.location.href = `/chatbot/${userId}/${botid}`;
    } catch (error) {
      console.error("❌ Error:", error);
      setUploadStatus((error as Error).message || "An unknown error occurred.");
      alert("Error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Upload Your PDF</h1>
      <p className="mb-6 text-lg">
        {userId ? `User ID: ${userId}` : "No user ID found."}
      </p>

      <div className="w-full max-w-md bg-black p-8 rounded-xl shadow-2xl">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setSelectedFile(e.target.files[0]);
            }
          }}
          className="mb-6 w-full text-gray-800 rounded-lg p-2"
        />

        <button
          onClick={handleUpload}
          disabled={uploading}
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg transition duration-200"
        >
          {uploading ? "Uploading..." : "Upload PDF"}
        </button>

        {uploadStatus && (
          <p className="mt-4 text-center text-sm text-gray-300">
            {uploadStatus}
          </p>
        )}

        {uploadStatus === "Upload successful!" && userId && (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg transition duration-200"
          >
            {loading ? "Processing..." : "Test Your Chat Bot"}
          </button>
        )}
      </div>
    </div>
  );
}
