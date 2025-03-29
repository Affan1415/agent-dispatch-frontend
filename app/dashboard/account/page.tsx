"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

const supabase = createClient();

interface User {
  username: string;
  email: string;
  plan_sub: string;
  sophia_website_limit: number; 
  sophia_website_used: number;
  sophia_social_limit: number;
  sophia_social_used: number;
  // chatbot_count: number;
}

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [newUsername, setNewUsername] = useState<string>("");
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    async function checkAuth() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push("/sign-in");
      } else {
        setUserId(user.id);
      }
    }
    checkAuth();
  }, [router]);

  useEffect(() => {
    if (!userId) return;

    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("username, email,plan_sub, sophia_website_limit, sophia_website_used,sophia_social_limit, sophia_social_used")
        .eq("userID", userId)
        .single();

      if (error) {
        console.error("Error fetching user data:", error.message);
        return;
      }

      setUser(data);
      fetchAvatar();
    };

    const fetchAvatar = async () => {
      const filePath = `profile-picture/${userId}/${userId}.jpeg`;
      const { data: avatarData } = supabase.storage.from("avatars").getPublicUrl(filePath);
      setAvatarUrl(`${avatarData.publicUrl}?t=${new Date().getTime()}`);
    };

    fetchUserData();
  }, [userId]);

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !userId) return;

    const file = event.target.files[0];
    setLoading(true);

    const filePath = `profile-picture/${userId}/${userId}.jpeg`;
    await supabase.storage.from("avatars").remove([filePath]);

    const { error } = await supabase.storage.from("avatars").upload(filePath, file, {
      contentType: "image/jpeg",
      upsert: true,
    });

    if (error) {
      console.error("Error uploading image:", error.message);
      setLoading(false);
      return;
    }

    setAvatarUrl(`${supabase.storage.from("avatars").getPublicUrl(filePath).data.publicUrl}?t=${new Date().getTime()}`);
    setLoading(false);
  };

  const handleSaveUsername = async () => {
    if (!newUsername || !userId) return;
    setSaving(true);
    
    const { error } = await supabase
      .from("users")
      .update({ username: newUsername })
      .eq("userID", userId);

    if (error) {
      console.error("Error updating username:", error.message);
      setSaving(false);
      return;
    }

    setUser((prevUser) => (prevUser ? { ...prevUser, username: newUsername } : null));
    setSaving(false);
  };

  if (!user) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
        {/* Avatar Section */}
        <div className="flex flex-col items-center">
          {loading ? (
            <p className="text-white">Uploading...</p>
          ) : (
            avatarUrl && (
              <Image
                src={avatarUrl}
                alt="User Avatar"
                width={150}
                height={150}
                className="rounded-full border-4 border-blue-500"
              />
            )
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-4 text-white"
          />
        </div>

        {/* Personal Details Card */}
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-300 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder={user.username}
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={user.email}
              disabled
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Plan
            </label>
            <input
              type="text"
              id="email"
              value={user.plan_sub}
              disabled
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
            Sophia Social Limit
            </label>
            <input
              type="text"
              id="email"
              value={user.sophia_social_limit}
              disabled
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
            Sophia Social Used
            </label>
            <input
              type="text"
              id="email"
              value={user.sophia_social_used}
              disabled
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
            Sophia Website Used
            </label>
            <input
              type="text"
              id="email"
              value={user.sophia_website_used}
              disabled
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 cursor-not-allowed"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
            Sophia Website Limit
            </label>
            <input
              type="text"
              id="email"
              value={user.sophia_website_limit}
              disabled
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 cursor-not-allowed"
            />
          </div>
          <button
            onClick={handleSaveUsername}
            disabled={saving}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            {saving ? "Saving..." : "Save Details"}
          </button>
        </div>
      </div>
    </div>
  );
}
