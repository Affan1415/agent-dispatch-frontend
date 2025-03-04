import React from "react";
import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";


export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-opacity-10 p-8 rounded-lg">
        {/* Left Section - Robot Illustration */}
        <div className="hidden md:flex flex-col items-center">
          <img
            src="/images/Business.png"
            alt="Robot Illustration"
            className="w-72 h-auto"
          />
          <div className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-lg">
            <p className="text-lg font-semibold">Hi! Welcome back.</p>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full max-w-md mx-auto p-6">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Login to your account
          </h2>
          <p className="text-gray-400 text-sm mb-6 text-center">
            New User?{" "}
            <Link href="/sign-up" className="text-blue-400 hover:underline">
              Sign Up Here
            </Link>
          </p>

          <button className="w-full flex items-center justify-center bg-white text-black py-3 rounded-full shadow-md mb-4 hover:bg-gray-200 transition">
            <img
              src="/external/shape1329-qmps.svg"
              alt="Google Logo"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>

          <div className="relative flex items-center my-6">
            <div className="flex-grow border-t border-gray-600"></div>
            <span className="mx-3 text-gray-400 text-sm">
              or Login with Email
            </span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <form className="flex flex-col gap-2 mt-4">
            <Label htmlFor="email">Email</Label>
            <Input name="email" placeholder="you@example.com" required />
            <div className="flex justify-between items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-xs text-foreground underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Your password"
              required
            />
            <SubmitButton pendingText="Signing In..." formAction={signInAction}>
              Sign in
            </SubmitButton>
            <FormMessage message={searchParams} />
          </form>
        </div>
      </div>
    </div>
  );
}
