"use client"; // This makes it a Client Component

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SignupForm() {
  const searchParams = useSearchParams();
  const message: Message | null = searchParams
    ? JSON.parse(searchParams.get("message") || "null")
    : null;

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="flex w-full max-w-5xl flex-col md:flex-row items-center justify-center gap-10 p-6 md:p-10">
        {/* Left Section - Robot Illustration */}
        <div className="hidden md:flex flex-col items-center">
          <img
            src="images/Sophia.png"
            alt="Robot Illustration"
            className="w-72 h-auto"
          />
          <div className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg text-center">
            <p className="text-lg font-semibold">Welcome to AgentDispatch!</p>
          </div>
        </div>

        {/* Right Section - Sign Up Form or Message */}
        <div className="w-full md:w-1/2 max-w-md p-6 bg-opacity-10">
          {message ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <FormMessage message={message} />
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                Create an account
              </h2>
              <p className="text-gray-400 text-sm text-center mb-6">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-blue-400 hover:underline">
                  Login
                </Link>
              </p>

              <button className="w-full flex items-center justify-center bg-white text-black py-3 rounded-full shadow-md mb-4 hover:bg-gray-200 transition">
                <img
                  src="/external/shape1329-qmps.svg"
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>

              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="mx-3 text-gray-400 text-sm">
                  or Sign up with Email
                </span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              <form className="flex flex-col gap-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full p-3 bg-gray-900 text-white rounded-full border border-gray-700 focus:outline-none"
                />
                <Label htmlFor="username">Username</Label>
                <Input
                  name="username"
                  placeholder="Agent"
                  required
                  className="w-full p-3 bg-gray-900 text-white rounded-full border border-gray-700 focus:outline-none"
                />
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  minLength={6}
                  required
                  className="w-full p-3 bg-gray-900 text-white rounded-full border border-gray-700 focus:outline-none"
                />
                <SubmitButton
                  formAction={signUpAction}
                  pendingText="Signing up..."
                  className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300 ease-in-out"
                >
                  Sign Up
                </SubmitButton>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Signup() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <SignupForm />
    </Suspense>
  );
}
