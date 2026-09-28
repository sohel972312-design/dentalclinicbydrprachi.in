'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const galleryImages = [
    { src: "/images/teeth-whitening.jpg", alt: "Modern Clinic Interior" },
    { src: "/images/cavity-clean.jpg", alt: "Treatment Room" },
    { src: "/images/teeth-sample.jpg", alt: "Happy Patient Consultation" },
    { src: "/images/before and after image.jpg", alt: "Happy Patient Consultation" },
    { src: "/images/cavity and teeth whitening.jpg", alt: "Happy Patient Consultation" },
    { src: "/images/scaling.jpg", alt: "Happy Patient Consultation" },
    { src: "/images/teeth cleaning.jpg", alt: "Happy Patient Consultation" },
];

export default function PhotoGallerySection() {
    // Fix 1: Type define kiya gaya <number | null>
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Keyboard navigation logic
    const handleKeyDown = useCallback((e: any) => {
        if (selectedIndex === null) return;
        if (e.key === 'Escape') setSelectedIndex(null);
        if (e.key === 'ArrowRight') showNext(e);
        if (e.key === 'ArrowLeft') showPrev(e);
    }, [selectedIndex]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        // Scroll lock when lightbox is open
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown, selectedIndex]);

    // Fix 2: prev state ko check kiya ki null toh nahi hai
    const showNext = (e?: any) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === galleryImages.length - 1 ? 0 : prev + 1;
        });
    };

    const showPrev = (e?: any) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => {
            if (prev === null) return null;
            return prev === 0 ? galleryImages.length - 1 : prev - 1;
        });
    };

    return (
        <section id="gallery" className="py-20 lg:py-28 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-sm font-bold text-[#B185DB] uppercase tracking-wider mb-3">
                        Clinic Tour
                    </h2>
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                        Photo Gallery
                    </h3>
                    <p className="mt-4 text-slate-600">
                        Take a look at our state-of-the-art facility designed for your comfort and safety.
                    </p>
                </div>

                {/* Modern Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {galleryImages.map((image, index) => {
                        // Masonry style grid logic
                        let gridClasses = "col-span-1 row-span-1";
                        if (index === 0) gridClasses = "col-span-2 row-span-1";
                        if (index === 3) gridClasses = "col-span-2 md:col-span-1 row-span-2";
                        if (index === 4) gridClasses = "col-span-2 md:col-span-3 row-span-1";

                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`${gridClasses} rounded-2xl overflow-hidden group relative bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Hover Overlay with Zoom Icon */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ZoomIn className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Advanced Lightbox Modal */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity"
                    onClick={() => setSelectedIndex(null)} // Click outside to close
                >
                    {/* Top Bar (Counter & Close) */}
                    <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-[110]">
                        <span className="text-white/70 font-medium tracking-widest text-sm">
                            {selectedIndex + 1} / {galleryImages.length}
                        </span>
                        <button
                            onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}
                            className="p-2 bg-white/10 hover:bg-[#B185DB] rounded-full text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-[#B185DB] rounded-full text-white transition-colors z-[110] hidden sm:block"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={showNext}
                        className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-[#B185DB] rounded-full text-white transition-colors z-[110] hidden sm:block"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Main Image Container */}
                    <div className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 flex flex-col items-center justify-center">
                        <img
                            src={galleryImages[selectedIndex].src}
                            alt={galleryImages[selectedIndex].alt}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-fade-in"
                            onClick={(e) => e.stopPropagation()} // Prevent click from closing lightbox
                        />

                        {/* Image Caption/Alt Text */}
                        <p className="text-white/80 mt-6 text-lg font-medium text-center" onClick={(e) => e.stopPropagation()}>
                            {galleryImages[selectedIndex].alt}
                        </p>

                        {/* Mobile Navigation (Visible only on small screens below the image) */}
                        <div className="flex sm:hidden gap-6 mt-6" onClick={(e) => e.stopPropagation()}>
                            <button onClick={showPrev} className="p-3 bg-white/10 active:bg-[#B185DB] rounded-full text-white">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button onClick={showNext} className="p-3 bg-white/10 active:bg-[#B185DB] rounded-full text-white">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Global CSS for fade-in animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}} />
        </section>
    );
}