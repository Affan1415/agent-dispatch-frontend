"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const supabase = createClient();

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
  };

  return (
    <header className="w-full max-w-6xl mx-auto p-6 flex justify-between items-center bg-black text-white">
      {/* Logo */}
      <img
        src="/images/Logo.png"
        alt="Agent Dispatch Logo"
        className="w-32 h-auto"
      />

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-10">
        <Link href="#" className="text-blue-400">
          AI Employees
        </Link>
        <Link href="#" className="hover:text-gray-400">
          Features
        </Link>
        <Link href="#" className="hover:text-gray-400">
          Resources
        </Link>
        <Link href="/pricing" className="hover:text-gray-400">
          Pricing
        </Link>
        <Link href="/contact-us" className="hover:text-gray-400">
          Contact Us
        </Link>
        {user ? (
          <Button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-600"
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
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden block text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-5 space-y-5 lg:hidden">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            ❌
          </button>

          <Link href="#" className="text-blue-400 text-lg">
            AI Employees
          </Link>
          <Link href="#" className="hover:text-gray-400 text-lg">
            Features
          </Link>
          <Link href="/contact-us" className="hover:text-gray-400 text-lg">
            Resources
          </Link>
          <Link href="/pricing" className="hover:text-gray-400 text-lg">
            Pricing
          </Link>
          <Link href="#" className="hover:text-gray-400 text-lg">
            Contact Us
          </Link>
          {user ? (
            <Button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 w-11/12"
            >
              Sign Out
            </Button>
          ) : (
            <Link href="/sign-in">
              <Button className="bg-indigo-500 px-6 py-3 w-11/12 text-center rounded-full hover:bg-indigo-600 transition">
                GET STARTED
              </Button>
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}
