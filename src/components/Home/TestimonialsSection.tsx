'use client'; // Next.js App Router me Swiper (client component) use karne ke liye zaruri hai

import { Star, Quote, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
    {
        name: "Kiran More",
        review: "I had an amazing experience at Dr. Prachi's Dental clinic. The doctor is professional, and the clinic was clean...",
        link: "https://g.co/kgs/at2iCpS",
        rating: 5,
    },
    {
        name: "Chintan Bhansali",
        review: "I visited Dr. Prachi's clinic few weeks ago for my root canal extraction. It was a pain free process and she is an extreme perfectionist and friendly as well. ...",
        link: "https://g.co/kgs/F6tNxjS",
        rating: 5,
    },
    {
        name: "Shreyash Gorivale",
        review: "It was my first dental treatment experience and it was great with Dr. Prachi. I was scared initially, but she made it very comfortable....",
        link: "https://g.co/kgs/tyC5sbV",
        rating: 5,
    },
    {
        name: "Sharmila Baikar",
        review: "I had an excellent experience with Dr. Prachi! She prioritised my comfort and worked around my schedule...",
        link: "https://g.co/kgs/qNw27rb",
        rating: 5,
    },
    {
        name: "Yogesh Tambe",
        review: "I'd been struggling with [dental issue] for a while, and Dr. Prachi was the first dentist to really listen and offer a solution that worked...",
        link: "https://g.co/kgs/2Tmmvqf",
        rating: 5,
    }
];

export default function TestimonialsSection() {
    return (
        <section id="reviews" className="py-20 lg:py-20 bg-[#F8FAFC] relative overflow-hidden">

            {/* Background Decorative Element */}
            <div className="absolute right-0 top-1/4 w-[30rem] h-[30rem] bg-[#B185DB]/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 w-[20rem] h-[20rem] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-[#B185DB] uppercase tracking-wider mb-3">
                        Patient Stories
                    </h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Real experiences from <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B185DB] to-blue-500">
                            our happy patients.
                        </span>
                    </h3>
                </div>

                {/* Swiper Slider Wrapper */}
                <div className="pb-12"> {/* Padding bottom for pagination dots */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-custom-bullet',
                            bulletActiveClass: 'swiper-custom-bullet-active',
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="w-full h-full px-10"
                    >
                        {reviews.map((item, index) => (
                            <SwiperSlide key={index} className="h-auto pb-10"> {/* h-auto ensures equal height cards */}
                                <div className="h-full flex flex-col p-8 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-xl transition-all duration-300 group">

                                    {/* Quote Icon */}
                                    <Quote className="absolute top-6 right-6 w-10 h-10 text-[#B185DB]/10 -z-10 group-hover:text-[#B185DB]/20 transition-colors duration-300" />

                                    {/* Star Rating */}
                                    <div className="flex gap-1 mb-5">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    {/* Review Text */}
                                    <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                                        "{item.review}"
                                    </p>

                                    {/* Footer of Card: Patient Name & Google Link */}
                                    <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                        <div>
                                            <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
                                        </div>

                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B185DB] hover:text-slate-900 transition-colors bg-[#B185DB]/10 hover:bg-slate-100 px-3 py-1.5 rounded-full"
                                        >
                                            Google <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Global CSS for Swiper Custom Pagination */}
                <style dangerouslySetInnerHTML={{
                    __html: `
  /* Yeh Swiper slides ko content ke hisaab se shrink hone se rokega */
  .swiper-slide {
    height: auto !important; 
  }
  
  /* Dots styling */
  .swiper-custom-bullet {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #cbd5e1;
    border-radius: 50%;
    margin: 0 4px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .swiper-custom-bullet-active {
    background-color: #B185DB;
    width: 24px;
    border-radius: 4px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 0px !important;
    width: 100%;
    text-align: center;
  }
`}} />

            </div>
        </section>
    );
}