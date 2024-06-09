"use client";
import { DownloadIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import '../app/globals.css';

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-sm w-full sticky top-0 z-50">
            <div className="container mx-auto px-0 sm:px-10 md:px-20 lg:px-30 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2 md:space-x-4">
                    <img src='/assets/uifry.png' alt="Fire Logo" className="h-8 w-8" />
                    <div className="space-x-0">
                        <span className="text-4xl md:text-4xl lg:text-5xl font-bold">uifry</span>
                        <span className="text-xs md:text-xs font-bold">TM</span>
                    </div>
                </div>
                <div className="flex items-center justify-end flex-1 md:justify-center">
                    <div className="hidden md:flex md:space-x-4 font-bold text-xl">
                        <Link href="/" className='Nav-link'>
                            <span className="text-gray-800 hover:text-[rgb(255,85,85)]">Home</span>
                        </Link>
                        <Link href="/about" className='Nav-link'>
                            <span className="text-gray-800 hover:text-[rgb(255,85,85)]">About Us</span>
                        </Link>
                        <Link href="/pricing" className='Nav-link'>
                            <span className="text-gray-800 hover:text-[rgb(255,85,85)]">Pricing</span>
                        </Link>
                        <Link href="/features" className='Nav-link'>
                            <span className="text-gray-800 hover:text-[rgb(255,85,85)]">Features</span>
                        </Link>
                    </div>
                    <div className="md:hidden flex">
                        <button onClick={toggleMenu} className="text-gray-800">
                            {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex md:ml-4">
                    <button className="bg-black text-white p-2 rounded-md flex items-center">
                        <DownloadIcon className="h-6 w-6 mr-1" />
                        Download
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-10">
                    <Link href="/">
                        <span className="block px-4 py-2 text-gray-800 hover:text-[rgb(255,85,85)]">Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="block px-4 py-2 text-gray-800 hover:text-[rgb(255,85,85)]">About Us</span>
                    </Link>
                    <Link href="/pricing">
                        <span className="block px-4 py-2 text-gray-800 hover:text-[rgb(255,85,85)]">Pricing</span>
                    </Link>
                    <Link href="/features">
                        <span className="block px-4 py-2 text-gray-800 hover:text-[rgb(255,85,85)]">Features</span>
                    </Link>
                    <div className="px-4 py-2">
                        <button className="bg-black text-white w-full p-2 rounded-md flex items-center justify-center">
                            <link rel="stylesheet" href="/download">
                                <DownloadIcon className="h-6 w-6 mr-1" />
                                Download
                            </link>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
