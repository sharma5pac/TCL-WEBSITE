"use client";
import React from 'react';
import { motion } from 'framer-motion';

const team = [
    { name: "Kellen Muhoozi", role: "Finance And Operations" },
    { name: "Aaron Kamanzi", role: "Project Coordinator" }, // Corrected spelling
    { name: "Isaac Blades Kasende", role: "Sales Representative" },
    { name: "Sherwin Asingwire", role: "Sales Representative" },
    { name: "Mercyline Nafula", role: "IT Specialist" },
    { name: "Happy Kutentsa", role: "Sales Representative" },
    { name: "Daphine Kansime", role: "Sales Representative" },
    { name: "Emunot Sharma Emmanuel", role: "Software Engineer" },
];

export default function Team() {
    return (
        <section id="team" className="py-24 bg-neutral-900/50 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Meet The Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The dedicated professionals driving innovation at Tech Crunch Limited.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-black border border-white/10"
                        >
                            <div className="aspect-square bg-neutral-800 relative overflow-hidden">
                                {/* Placeholder for real images - using a gradient or initials for now */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white/20">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
