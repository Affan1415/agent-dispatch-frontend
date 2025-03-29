"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

const supabase = createClient();

interface User {
  username: string;
  email: string;
  chatbot_count: number;
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
        .select("username, email, chatbot_count")
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

    setUser((prevUser) => (prevUser ? { ...prevUser, name: newUsername } : null));
    setSaving(false);
  };

  if (!user) return <div className="text-white">Loading...</div>;

  return (
    <div className="flex flex-col items-center p-6 space-y-4 text-white bg-gray-900 min-h-screen">
      {loading ? <p>Uploading...</p> : avatarUrl && (
        <Image
          src={avatarUrl}
          alt="User Avatar"
          width={100}
          height={100}
          className="rounded-full border"
        />
      )}
      <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
      <input 
        type="text" 
        placeholder={user.username} 
        value={newUsername} 
        onChange={(e) => setNewUsername(e.target.value)} 
        className="border p-2 rounded bg-gray-800 text-white" 
      />
      <button 
        onClick={handleSaveUsername} 
        disabled={saving} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        {saving ? "Saving..." : "Save Details"}
      </button>
      <h2 className="text-xl font-semibold">{user.username}</h2>
      <p className="text-gray-400">{user.email}</p>
      <p className="text-gray-300">Chatbot Count: {user.chatbot_count}</p>
    </div>
  );
}
