import { Sparkles, ShieldPlus, Smile, Activity, HeartPulse, Baby, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Painless Root Canals",
        description: "Advanced rotary endodontics for a comfortable, single-visit root canal experience.",
        icon: Activity,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        title: "Cosmetic Dentistry",
        description: "Veneers, teeth whitening, and smile makeovers to give you a picture-perfect smile.",
        icon: Sparkles,
        color: "text-[#B185DB]",
        bgColor: "bg-teal-50",
    },
    {
        title: "Dental Implants",
        description: "Permanent, natural-looking tooth replacements using premium, bio-compatible materials.",
        icon: ShieldPlus,
        color: "text-slate-700",
        bgColor: "bg-slate-100",
    },
    {
        title: "Orthodontics & Aligners",
        description: "Clear aligners and modern braces to straighten your teeth invisibly and effectively.",
        icon: Smile,
        color: "text-[#B185DB]",
        bgColor: "bg-teal-50",
    },
    {
        title: "Pediatric Dentistry",
        description: "Gentle, fear-free dental care designed specifically for children's growing smiles.",
        icon: Baby,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
    },
    {
        title: "Routine Care & Cleaning",
        description: "Comprehensive checkups, scaling, and polishing to maintain optimal oral hygiene.",
        icon: HeartPulse,
        color: "text-slate-700",
        bgColor: "bg-slate-100",
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-20 lg:py-20 bg-[#F8FAFC] relative">
            {/* Subtle Background Accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                    <h2 className="text-sm font-bold text-[#B185DB] uppercase tracking-wider mb-3">
                        Our Treatments
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Comprehensive Care for <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B185DB] to-blue-600">
                            Every Smile
                        </span>
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We combine state-of-the-art technology with a compassionate approach to provide personalized dental treatments that prioritize your health and comfort.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h4>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <a href="#book" className="inline-flex items-center text-sm font-semibold text-[#B185DB] group-hover:text-teal-700">
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Area */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-6">Need a specific treatment not listed here?</p>
                    <button className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm">
                        View All Services
                    </button>
                </div>

            </div>
        </section>
    );
}