import AboutVideoSection from "@/components/about-video/about-video";
import CourseContentsSection from "@/components/course-contents/course-contents";
import CourseDetails from "@/components/course-details/course-details";
import FAQSection from "@/components/faq-section/faq-section";
import HeroSection from "@/components/hero/hero-section";
import OfferSection from "@/components/offer/offer-section";
import TestimonySection from "@/components/testimony/testimony";
import WhatsappContactSection from "@/components/whatsapp-contact/whatsapp-contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <OfferSection/>
      <WhatsappContactSection/>
      <AboutVideoSection/>
      <FAQSection/>
      <CourseDetails/>
      <CourseContentsSection/>
      <TestimonySection/>
    </main>
  );
}
