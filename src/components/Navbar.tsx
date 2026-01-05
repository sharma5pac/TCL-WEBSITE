"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FluidGlassBackground from './FluidGlassBackground';
import PillNav from './PillNav';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            {/* Desktop / Tablet Floating Pill Navbar */}
            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl h-16 md:h-20 lg:h-22 perspective-1000 hidden md:block">
                {/* 3D Glass Background Layer */}
                <div className="absolute inset-0 w-full h-full z-0 rounded-full overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/5">
                    {/* Static CSS Fallback (Visible while 3D loads) */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-full z-0" />

                    {/* Dynamic 3D Layer */}
                    <FluidGlassBackground />
                </div>

                {/* Content Layer */}
                <div className="relative z-10 w-full h-full flex items-center justify-between px-8 md:px-12">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                        TCL
                    </Link>

                    {/* Navigation Links */}
                    <nav className="flex items-center gap-1 md:gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                        ? 'text-white bg-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active-pill"
                                            className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </header>

            {/* Mobile Navigation (PillNav) */}
            <div className="md:hidden fixed top-0 w-full z-50 px-4 py-4 flex justify-end">
                <div className="w-12"> {/* Container for just the button essentially */}
                    <PillNav
                        items={navLinks.map(l => ({ label: l.name, href: l.href }))}
                        baseColor="#ffffff"
                        pillColor="#000000"
                    />
                </div>
            </div>
        </>
    );
}
