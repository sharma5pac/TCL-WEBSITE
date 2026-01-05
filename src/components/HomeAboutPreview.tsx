"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

export default function HomeAboutPreview() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="aspect-video bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            <Building2 className="w-32 h-32 text-blue-500/20 group-hover:text-blue-500/40 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            About Tech Crunch Limited
                        </h2>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            We Build The Future
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            At Tech Crunch Limited, we believe technology should inspire, empower, and innovate. Our journey started with a simple idea: make cutting-edge tech accessible to businesses of all sizes.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            We build software that launches startups and empowers SMEs — with a focus on speed, clarity, and long-term maintainability.
                        </p>

                        <Link href="/about" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all inline-flex items-center gap-2 group">
                            Learn More About Us
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
