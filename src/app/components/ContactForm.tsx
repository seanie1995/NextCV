'use client'

import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <div className="w-full max-w-2xl bg-gray-900 rounded-2xl shadow-2xl p-10">
                <h2 className="text-4xl font-bold text-purple-400 mb-8 text-center">
                    Contact Me
                </h2>

                <form onSubmit={onSubmit} className="flex flex-col gap-6">
                    <input type="hidden" name="access_key" value="5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f" />

                    <label className="flex flex-col text-gray-300 font-medium">
                        Name
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Your name"
                            className="mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
                        />
                    </label>

                    <label className="flex flex-col text-gray-300 font-medium">
                        Email
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100"
                        />
                    </label>

                    <label className="flex flex-col text-gray-300 font-medium">
                        Message
                        <textarea
                            name="message"
                            required
                            rows={6}
                            placeholder="Your message"
                            className="mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100 resize-none"
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-500 transition-colors duration-300 text-white font-semibold py-3 rounded-lg shadow-lg"
                    >
                        Send Message
                    </button>
                </form>

                {result && (
                    <p className="mt-6 text-center text-green-400 font-medium">
                        {result}
                    </p>
                )}
            </div>
        </div>
    );
}
