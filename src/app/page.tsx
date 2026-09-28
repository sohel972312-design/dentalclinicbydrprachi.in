import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import AboutSection from "@/components/Home/AboutSection";
import Image from "next/image";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import PhotoGallerySection from "@/components/Home/PhotoGallerySection";
import ContactForm from "@/components/Home/ContactForm";
import FAQSection from "@/components/Home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <PhotoGallerySection />
      <ContactForm />
      <FAQSection />
    </>
  );
}
