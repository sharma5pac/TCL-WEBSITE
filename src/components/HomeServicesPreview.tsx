"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, Monitor, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import ElectricBorder from './ElectricBorder';

const services = [
    {
        title: "Network Infrastructure",
        description: "Design, implementation, and management of robust enterprise networks.",
        icon: Server,
        color: "text-blue-400",
        image: "/images/network-admin.jpg"
    },
    {
        title: "Home & Office Automation",
        description: "Smart technologies to automate your environment for comfort and efficiency.",
        icon: Zap,
        color: "text-green-400",
        image: "/images/home-office.jpg"
    },
    {
        title: "Electrical Installation",
        description: "Certified professional electrical setups for commercial and residential.",
        icon: Zap,
        color: "text-yellow-400",
        image: "/images/electrical-insta.jpg"
    },
];

export default function HomeServicesPreview() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4">
                        Our Services
                    </h2>
                    <p className="text-blue-500 font-medium mb-2">From rapid MVPs to scalable cloud products</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Link href="/services" className="block h-full">
                                <ElectricBorder color={index % 2 === 0 ? "#3b82f6" : "#8b5cf6"} style={{ height: '100%', borderRadius: 16 }}>
                                    <div className="group relative rounded-2xl bg-[#0F121C] transition-all hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col overflow-hidden">
                                        {service.image && (
                                            <div className="relative w-full h-40 overflow-hidden">
                                                <Image
                                                    src={service.image}
                                                    alt={service.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F121C] to-transparent" />
                                            </div>
                                        )}
                                        <div className="p-8 flex flex-col items-center text-center">
                                            <div className={`mb-6 p-4 rounded-xl bg-white/5 w-16 h-16 flex items-center justify-center ${service.color}`}>
                                                <service.icon className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </ElectricBorder>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link href="/services" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all flex items-center gap-2 group">
                        View All Services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
