import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="w-full mt-2 px-4">
            <div className="flex justify-between items-center">
                {/* Site name on the left */}
                <div className="text-xl font-bold">
                    <Link href="/">Sean Schelin</Link>
                </div>

                {/* Navigation links hugging the right */}
                <div className="flex space-x-4 text-xl">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/Work" className="hover:underline">Work</Link>
                    <Link href="/Skills" className="hover:underline">Skills</Link>
                    <Link href="/Education" className="hover:underline">Education</Link>
                    <Link href="/Contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
