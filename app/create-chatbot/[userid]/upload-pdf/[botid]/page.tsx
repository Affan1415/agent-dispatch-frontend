"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function UploadPDF() {
  const params = useParams();
  const userId = params?.userId; // Expecting the route parameter to be named "userId"
  const supabase = createClient();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

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
      </div>
    </div>
  );
}
