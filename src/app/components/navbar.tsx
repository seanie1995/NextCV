'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="w-full mt-2">

            <div className="flex justify-between items-center px-4">
                <div className="text-xl font-bold">
                    <Link href="/">Sean Schelin</Link>
                </div>
                <button className="sm:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <div className={`px-4 text-xl ${isOpen ? 'block' : 'hidden'} sm:flex sm:space-x-4`}>
                <Link href="/" className="block py-2 hover:underline">Home</Link>
                <Link href="/Work" className="block py-2 hover:underline">Work</Link>
                <Link href="/Skills" className="block py-2 hover:underline">Skills</Link>
                <Link href="/Education" className="block py-2 hover:underline">Education</Link>
                <Link href="/Contact" className="block py-2 hover:underline">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
