import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#0B1120] pt-20 pb-6 border-t border-slate-800 relative overflow-hidden">

            {/* Subtle Background Glow for premium feel */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B185DB]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Brand & Philosophy */}
                    <div className="lg:col-span-4 lg:pr-8">
                        <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                            <div className="w-9 h-9 rounded-lg bg-[#B185DB] flex items-center justify-center text-white font-bold text-xl font-heading group-hover:bg-[#9c6ec5] transition-colors">
                                P
                            </div>
                            <span className="font-heading font-semibold text-xl tracking-tight text-white">
                                Dr. Prachi's <span className="font-light text-slate-400">Clinic</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Committed to providing gentle, high-quality dental care in Mumbai. We believe dentistry is an art that transforms lives through confident smiles.
                        </p>

                        {/* Social Links (Using inline SVGs to fix the Lucide error) */}
                        <div className="flex items-center gap-4">
                            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#B185DB] hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#B185DB] hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-heading text-white font-semibold mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-3.5">
                            {['About Dr. Prachi', 'Our Services', 'Testimonials', 'Photo Gallery', 'Book Appointment'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.split(' ')[0].toLowerCase()}`}
                                        className="text-sm text-slate-400 hover:text-[#B185DB] transition-colors inline-block"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Timings */}
                    <div className="lg:col-span-3">
                        <h4 className="font-heading text-white font-semibold mb-6 tracking-wide">Clinic Timings</h4>
                        <div className="bg-slate-800/30 rounded-2xl p-5 border border-slate-800">
                            <div className="flex items-start gap-3 mb-4">
                                <Clock className="w-5 h-5 text-[#B185DB] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-white text-sm font-medium mb-1">Monday – Saturday</p>
                                    <p className="text-slate-400 text-sm">10:00 AM – 2:00 PM</p>
                                    <p className="text-slate-400 text-sm">5:00 PM – 9:30 PM</p>
                                </div>
                            </div>
                            <div className="pt-3 border-t border-slate-800/50">
                                <p className="text-[#B185DB] text-sm font-medium">Sunday: Closed</p>
                                <p className="text-slate-500 text-xs mt-1">*Available for emergencies on prior call.</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Contact & Location */}
                    <div className="lg:col-span-3">
                        <h4 className="font-heading text-white font-semibold mb-6 tracking-wide">Visit Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-[#B185DB] flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-2">
                                        Shanti Dwar, C-18, Sant Dnyaneshwar Rd, Shantivan, Nensey Colony, Borivali East, Mumbai, Maharashtra 400066
                                    </p>
                                    <a
                                        href="https://maps.google.com/?q=Shanti+Dwar+C-18+Sant+Dnyaneshwar+Rd+Borivali+East+Mumbai"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#B185DB] transition-colors"
                                    >
                                        Get Directions <ArrowUpRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#B185DB] flex-shrink-0" />
                                <a href="tel:+918208698255" className="text-slate-400 text-sm hover:text-white transition-colors">
                                    +91 82-086-98255
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#B185DB] flex-shrink-0" />
                                <a href="mailto:drprachisdentalclinic@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors break-all">
                                    drprachisdentalclinic@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Reg No */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs text-slate-500">
                    <p>© 2025 Dr. Prachi Katkar. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <span>Reg. No. A-41869</span>
                        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                        <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}