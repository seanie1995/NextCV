import React from "react";
import Image from "next/image";
import { FaCode, FaMusic, FaGamepad, FaPalette } from "react-icons/fa";

const interests = [
  { icon: FaCode, label: "Coding", description: "Building modern web applications" },
  { icon: FaMusic, label: "Music", description: "Listening to and creating music" },
  { icon: FaGamepad, label: "Gaming", description: "Playing video games" },
  { icon: FaPalette, label: "Painting", description: "Miniature painting" },
];

const AboutMe = () => {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-3xl opacity-30" />
                    <div className="relative glass-card overflow-hidden">
                        <Image
                            src="/images/about-me.jpg"
                            alt="Sean Schelin - Full Stack Developer"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white section-heading">
                            About Me
                        </h2>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Hi, I&apos;m <span className="text-purple-400 font-semibold">Sean Schelin</span>,
                        a Full Stack Developer passionate about building clean, modern
                        applications. I enjoy working with technologies like{' '}
                        <span className="text-cyan-400">Next.js</span>,{' '}
                        <span className="text-pink-400">.NET</span>, and{' '}
                        <span className="text-yellow-400">TypeScript</span>.
                    </p>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                        For me, the goal isn&apos;t simply to sharpen my own skills for their own sake.
                        What matters is how those skills can serve others — to contribute, support,
                        and create space where others can thrive as well.
                    </p>

                    <div className="pt-4">
                        <h3 className="text-lg font-semibold text-white mb-4">When I&apos;m not coding</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {interests.map((interest) => (
                                <div 
                                    key={interest.label}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                                >
                                    <interest.icon className="text-purple-400 text-xl" />
                                    <div>
                                        <p className="text-white font-medium">{interest.label}</p>
                                        <p className="text-xs text-gray-400">{interest.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
