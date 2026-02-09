"use client";
import React from 'react';
import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Tech Crunch Limited</h3>
                        <p className="text-gray-400">
                            Empowering businesses with resilient infrastructure and smart technology solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link href="/team" className="hover:text-blue-400 transition-colors">Team</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Network Infrastructure</li>
                            <li>Security Systems</li>
                            <li>Home Automation</li>
                            <li>System Administration</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-blue-400" />
                                <span>Kamapala, Uganda</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-blue-400" />
                                <span>+256 782 912385</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-blue-400" />
                                <span>info@techcrunchlimited.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Tech Crunch Limited. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {/* WhatsApp */}
                        <a href="https://wa.me/256782912385" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors" aria-label="WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>

                        {/* X (formerly Twitter) */}
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.444L8.444 4H4z" />
                                <path d="M4 20l6.768-6.528" />
                                <path d="M13.232 10.528 20 4" />
                            </svg>
                        </a>

                        {/* Email */}
                        <a href="mailto:info@techcrunchlimited.com" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Email">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
