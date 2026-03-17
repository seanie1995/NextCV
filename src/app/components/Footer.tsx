import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden mt-16 bg-[rgba(15,10,26,0.95)]">
      {/* Decorative top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Brand/Name Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">
              Sean <span className="gradient-text">Schelin</span>
            </h3>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
              Full Stack Developer building modern web applications with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-center gap-6">
            <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link>
            <Link href="/CV" className="text-gray-400 hover:text-purple-400 transition-colors">CV</Link>
            <Link href="/AboutMe" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link>
            <Link href="/Contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-5">
            <a
              href="https://www.linkedin.com/in/sean-schelin-057227179/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/seanie1995"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sean Schelin. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Built with <span className="text-purple-400 animate-pulse">Next.js</span> & <span className="text-cyan-400">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
