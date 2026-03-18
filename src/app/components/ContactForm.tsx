'use client'

import { useState } from "react";
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
    const [result, setResult] = useState<{type: 'success' | 'error' | 'loading' | 'idle', message: string}>({type: 'idle', message: ''});

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult({type: 'loading', message: 'Sending...'});
        
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult({type: 'success', message: "Message sent successfully!"});
                event.currentTarget.reset();
            } else {
                setResult({type: 'error', message: data.message || "Failed to send message."});
            }
        } catch (error) {
            setResult({type: 'error', message: "Something went wrong. Please try again."});
        }
    };

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="contact">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 hover:text-purple-400 transition-colors duration-300">Get In Touch</h2>
                <p className="text-gray-400">Have a project in mind? Let&apos;s talk.</p>
            </div>

            <div className="max-w-xl mx-auto">
                <form 
                    onSubmit={onSubmit} 
                    className="bg-[var(--card-bg)] rounded-lg p-6 space-y-4 border border-[var(--card-border)] hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
                >
                    <input type="hidden" name="access_key" value="5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f" />

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="group">
                            <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-purple-400">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                            />
                        </div>

                        <div className="group">
                            <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-purple-400">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white transition-all duration-300"
                            />
                        </div>
                    </div>

                    <div className="group">
                        <label className="block text-sm text-gray-300 mb-1 transition-colors group-focus-within:text-purple-400">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            className="w-full px-3 py-2 rounded bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 text-white resize-none transition-all duration-300"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={result.type === 'loading'}
                        className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-600/50 text-white font-medium rounded transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                        {result.type === 'loading' ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                Send Message
                            </>
                        )}
                    </button>

                    {result.message && (
                        <div 
                            className={`p-3 rounded text-sm flex items-center gap-2 animate-fade-in ${
                                result.type === 'success' 
                                    ? 'bg-green-600/20 text-green-300 border border-green-500/30' 
                                    : 'bg-red-600/20 text-red-300 border border-red-500/30'
                            }`}
                        >
                            {result.type === 'success' && <FaCheckCircle className="text-green-400" />}
                            {result.type === 'error' && <FaExclamationCircle className="text-red-400" />}
                            {result.message}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
