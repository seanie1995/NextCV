'use client'

import { useState } from "react";
import { FaPaperPlane, FaCheck, FaExclamationCircle } from "react-icons/fa";

export default function Contact() {
    const [result, setResult] = useState<{type: 'success' | 'error' | 'loading' | 'idle', message: string}>({type: 'idle', message: ''});

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult({type: 'loading', message: 'Sending your message...'});
        
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult({type: 'success', message: "Message sent successfully! I'll get back to you soon."});
                event.currentTarget.reset();
            } else {
                setResult({type: 'error', message: data.message || "Failed to send message. Please try again."});
            }
        } catch (error) {
            setResult({type: 'error', message: "Something went wrong. Please try again later."});
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contact">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading mx-auto">
                    Get In Touch
                </h2>
                <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                    Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <form 
                    onSubmit={onSubmit} 
                    className="glass-card p-8 space-y-6"
                    aria-label="Contact form"
                >
                    <input type="hidden" name="access_key" value="5f84d4f1-4fb8-4e9e-a988-676c78c6cf1f" />

                    <div className="grid sm:grid-cols-2 gap-6">
                        <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-300 mb-2">Name</span>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                aria-required="true"
                                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                            />
                        </label>

                        <label className="flex flex-col">
                            <span className="text-sm font-medium text-gray-300 mb-2">Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                aria-required="true"
                                className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-white placeholder-gray-500 transition-all duration-300"
                            />
                        </label>
                    </div>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-gray-300 mb-2">Message</span>
                        <textarea
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell me about your project..."
                            aria-required="true"
                            className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none text-white placeholder-gray-500 transition-all duration-300 resize-none"
                        />
                    </label>

                    <button
                        type="submit"
                        disabled={result.type === 'loading'}
                        className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                        {result.type === 'loading' ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane />
                                Send Message
                            </>
                        )}
                    </button>

                    {result.message && (
                        <div 
                            role="alert"
                            className={`flex items-center gap-3 p-4 rounded-lg ${
                                result.type === 'success' 
                                    ? 'bg-green-500/20 text-green-300' 
                                    : result.type === 'error'
                                    ? 'bg-red-500/20 text-red-300'
                                    : 'bg-purple-500/20 text-purple-300'
                            }`}
                        >
                            {result.type === 'success' && <FaCheck className="flex-shrink-0" />}
                            {result.type === 'error' && <FaExclamationCircle className="flex-shrink-0" />}
                            <span>{result.message}</span>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
