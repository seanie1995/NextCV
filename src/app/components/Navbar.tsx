"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/CV", label: "CV" },
  { href: "/AboutMe", label: "About" },
  { href: "/Contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[rgba(15,10,26,0.95)] backdrop-blur-md shadow-lg shadow-purple-900/20" 
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            aria-label="Sean Schelin - Home"
          >
            <div className="relative">
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              Sean Schelin
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  isActive(link.href)
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                    isActive(link.href) ? "w-3/4" : "w-0"
                  }`}
                />
                <span 
                  className={`absolute inset-0 rounded-lg bg-purple-500/10 transition-opacity duration-300 ${
                    isActive(link.href) ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/10 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span 
                className={`absolute left-0 top-2 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span 
                className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 py-4 space-y-2 bg-[rgba(15,10,26,0.98)] backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive(link.href)
                  ? "text-purple-400 bg-purple-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
