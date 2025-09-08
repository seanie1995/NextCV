"use client"

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full mt-2 px-4">
            <div className="flex justify-between items-center">
                {/* Site name */}
                <div className="text-xl font-bold sm:block">
                    <Link href="/">Sean Schelin</Link>
                </div>

                {/* Burger button for mobile */}
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        {/* Simple burger icon */}
                        <div className="w-6 h-0.5 bg-black mb-1"></div>
                        <div className="w-6 h-0.5 bg-black mb-1"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </button>
                </div>

                {/* Navigation links */}
                <div className={`flex-col sm:flex sm:flex-row sm:space-x-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-white sm:bg-transparent transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link href="/" className="block px-4 py-2 hover:underline">Home</Link>
                    <Link href="/Work" className="block px-4 py-2 hover:underline">Work</Link>
                    <Link href="/Skills" className="block px-4 py-2 hover:underline">Skills</Link>
                    <Link href="/Education" className="block px-4 py-2 hover:underline">Education</Link>
                    <Link href="/Contact" className="block px-4 py-2 hover:underline">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
