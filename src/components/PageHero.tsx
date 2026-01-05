"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Aurora from "./Aurora";

interface PageHeroProps {
    title: string;
    subtitle: string;
    className?: string;
}

export default function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
    return (
        <section className={`relative min-h-screen overflow-hidden flex items-center ${className}`}>
            {/* Animated Background */}
            <Aurora
                colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
                blend={0.5}
                amplitude={1.0}
                speed={0.5}
            />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                    >
                        {title}
                    </motion.h1>
                    <div className="h-1 w-24 bg-blue-500 mb-8 rounded-full" />
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
            >
                <ChevronDown className="w-10 h-10" />
            </motion.div>
        </section>
    );
}
