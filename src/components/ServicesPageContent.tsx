"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import PageHero from './PageHero';
import ElectricBorder from './ElectricBorder';

const services = [
    {
        title: "Network Infrastructure",
        description: "Robust network systems designed effectively. From structured cabling to enterprise-grade setups, we ensure speed and security.",
        features: ["Structured cabling", "Enterprise wireless", "Network security"],
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&q=80", // Server/Data Center
        color: "from-blue-600 to-blue-900"
    },
    {
        title: "System Administration",
        description: "We manage servers, desktops, and IT environments. Setup, troubleshooting, and monitoring to keep your team productive.",
        features: ["Server maintenance", "Desktop support", "System monitoring"],
        image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&q=80", // Monitors/Code
        color: "from-purple-600 to-purple-900"
    },
    {
        title: "Electrical Installation",
        description: "Reliable electrical works for homes and offices. We install and maintain wiring and energy-efficient power solutions.",
        features: ["Commercial wiring", "Power distribution", "Energy efficiency"],
        image: "https://images.unsplash.com/photo-1621905251189-fc415343e8a7?w=800&q=80", // Electrician/Wiring
        color: "from-yellow-600 to-yellow-900"
    },
    {
        title: "Home & Office Automation",
        description: "Smart automation for your spaces. Lighting, climate control, and energy management for comfort and efficiency.",
        features: ["Smart lighting", "Climate control", "Energy management"],
        image: "https://images.unsplash.com/photo-1558002038-1091a166111c?w=800&q=80", // Smart Home
        color: "from-green-600 to-green-900"
    },
    {
        title: "CCTV & Security Systems",
        description: "Advanced surveillance to protect what matters. Cameras, alarms, and monitoring systems tailored to your safety.",
        features: ["HD CCTV installation", "Intrusion detection", "24/7 monitoring"],
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80", // Security Camera
        color: "from-red-600 to-red-900"
    },
    {
        title: "Embedded Systems",
        description: "Custom hardware and software solutions. We design IoT sensors and industrial controllers that drive innovation.",
        features: ["IoT solutions", "Industrial control", "HW-SW integration"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80", // Chip/Circuit
        color: "from-cyan-600 to-cyan-900"
    },
];

export default function ServicesPageContent() {
    return (
        <main className="bg-black min-h-screen">
            <PageHero
                title="Our Services"
                subtitle="Future-ready solutions designed for your business needs."
            />

            <section className="py-20 -mt-20 relative z-10">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <ElectricBorder color={index % 2 === 0 ? "#3b82f6" : "#8b5cf6"} style={{ height: '100%' }}>
                                    <div className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#0F121C] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                                        {/* Image Area */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            {/* Overlay Gradient */}
                                            <div className={`absolute inset-0 bg-gradient-to-t from-[#0F121C] to-transparent z-10 opacity-90`} />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 mix-blend-overlay z-10`} />

                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Content Area */}
                                        <div className="p-8 pt-2 flex flex-col flex-grow relative z-20">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {service.title}
                                            </h3>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                                {service.description}
                                            </p>

                                            <div className="space-y-2 pt-4 border-t border-white/5 mt-auto">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                                                        <span className="text-xs text-gray-300 font-medium">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </ElectricBorder>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
