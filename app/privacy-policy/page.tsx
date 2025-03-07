'use client';

import { CheckCircle } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="px-4 md:px-12 lg:px-28 py-10">
      <div className="p-6 md:p-10 w-full min-h-[500px] bg-gradient-to-t rounded-xl mx-auto from-blue-800/10 to-purple-900/10 border border-teal-100/10">
        <h1 className="text-3xl font-bold mb-6 text-gray-200">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-200">Our Mission</h2>
          <p className="text-gray-300">
            We are committed to providing AI-powered solutions that enhance user
            experiences while ensuring privacy and security. Our services aim to
            deliver efficiency, automation, and seamless AI interactions with
            transparency.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-200">What We Do</h2>
          <p className="text-gray-300">
            Our platform offers AI-powered tools for content generation,
            automation, analytics, and scheduling. Users can access features
            based on their plan, with flexible credit usage and upgrades.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-200">How We Use Your Data</h2>
          <ul className="list-none space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
              <span>
                <strong>Account Information:</strong> We collect necessary
                details such as email, username, and preferences to provide
                personalized experiences.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-blue-500 w-6 h-6 mt-1" />
              <span>
                <strong>Usage Data:</strong> We track AI task usage to ensure
                fair policy compliance and enhance platform performance.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-yellow-500 w-6 h-6 mt-1" />
              <span>
                <strong>Payment & Transactions:</strong> Secure payments and
                credit top-ups are handled via trusted payment gateways.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-purple-500 w-6 h-6 mt-1" />
              <span>
                <strong>Security & Compliance:</strong> We employ strict security
                measures to protect user data and comply with legal
                requirements.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-200">User Rights & Control</h2>
          <p className="text-gray-300">
            Users have full control over their data, including options to update
            personal information, manage usage preferences, and delete their
            accounts upon request.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-gray-200">Changes & Updates</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy periodically. Users will be
            notified of significant changes to ensure transparency and informed
            consent.
          </p>
        </section>
      </div>
    </div>
  );
}