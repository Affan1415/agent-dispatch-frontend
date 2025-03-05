"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import BlurredCircle from "@/components/BlurredCircle";
import { DotIcon, UploadIcon } from "lucide-react";

export default function UploadPDF() {
  const params = useParams();
  const router = useRouter();
  const userId = params?.userid as string;
  const botid = params?.botid as string; // Optional, if provided
  const supabase = createClient();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");

  // Generate API key on mount
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

  // Handle file upload to Supabase Storage
  const handleUpload = async () => {
    if (!selectedFile || !userId) {
      setUploadStatus("No file selected or user ID missing.");
      return;
    }
    setUploading(true);
    setUploadStatus("Uploading...");
    const getRandomDigits = () => Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit random number
    const fileExtension = selectedFile.name.split(".").pop(); // Get file extension
    const fileNameWithoutExt = selectedFile.name.replace(
      `.${fileExtension}`,
      ""
    ); // Remove extension

    const randomDigits = getRandomDigits();
    const newFileName = `${fileNameWithoutExt}_${randomDigits}.${fileExtension}`;

    const filePath = `PDFS/${userId}/${newFileName}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(filePath, selectedFile, { cacheControl: "3600", upsert: false });
    setUploading(false);
    if (error) {
      setUploadStatus(`Upload failed: ${error.message}`);
      return;
    }
    setUploadStatus("Uploaded successfully!");
    setSelectedFile(null);
  };

  // Handle document retrieval and redirect
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
      const response = await fetch(`${apiUrl}/fetch_latest_pdf/${userId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to fetch document.");
      alert("Document retrieved successfully!");
      router.push(`/chatbot/${userId}/${botid}`);
    } catch (error: any) {
      console.error("Error:", error);
      setUploadStatus(error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-fit text-white flex flex-col items-center justify-center py-16 lg:py-32 relative ">
      <div className="absolute left-0 opacity-80 -z-0  ">
        <BlurredCircle />
      </div>
      <div className="absolute right-0 opacity-80 -z-0 scale-x-[-1] ">
        <BlurredCircle />
      </div>

      <div className="max-w-screen-xl md:min-w-[500px] flex items-center shadow-2xl shadow-teal-700/10  z-10 justify-center px-7 md:px-8 flex-col  bg-gradient-to-t  from-teal-800/20 to-purple-900/10 border border-teal-100/10  p-10 rounded-xl ">
        <nav className="mb-4 text-sm  text-white">
          <Link href="/upload">Upload PDF</Link> &gt;{" "}
          <Link href="#">Test Your Chatbot</Link> &gt;{" "}
          <Link href="#">Integrations</Link>
        </nav>
        <h1 className="text-4xl font-bold mb-4">Upload Your PDF</h1>
        <div className="w-full max-w-md mt-8 border border-teal-500/20 bg-black  shadow-teal-700/20 backdrop-blur-2xl p-8 text-white rounded-xl shadow-2xl">
          <div className="mb-6">
            <input
              id="file-upload"
              type="file"
              accept="application/pdf"
              onChange={(e) =>
                e.target.files && setSelectedFile(e.target.files[0])
              }
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer  bg-[#246b532e] hover:bg-teal-800/40  text-white px-4 py-2 rounded-lg shadow-md  transition flex items-center justify-center"
            >
              Choose File
            </label>
            {selectedFile && (
              <>
                <p className="text-[#96a2e0]  text-md w-full text-center mt-4">
                  {selectedFile.name}
                </p>
                <p className="text-white  gap-2  font-light flex flex-row  text-md w-full text-center mt-4">
                  <UploadIcon className="w-5 h-5 text-white" /> Please click on
                  upload to upload the document
                </p>
              </>
            )}
          </div>
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full py-3 bg-[#246b532e] hover:bg-teal-800/40 rounded-lg transition duration-200"
          >
            {uploading ? "Uploading..." : "Upload PDF"}
          </button>
          {uploadStatus && (
            <p className="mt-4 text-center text-sm text-gray-300">
              Your Document is {uploadStatus}
            </p>
          )}
          {uploadStatus === "Uploaded successfully!" && userId && (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="mt-6 w-full bg-teal-900/60 hover:bg-teal-900/80 py-3 rounded-lg transition duration-200"
            >
              {loading ? "Processing..." : "Test Your Chat Bot"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
