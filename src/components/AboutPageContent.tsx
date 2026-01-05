"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPageContent() {
    return (
        <main className="bg-black min-h-screen">
            <PageHero
                title="About Tech Crunch Limited"
                subtitle="Innovating for a connected future. We are more than just a tech company."
            />

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</h2>
                            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
                                <p>
                                    Tech Crunch Limited is a premier technology solutions provider based in Uganda, dedicated to delivering state-of-the-art infrastructure and software services.
                                </p>
                                <p>
                                    Founded with a vision to bridge the gap between complex technology and everyday business needs, we specialize in creating systems that are not only powerful but also intuitive and reliable.
                                </p>
                                <p>
                                    From securing your premises with advanced CCTV systems to automating your office workflow and building custom software, our team of experts is committed to excellence in every line of code and every wire connected.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 gap-6"
                        >
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Target className="w-10 h-10 text-blue-500 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                                <p className="text-gray-400">To empower businesses and individuals through innovative, reliable, and scalable technology solutions.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Lightbulb className="w-10 h-10 text-yellow-500 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                                <p className="text-gray-400">To be the leading partner in digital transformation and infrastructure development across the region.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
