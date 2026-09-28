import Link from 'next/link';
import { Calendar, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
export default function HeroSection() {
    return (
        <div className="  bg-[#F8FAFC]   text-slate-900 selection:bg-[#B185DB] selection:text-[#B185DB]">

            {/* Navigation Bar */}
            <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="">

                            <Link href="/" className="font-semibold text-xl tracking-tight text-slate-800  flex items-center  ">
                                <Image src="/images/logo.png" alt="Logo" className="h-20 w-auto" width={100} height={100} /> Dr. Prachi's&nbsp;<span className="font-light text-slate-500">Dental Clinic</span>
                            </Link>
                        </div>

                        {/* Desktop Nav CTA */}
                        <div className="hidden md:flex items-center gap-6">
                            <nav className="flex gap-6 text-sm font-medium text-slate-600">
                                <Link href="#services" className="hover:text-[#B185DB] transition-colors">Services</Link>
                                <Link href="#about" className="hover:text-[#B185DB] transition-colors">About</Link>
                                <Link href="#reviews" className="hover:text-[#B185DB] transition-colors">Reviews</Link>
                                <Link href="#gallery" className="hover:text-[#B185DB] transition-colors">Gallery</Link>
                            </nav>
                            <a href='#book' className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-[#B185DB] rounded-full hover:bg-teal-700 hover:shadow-md transition-all duration-300">
                                Book Appointment
                            </a >
                        </div>

                        {/* Mobile Menu Button (Placeholder) */}
                        <div className="md:hidden flex items-center">
                            <button className="text-slate-600 hover:text-slate-900 focus:outline-none">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#B185DB]/50 rounded-full blur-3xl opacity-60"></div>
                    <div className="absolute bottom-[20%] right-[-5%] w-[30rem] h-[30rem] bg-blue-50/50 rounded-full blur-3xl opacity-70"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className="col-span-12 lg:col-span-6 lg:text-left text-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B185DB]/10 border border-[#B185DB] text-[#B185DB] text-sm font-medium mb-6">
                                <Star className="w-4 h-4 fill-[#B185DB] text-[#B185DB]" />
                                <span>Top-Rated Dental Care in Your City</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
                                Gentle, Advanced <br className="hidden lg:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B185DB] to-blue-600">
                                    Dental Care.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Experience world-class dentistry focused on your comfort. From painless root canals to radiant cosmetic transformations, we make every smile brilliant.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-[#B185DB] rounded-full hover:bg-teal-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                </button>
                                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                                    View Treatments
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Trust Badges Container */}
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-200/60">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                                                {/* Placeholder for patient avatars */}
                                                <div className="w-full h-full bg-gradient-to-br from-[#B185DB] to-slate-200"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-slate-800">500+ Happy Smiles</p>
                                        <div className="flex gap-0.5">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden sm:block w-px h-10 bg-slate-200"></div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-bold text-slate-800">Painless Root Canals</p>
                                        <p className="text-xs text-slate-500">Expert Care</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content / Image Area */}
                        <div className="col-span-12 lg:col-span-6 mt-16 lg:mt-0 relative">
                            {/* Glassmorphic card overlay for a high-end touch */}
                            <div className="absolute -bottom-6 -left-6 z-10 backdrop-blur-xl bg-white/80 p-4 rounded-2xl border border-white/50 shadow-xl hidden md:flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#B185DB] rounded-full flex items-center justify-center">
                                    <span className="text-2xl">🦷</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-800">Modern Equipment</p>
                                    <p className="text-xs text-slate-500">100% Safe & Hygienic</p>
                                </div>
                            </div>

                            {/* Main Image Placeholder - Replace src with actual high-end clinic/doctor image */}
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 aspect-[4/5] lg:aspect-square">
                                <img
                                    src="/images/female-dentist-pointing-digital-tablet-screen-patient-sitting-chair-clinic.jpg"
                                    alt="Modern Dental Care Environment"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}