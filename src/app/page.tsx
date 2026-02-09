"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HomeServicesPreview from "@/components/HomeServicesPreview";
import HomeTeamPreview from "@/components/HomeTeamPreview";
import HomeAboutPreview from "@/components/HomeAboutPreview";
import DarkVeil from "@/components/DarkVeil";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">

      {/* Simplified Hero */}
      <section className="relative flex-grow flex items-center justify-center min-h-screen overflow-hidden">
        {/* Animated Background */}
        <DarkVeil />

        <div className="container px-4 z-10 text-center pb-20 md:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tighter"
          >
            Smart Technology. <br />
            <span className="text-blue-500">Reliable Solutions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We design clean, secure, and smooth experiences for web and mobile. Fast loading, pixel-perfect, and future friendly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/services" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-all flex items-center justify-center gap-2 group">
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full text-lg font-semibold transition-all">
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce cursor-pointer z-10"
          onClick={() => {
            const nextSection = document.getElementById('services-preview');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      <div id="services-preview">
        <HomeServicesPreview />
      </div>
      <HomeTeamPreview />
      <HomeAboutPreview />

    </main >
  );
}
