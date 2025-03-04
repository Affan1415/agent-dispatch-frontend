"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";

export default function AuthNavbar() {
  const [user, setUser] = useState(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    getUser();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <header className="w-full max-w-4xl flex justify-between items-center mb-6 mx-auto">
      <h1 className="text-3xl font-semibold">Agent Dispatch</h1>
      <nav className="flex space-x-6">
        <Link href="/dashboard" className="text-blue-400 hover:underline">
          Dashboard
        </Link>
        <Link
          href="/dashboard/myChatbots"
          className="text-blue-400 hover:underline"
        >
          My Chatbots
        </Link>
        <div className="relative group">
          <button className="text-blue-400 hover:underline">Settings ▾</button>
          <div className="absolute hidden group-hover:block bg-gray-800 p-2 rounded-lg shadow-lg mt-1 z-10">
            <Link
              href="/dashboard/settings/billing"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Billing
            </Link>
            <Link
              href="/dashboard/settings/subscriptions"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Subscriptions
            </Link>
            {user ? (
              <Button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 w-full mt-2"
              >
                Sign Out
              </Button>
            ) : (
              <Link href="/sign-in">
                <Button className="bg-indigo-500 px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                  GET STARTED
                </Button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
