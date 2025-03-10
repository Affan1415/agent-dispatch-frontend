"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const supabase = createClient();
  const baseurl = process.env.NEXT_BASE_URL || '';
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    };
    getUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    redirect(baseurl);
  };

  return (
    <header className="w-screen h-[80px] flex items-center justify-center bg-black">
      <div className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center text-white">
        {/* Logo */}
        <Link href="/">
          <img
            src="/images/LOGO.jpeg"
            alt="Agent Dispatch Logo"
            className="w-32 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          <Link href="/#features" className="hover:text-gray-400">Features</Link>
          <Link href="/#agents" className="hover:text-gray-400">Agents</Link>
          <Link href="/pricing" className="hover:text-gray-400">Pricing</Link>
          <Link href="/contact-us" className="hover:text-gray-400">Contact Us</Link>
          {user ? (
            <Button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600">
              Sign Out
            </Button>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-[#7B8CE5] px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 hover:bg-indigo-600 hover:scale-105">
                Log In
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col items-center py-5 space-y-5 lg:hidden z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            x
          </button>

          <Link href="/features" className="text-lg hover:text-gray-400">Features</Link>
          <Link href="/agents" className="text-lg hover:text-gray-400">Agents</Link>
          <Link href="/pricing" className="text-lg hover:text-gray-400">Pricing</Link>
          <Link href="/contact-us" className="text-lg hover:text-gray-400">Contact Us</Link>
          {user ? (
            <Button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 w-11/12">
              Sign Out
            </Button>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-indigo-500 px-6 py-3 w-11/12 text-center rounded-full hover:bg-indigo-600 transition">
                GET STARTED
              </Button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}