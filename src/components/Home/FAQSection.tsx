'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Does a root canal treatment hurt?",
        answer: "Not at all. We use advanced rotary endodontics and highly effective local anesthesia to ensure that your root canal treatment is completely painless and comfortable. Most patients feel immediate relief from their existing toothache after the procedure."
    },
    {
        question: "How often should I visit the dentist for a routine checkup?",
        answer: "We recommend visiting the dentist every 6 months for a routine checkup and professional cleaning (scaling). Regular visits help us catch potential issues like cavities or gum disease early, saving you time, money, and discomfort in the long run."
    },
    {
        question: "Do you provide dental care for children?",
        answer: "Yes, Dr. Prachi is highly experienced in pediatric dentistry. We have a very gentle, friendly approach to make sure children feel safe and comfortable, ensuring they build a positive relationship with dental care from a young age."
    },
    {
        question: "What should I do in case of a dental emergency?",
        answer: "If you experience severe tooth pain, a knocked-out tooth, or swelling, please call us immediately on our contact number. We accommodate emergency appointments and will guide you on the immediate steps to take over the phone."
    },
    {
        question: "Are your pricing and treatment plans transparent?",
        answer: "Absolutely. We believe in 100% transparency. After your initial consultation and diagnosis, we will provide you with a clear, detailed treatment plan along with the exact costs involved before any procedure begins."
    }
];

export default function FAQSection() {
    // Fix: Type casting added here
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Fix: 'index' typed as number
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 lg:py-32 bg-[#F8FAFC] relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-sm font-bold text-[#B185DB] uppercase tracking-wider mb-3">
                        Got Questions?
                    </h2>
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-slate-600 text-lg">
                        Everything you need to know about your visit and treatments.
                    </p>
                </div>

                {/* FAQs Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`bg-white border rounded-2xl transition-colors duration-300 ${isOpen ? 'border-[#B185DB] shadow-md shadow-[#B185DB]/5' : 'border-slate-200 hover:border-slate-300'
                                    }`}
                            >
                                {/* Question Button */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-[#B185DB]' : 'text-slate-800'
                                        }`}>
                                        {faq.question}
                                    </span>

                                    {/* Rotating Icon */}
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#B185DB]/10 text-[#B185DB] rotate-180' : 'bg-slate-50 text-slate-400'
                                        }`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                {/* Answer Wrapper (Grid Trick for Smooth Height Animation) */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}