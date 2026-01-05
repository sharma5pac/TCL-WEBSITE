"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const team = [
    { name: "Mwanje Joseph", role: "Sales Manager" },
    { name: "Haboya Emmanuel", role: "Technical Advisor" },
];

export default function HomeTeamPreview() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Our Dedicated Team
                    </h2>
                    <p className="text-gray-400">Small team. Big outcomes.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#0F121C] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all group"
                        >
                            <div className="h-48 bg-gradient-to-b from-blue-900/20 to-[#0F121C] flex items-center justify-center relative">
                                <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{member.name}</h3>
                                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">{member.role}</p>
                                <p className="text-gray-500 text-sm mt-4">
                                    Leads strategies and ensures goals are met with precision and excellence.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href="/team" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all flex items-center gap-2 group backdrop-blur-sm border border-white/10">
                        Meet Our Full Team
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
