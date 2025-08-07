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
        <div className="m-auto max-w-md w-full p-6 bg-white rounded-lg shadow-md">

            <h2 className="font-semibold text-4xl mb-6 text-purple-900" >Contact Me</h2>
            <form onSubmit={onSubmit} className="flex flex-col gap-5" action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f" />

                <label className="flex flex-col text-gray-700 font-medium">

                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        className="mt-1 border border-purple-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Your name"
                    />
                </label>

                <label className="flex flex-col text-gray-700 font-medium">
                    Email:
                    <input
                        type="email"
                        name="email"
                        required
                        className="mt-1 border border-purple-900 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="you@example.com"
                    />
                </label>

                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Your message"
                    className="text-black border border-purple-900 rounded-md px-3 py-2 mt-1 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>



                <button
                    type="submit"
                    className="bg-purple-900 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                >
                    Submit Form
                </button>
            </form>

            <span className="mt-4 block text-center text-green-600">{result}</span>
        </div>

    );

}