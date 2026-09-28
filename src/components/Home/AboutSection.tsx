import { CheckCircle2, GraduationCap, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="py-20 lg:py-20 bg-white relative overflow-hidden">

            {/* Background Decorative Blobs with new #B185DB color */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#B185DB]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Column: Image & Floating Badges */}
                    <div className="relative mb-16 lg:mb-0">
                        {/* Main Image Container */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-slate-100 border-4 border-slate-50 shadow-2xl">
                            <Image
                                src="/images/profile.jpg"
                                width={800}
                                height={1000}
                                alt="Dr. Prachi Katkar"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent mix-blend-multiply"></div>
                        </div>

                        {/* Floating Glassmorphic Stat Card 1 */}
                        <div className="absolute top-70 -right-4 sm:-right-8 lg:-right-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/60 flex items-center gap-4 animate-fade-in-up">
                            <div className="w-12 h-12 bg-[#B185DB]/15 rounded-full flex items-center justify-center flex-shrink-0">
                                <Heart className="w-6 h-6 text-[#B185DB]" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-slate-900 leading-none mb-1">Compassionate</p>
                                <p className="text-sm font-medium text-slate-600">Dental Care</p>
                            </div>
                        </div>

                        {/* Floating Glassmorphic Stat Card 2 */}
                        <div className="absolute -bottom-6 left-6 sm:left-12 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/60 flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#B185DB]/15 rounded-full flex items-center justify-center flex-shrink-0">
                                <GraduationCap className="w-5 h-5 text-[#B185DB]" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">BDS</p>
                                <p className="text-xs font-medium text-slate-500">Reputed University</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:pl-8">
                        <h2 className="text-sm font-bold text-[#B185DB] uppercase tracking-wider mb-2">
                            About Dr. Prachi
                        </h2>

                        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
                            Dr. Prachi Katkar
                        </h3>

                        {/* Registration Number Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6">
                            <ShieldCheck className="w-4 h-4 text-[#B185DB]" />
                            <span className="text-xs font-bold text-slate-600 tracking-wide">
                                Reg. No. A-41869
                            </span>
                        </div>

                        <div className="space-y-5 text-lg text-slate-600 mb-8 leading-relaxed">
                            <p>
                                Dr. Prachi is a dedicated and compassionate dentist committed to providing gentle, high-quality care to patients of all ages. She believes in making every dental visit a positive experience and ensures that each patient feels comfortable and is well informed. She has completed her BDS from a reputed University.
                            </p>
                            <p>
                                With a strong focus on preventive care and patient education, Dr. Prachi is passionate about helping people achieve healthy, confident smiles. She's committed to providing class dental care using the latest techniques and technology. Her clinic reflects her belief that dentistry is not just science — it's an art that transforms lives through confident smiles.
                            </p>
                        </div>

                        {/* Core Values / Qualifications List */}
                        <div className="space-y-4 mb-10">
                            {[
                                "Specialized in Painless Root Canal Treatments",
                                "Advanced Training in Cosmetic Dentistry",
                                "Committed to 100% Transparent Pricing & Care",
                                "State-of-the-art Sterilization Protocols"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-[#B185DB] flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Signature & Action */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 sm:gap-10">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg transition-all duration-300">
                                Read Full Profile
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            <div className="text-center sm:text-left mt-4 sm:mt-0">
                                <span className="font-serif italic text-2xl text-slate-400 block mb-1">Dr. Prachi</span>
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Chief Dentist</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}