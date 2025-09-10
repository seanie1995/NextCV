"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import logo from "../../../public/images/logo.png"
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Site name */}

                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={40}      // adjust size as needed
                            height={40}     // adjust size as needed
                            className="rounded-full"
                        />
                        <span className="text-2xl font-bold">Sean Schelin</span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden sm:flex space-x-8 text-lg font-medium">
                        <Link href="/" className="hover:text-purple-400 transition-colors duration-200">Home</Link>
                        <Link href="/Work" className="hover:text-purple-400 transition-colors duration-200">Work</Link>
                        <Link href="/Skills" className="hover:text-purple-400 transition-colors duration-200">Skills</Link>
                        <Link href="/Education" className="hover:text-purple-400 transition-colors duration-200">Education</Link>
                        <Link href="/Contact" className="hover:text-purple-400 transition-colors duration-200">Contact</Link>
                    </div>

                    {/* Mobile burger button */}
                    <div className="sm:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex flex-col items-center justify-center space-y-1 focus:outline-none"
                        >
                            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
                            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
                            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`sm:hidden bg-gray-900 transition-max-height duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="flex flex-col px-4 py-2 space-y-2 text-lg font-medium">
                    <Link href="/" className="hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/Work" className="hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Work</Link>
                    <Link href="/Skills" className="hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Skills</Link>
                    <Link href="/Education" className="hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Education</Link>
                    <Link href="/Contact" className="hover:text-purple-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
