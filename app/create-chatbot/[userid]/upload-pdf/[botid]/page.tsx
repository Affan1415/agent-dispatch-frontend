"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function UploadPDF() {
  const params = useParams();
  const userId = params?.userid;
  const botid = params?.botid;
  const supabase = createClient();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const generateApiKey = async () => {
      try {
        const response = await fetch("/api/generateKey");
        if (!response.ok) throw new Error("Failed to fetch API key");
        const data = await response.json();
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
      .upload(filePath, selectedFile, { cacheControl: "3600", upsert: false });
    setUploading(false);
    if (error) {
      setUploadStatus(`Upload failed: ${error.message}`);
      return;
    }
    setUploadStatus("Upload successful!");
    setSelectedFile(null);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!userId) {
      setUploadStatus("User ID is missing.");
      setLoading(false);
      return;
    }
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) throw new Error("API URL is not defined.");
      const response = await fetch(
        `${apiUrl}/chat/fetch_latest_pdf/${userId}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      if (!response.ok) throw new Error("Failed to fetch document.");
      alert("Document retrieved successfully!");
      window.location.href = `/chatbot/${userId}/${botid}`;
    } catch (error) {
      console.error("Error:", error);
      setUploadStatus(error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <nav className="mb-4 text-sm text-gray-400">
         <Link href="/upload">Upload PDF</Link>{" "}
        &gt; <Link href="#">Test Your Chatbot</Link> &gt;{" "}
        <Link href="#">Integrations</Link>
      </nav>
      <h1 className="text-4xl font-bold mb-4">Upload Your PDF</h1>
      <div className="w-full max-w-md bg-black p-8 rounded-xl shadow-2xl">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])}
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
