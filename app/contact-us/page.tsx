"use client";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black px-4 py-10">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Main Content */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-normal text-white">
            Custom AI Agent - Tailored to Your Needs
          </h2>
          <p className="mt-2 text-base md:text-lg font-normal text-[#ADADAD]">
            Need an AI agent built specifically for your business? Tell us what
            you need, and we’ll create a custom AI assistant designed to fit your
            exact workflow.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl bg-[#1E1E1E] p-8 w-full max-w-[846px] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
            Let’s Build Your AI
          </h3>
          <p className="mt-2 text-base md:text-lg font-normal text-[#D7D7D7]/80 text-center">
            Fill out the form below, and our team will reach out to discuss your
            requirements.
          </p>

          {/* Form Fields */}
          <div className="mt-6 w-full flex flex-col gap-6">
            {/* Two-column layout for Name & Email */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name */}
              <div className="flex flex-col w-full">
                <label className="text-base md:text-lg text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="h-16 w-full rounded-xl bg-white/10 px-4 text-white placeholder-[#6B7274] outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col w-full">
                <label className="text-base md:text-lg text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Best email to reach you"
                  className="h-16 w-full rounded-xl bg-white/10 px-4 text-white placeholder-[#6B7274] outline-none"
                />
              </div>
            </div>

            {/* Two-column layout for Business Name & Features */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Business Name */}
              <div className="flex flex-col w-full">
                <label className="text-base md:text-lg text-white mb-2">
                  Business Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Optional field"
                  className="h-16 w-full rounded-xl bg-white/10 px-4 text-white placeholder-[#6B7274] outline-none"
                />
              </div>

              {/* Features or Integrations */}
              <div className="flex flex-col w-full">
                <label className="text-base md:text-lg text-white mb-2">
                  Features or Integrations *
                </label>
                <input
                  type="text"
                  placeholder="List any specific tools or workflows"
                  className="h-16 w-full rounded-xl bg-white/10 px-4 text-white placeholder-[#6B7274] outline-none"
                />
              </div>
            </div>

            {/* Full-width Use Case textarea */}
            <div className="flex flex-col">
              <label className="text-base md:text-lg text-white mb-2">
                What do you need your AI agent to do? *
              </label>
              <textarea
                placeholder="Describe your use case"
                className="h-40 w-full rounded-xl bg-white/10 px-4 py-3 text-white placeholder-[#6B7274] outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button className="rounded-xl bg-[#6366F1] px-8 py-3 text-center text-base md:text-lg font-bold text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
