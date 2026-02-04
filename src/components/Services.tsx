"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Server, Monitor, Zap, Home, Shield, Cpu } from 'lucide-react';
import Image from 'next/image';

const services = [
    { title: "Network Infrastructure", description: "Design, implementation, and management of robust enterprise networks.", icon: Server, color: "text-blue-400", image: "/images/network-admin.jpg" },
    { title: "System Administration", description: "Proactive management and configuration of your computer systems.", icon: Monitor, color: "text-purple-400" },
    { title: "Electrical Installation", description: "Certified professional electrical setups for commercial and residential.", icon: Zap, color: "text-yellow-400", image: "/images/electrical-insta.jpg" },
    { title: "Home Automation", description: "Smart technologies to automate your environment for comfort and efficiency.", icon: Home, color: "text-green-400", image: "/images/home-office.jpg" },
    { title: "CCTV & Security", description: "Advanced surveillance and alarm systems to protect your assets.", icon: Shield, color: "text-red-400" },
    { title: "Embedded Systems", description: "Custom hardware and software solutions for specialized applications.", icon: Cpu, color: "text-cyan-400" },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent opacity-50" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                        Our Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Delivering cutting-edge technical solutions tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10 flex flex-col"
                        >
                            {service.image && (
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                            )}
                            <div className="p-8 relative">
                                <div className={`mb-6 p-4 rounded-full bg-white/5 w-16 h-16 flex items-center justify-center ${service.color}`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
