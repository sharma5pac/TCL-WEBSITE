"use client";
import React from 'react';
import { Twitter, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react';

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
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                            <li><a href="#team" className="hover:text-blue-400 transition-colors">Team</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
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
                                <span>+256 700 000 000</span>
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
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
