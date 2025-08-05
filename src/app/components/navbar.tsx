'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='w-full mt-2 flex items-center justify-between'>
            <div className="text-xl font-bold">
                <Link href="/">Sean Schelin</Link>
            </div>
            <div className="space-x-4 text-2xl">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/Work" className="hover:underline">Work</Link>
                <Link href="/Skills" className="hover:underline">Skills</Link>
                <Link href="/Education" className="hover:underline">Education</Link>
                <Link href="/Contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
