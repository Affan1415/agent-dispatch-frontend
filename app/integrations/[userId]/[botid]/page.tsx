
import React from "react";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import ToggleSwitch from "@/components/ToggleSwitch";

const Integrations: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ToggleSwitch />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Analytics" content="Messages Handled" />
          <Card title="Response Rate" content="85%" />
          <Card title="Recent Interactions" content="3 Conversations" />
        </div>
      </main>
    </div>
  );
};

export default Integrations;