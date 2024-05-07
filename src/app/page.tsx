import HeroSection from "@/components/hero/hero-section";
import OfferSection from "@/components/offer/offer-section";
import WhatsappContactSection from "@/components/whatsapp-contact/whatsapp-contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <OfferSection/>
      <WhatsappContactSection/>

      <section id="faq" className="flex min-h-screen bg-gray-300">
        <h1>Preguntas Frecuentes</h1>
      </section>
    </main>
  );
}
