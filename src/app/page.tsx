import AboutVideoSection from "@/components/about-video/about-video";
import CertificateSection from "@/components/certificate-section/certificate-section";
import ContactSection from "@/components/contact/contact";
import CourseContentsSection from "@/components/course-contents/course-contents";
import CourseDetails from "@/components/course-details/course-details";
import FAQSection from "@/components/faq-section/faq-section";
import HeroSection from "@/components/hero/hero-section";
import OfferSection from "@/components/offer/offer-section";
import TestimonySection from "@/components/testimony/testimony";
import WhatsappContactSection from "@/components/whatsapp-contact/whatsapp-contact-section";
import WhatsappFloating from "@/components/whatsapp-contact/whatsapp-floating";

export default function Home() {
  return (
    <main>
      <WhatsappFloating/>
      <HeroSection/>
      <OfferSection/>
      <WhatsappContactSection/>
      <AboutVideoSection/>
      <FAQSection/>
      <CourseDetails/>
      <CertificateSection/>
      <CourseContentsSection/>
      <WhatsappContactSection/>
      <TestimonySection/>
      <ContactSection/>
    </main>
  );
}
