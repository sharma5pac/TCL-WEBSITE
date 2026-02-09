"use client";
import React from 'react';
import { motion } from 'framer-motion';
import PageHero from './PageHero';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function ContactPageContent() {
    return (
        <main className="bg-black min-h-screen">
            <PageHero
                title="Contact Us"
                subtitle="Get in touch. Let's discuss how we can help your business grow."
            />

            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8">Let's Start a Conversation</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                                        <p className="text-gray-400">Kyato Complex, Bombo Road</p>
                                        <p className="text-gray-400 text-sm">(Opposite Watoto Church)</p>
                                        <p className="text-gray-500 text-sm mt-1">Kampala, Uganda</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                                        <p className="text-gray-400">+256 782 912385</p>
                                        <p className="text-gray-500 text-sm mt-1">Support 24/7</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-500">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                                        <p className="text-gray-400">info@techcrunchlimited.com</p>
                                        <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Integration */}
                            <div className="mt-12 h-64 w-full rounded-2xl bg-neutral-900 border border-white/10 overflow-hidden relative">
                                <iframe
                                    src="https://maps.google.com/maps?q=Watoto+Church+Downtown,+Kampala&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Office Location"
                                />
                                {/* Overlay to tint it slightly blue/tech to match theme */}
                                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none mix-blend-overlay"></div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                            <form className="space-y-6" onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const firstName = formData.get('firstName');
                                const lastName = formData.get('lastName');
                                // const email = formData.get('email'); // Not needed for mailto body usually, but good to have
                                const message = formData.get('message');

                                const subject = `Contact from ${firstName} ${lastName}`;
                                const body = `Name: ${firstName} ${lastName}\n\nMessage:\n${message}`;

                                window.location.href = `mailto:info@techcrunchlimited.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium text-gray-400">First Name</label>
                                        <input name="firstName" type="text" id="firstName" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium text-gray-400">Last Name</label>
                                        <input name="lastName" type="text" id="lastName" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email Address</label>
                                    <input name="email" type="email" id="email" required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea name="message" id="message" rows={4} required className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
