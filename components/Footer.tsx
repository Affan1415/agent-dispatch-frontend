export default function Footer() {
  return (
    <footer className="p-10 bg-black text-gray-300 text-base">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="col-span-1 md:col-span-4">
          <h3 className="text-white text-2xl font-bold">Agent Dispatch</h3>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="text-white font-bold mb-3 text-lg">Company</h4>
          <ul className="space-y-2 text-base">
            <li>About</li>
            <li>Services</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 text-lg">Resources</h4>
          <ul className="space-y-2 text-base">
            <li>Case Studies</li>
            <li>Webinars</li>
            <li>Developer</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-3 text-lg">Help</h4>
          <ul className="space-y-2 text-base">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Email Subscription Section */}
        <div className="w-full flex flex-col md:items-end">
          <h4 className="text-white font-bold mb-3 text-base text-center md:text-right">
            Subscribe To Newsletter
          </h4>
          <div className="flex flex-col md:flex-row items-center md:items-end gap-3 w-full">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-4 bg-gray-800 rounded-full w-full md:w-72 text-white placeholder-gray-400 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-700"
            />
            <button className="bg-indigo-500 px-6 py-4 text-white font-bold rounded-full text-base transition-all duration-300 hover:bg-indigo-600 hover:scale-105 w-full md:w-auto">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <hr className="border-gray-600 my-8" />
      <p className="text-center text-lg">CopyRight &copy; 2025 AgentDispatch</p>
    </footer>
  );
}
