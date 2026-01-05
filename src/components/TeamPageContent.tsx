"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';
import PageHero from './PageHero';
import SpotlightCard from './SpotlightCard';

const team = [
    {
        name: "Mwanje Joseph",
        role: "Sales Manager",
        description: "Leads and motivates the sales team, sets sales targets, develops strategies, and ensures goals are met.",
        social: { linkedin: "#", twitter: "#", email: "mailto:joseph@techcrunchlimited.com" }
    },
    {
        name: "Haboya Emmanuel",
        role: "Technical Advisor",
        description: "Provides expert guidance on technical products or services, helping clients or teams solve problems and make informed decisions.",
        social: { linkedin: "#", github: "#", email: "mailto:emmanuel@techcrunchlimited.com" }
    },
    {
        name: "Kellen Muhoozi",
        role: "Finance And Operations",
        description: "Manages budgets, expenses, and company resources while overseeing daily operations to ensure smooth business performance.",
        social: { linkedin: "#", twitter: "#", email: "mailto:kellen@techcrunchlimited.com" }
    },
    {
        name: "Aaron Kamanzi",
        role: "Project Coordinator",
        description: "Organizes and tracks project timelines, coordinates team activities, and ensures resources are available for successful completion.",
        social: { linkedin: "#", twitter: "#", email: "mailto:aaron@techcrunchlimited.com" }
    },
    {
        name: "Isaac Blades Kasende",
        role: "Sales Representative",
        description: "Identifies potential customers, presents products or services, and closes sales to achieve personal and team targets.",
        social: { linkedin: "#", twitter: "#", email: "mailto:isaac@techcrunchlimited.com" }
    },
    {
        name: "Sherwin Asingwire",
        role: "Sales Representative",
        description: "Builds relationships with clients, understands their needs, and recommends solutions to drive revenue growth.",
        social: { linkedin: "#", twitter: "#", email: "mailto:sherwin@techcrunchlimited.com" }
    },
    {
        name: "Mercyline Nafula",
        role: "IT Specialist",
        description: "Maintains and supports computer systems and networks, troubleshooting technical issues to ensure operational efficiency.",
        social: { linkedin: "#", github: "#", email: "mailto:mercyline@techcrunchlimited.com" }
    },
    {
        name: "Happy Kutentsa",
        role: "Sales Representative",
        description: "Engages with prospects, handles inquiries, and maintains a pipeline of opportunities to support business expansion.",
        social: { linkedin: "#", twitter: "#", email: "mailto:happy@techcrunchlimited.com" }
    },
    {
        name: "Daphine Kansime",
        role: "Sales Representative",
        description: "Delivers presentations to potential clients and negotiates contracts to secure new business deals.",
        social: { linkedin: "#", twitter: "#", email: "mailto:daphine@techcrunchlimited.com" }
    },
    {
        name: "Emunot Sharma Emmanuel",
        role: "Software Engineer",
        description: "Designs, develops, and maintains software applications, ensuring high performance and responsiveness.",
        social: { linkedin: "#", github: "#", email: "mailto:emunot@techcrunchlimited.com" }
    },
];

export default function TeamPageContent() {
    return (
        <main className="bg-black min-h-screen">
            <PageHero
                title="Our Dedicated Team"
                subtitle="Dedicated professionals committed to delivering exceptional results"
                className="mb-0"
            />

            <section className="py-20 relative z-10 -mt-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <SpotlightCard className="h-full flex flex-col items-center text-center p-8 bg-[#0b0e14]/50 border-white/5 hover:border-blue-500/30 transition-all hover:transform hover:-translate-y-1 duration-300" spotlightColor="rgba(0, 229, 255, 0.1)">
                                    <div className="mb-6 relative z-10">
                                        <div className="w-40 h-40 bg-gray-800 rounded-lg overflow-hidden relative">
                                            {/* Simplified Image Placeholder for now */}
                                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                                                <span className="text-4xl font-bold text-white/20">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-blue-500 mb-1 z-10 relative">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-400/80 uppercase tracking-widest mb-4 z-10 relative">
                                        {member.role}
                                    </p>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow z-10 relative">
                                        {member.description}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto z-10 relative">
                                        {member.social.linkedin && (
                                            <a href={member.social.linkedin} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.social.twitter && (
                                            <a href={member.social.twitter} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                                <Twitter className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.social.github && (
                                            <a href={member.social.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {member.social.email && (
                                            <a href={member.social.email} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
