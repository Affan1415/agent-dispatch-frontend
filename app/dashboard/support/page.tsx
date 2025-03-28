"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const supabase = createClient();

interface Ticket {
    id: number;
    userid: string;
    agenda: string;
    description: string;
    status: string;
}

export default function SupportPage() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [selectedAgenda, setSelectedAgenda] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [userId, setUserId] = useState<string | null>(null);

    const router = useRouter();
    const agendas = ["Bug Report", "Feature Request", "General Inquiry"];

    // Check authentication and set user ID
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

    // Fetch tickets from Supabase (only for the logged-in user)
    useEffect(() => {
        async function fetchTickets() {
            if (!userId) return;
            const { data, error } = await supabase
                .from("tickets")
                .select("*")
                .eq("userid", userId); // Fetch only the user's tickets

            if (error) {
                console.error("Error fetching tickets:", error.message);
                return;
            }
            setTickets(data || []);
        }
        fetchTickets();
    }, [userId]); // Refetch tickets when userId is set

    // Handle ticket submission
    const handleSubmit = async () => {
        if (!selectedAgenda || !description || !userId) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);

        const { data, error } = await supabase
            .from("tickets")
            .insert([{ userid: userId, agenda: selectedAgenda, description, status: "Active" }]);

        setLoading(false);

        if (error) {
            console.error("Error submitting ticket:", error.message);
            alert("Failed to submit ticket.");
            return;
        }

        alert("Ticket submitted successfully!");
        setSelectedAgenda("");
        setDescription("");

        // Refresh ticket list
        const { data: updatedTickets } = await supabase
            .from("tickets")
            .select("*")
            .eq("user_id", userId); // Fetch only the user's tickets

        setTickets(updatedTickets || []);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-6">Support Tickets</h1>

            {/* Ticket Display */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
                {tickets.length > 0 ? (
                    tickets.map((ticket) => (
                        <div key={ticket.id} className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-600">
                            <h2 className="text-lg font-semibold">#{ticket.id} - {ticket.agenda}</h2>
                            <p className="text-sm text-gray-400">
                                {ticket.description.length > 30
                                    ? ticket.description.substring(0, 30) + "..."
                                    : ticket.description}
                            </p>
                            <span className={`text-sm font-bold ${ticket.status === "Active" ? "text-green-400" : "text-red-400"}`}>
                                {ticket.status}
                            </span>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">No tickets available.</p>
                )}
            </div>

            {/* Ticket Submission Form */}
            <div className="mt-8 w-full max-w-lg p-6 bg-gray-800 rounded-lg shadow-md border border-gray-600">
                <h2 className="text-xl font-semibold mb-4">Submit a Ticket</h2>

                {/* Agenda Dropdown */}
                <label className="block mb-2">Select Agenda:</label>
                <select
                    value={selectedAgenda}
                    onChange={(e) => setSelectedAgenda(e.target.value)}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                >
                    <option value="">Select an agenda</option>
                    {agendas.map((agenda) => (
                        <option key={agenda} value={agenda}>
                            {agenda}
                        </option>
                    ))}
                </select>

                {/* Description Input */}
                <label className="block mt-4 mb-2">Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white"
                    rows={3}
                    placeholder="Enter details..."
                />

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
                >
                    {loading ? "Submitting..." : "Submit Ticket"}
                </button>
            </div>
        </div>
    );
}
