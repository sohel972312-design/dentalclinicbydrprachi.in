"use client";

import { useState, FormEvent, useEffect } from "react";
import { Send, Calendar, Clock, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [minDate, setMinDate] = useState("");

    // Set today's date as the minimum selectable date
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setMinDate(today);
    }, []);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            date: formData.get("date") as string,
            message: formData.get("message") as string,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                setError("Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="book" className="py-20 lg:py-20 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

                    {/* Left Side: Contact Info & Timings */}
                    <div>
                        <h2 className="font-heading text-sm font-bold text-[#B185DB] uppercase tracking-wider mb-3">
                            Book Appointment
                        </h2>
                        <h3 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                            Ready for your new smile?
                        </h3>
                        <p className="text-slate-600 mb-10 leading-relaxed text-lg">
                            Fill out the form to request an appointment. Our team will contact you shortly to confirm your exact time slot.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                                <Clock className="w-6 h-6 text-[#B185DB] flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Working Hours</h4>
                                    <p className="text-sm text-slate-600 mb-1">Monday – Saturday</p>
                                    <p className="text-sm font-medium text-slate-900 mb-3">10:00 AM – 2:00 PM & 5:00 PM – 9:30 PM</p>
                                    <p className="text-sm font-bold text-[#B185DB]">Sunday: Closed</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                                <Phone className="w-6 h-6 text-[#B185DB] flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Emergency Care</h4>
                                    <p className="text-sm text-slate-600 mb-2">Appointments available on prior call.</p>
                                    <a href="tel:+918208698255" className="text-lg font-bold text-slate-900 hover:text-[#B185DB] transition-colors">
                                        +91 82-086-98255
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-8 sm:p-10">
                        {success ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-[#B185DB]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Calendar className="w-10 h-10 text-[#B185DB]" />
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Request Sent!</h3>
                                <p className="text-slate-600">
                                    Thank you! We have received your request and will call you shortly to confirm your appointment time.
                                </p>
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="mt-8 text-sm font-bold text-[#B185DB] hover:text-[#8b5ebd]"
                                >
                                    Book another appointment
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name & Phone */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#B185DB] focus:ring-2 focus:ring-[#B185DB]/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#B185DB] focus:ring-2 focus:ring-[#B185DB]/20 outline-none transition-all"
                                            placeholder="+91 00000 00000"
                                        />
                                    </div>
                                </div>

                                {/* Email & Date */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#B185DB] focus:ring-2 focus:ring-[#B185DB]/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Preferred Date <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            min={minDate}
                                            required
                                            className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#B185DB] focus:ring-2 focus:ring-[#B185DB]/20 outline-none transition-all text-slate-700 cursor-pointer"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message / Symptom (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-[#B185DB] focus:ring-2 focus:ring-[#B185DB]/20 outline-none transition-all resize-none"
                                        placeholder="Tell us what you need help with..."
                                    ></textarea>
                                </div>

                                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#B185DB] rounded-xl hover:bg-[#8b5ebd] hover:shadow-lg hover:shadow-[#B185DB]/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        "Sending Request..."
                                    ) : (
                                        <>
                                            Book Appointment <Send className="w-5 h-5 ml-1" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-slate-500 mt-4">
                                    * This is a request form. Our team will call you to confirm the exact time.
                                </p>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}