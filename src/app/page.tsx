import HeroSection from "@/components/hero/hero-section";
import OfferSection from "@/components/offer/offer-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <OfferSection/>

      <section id="faq" className="flex min-h-screen bg-gray-300">
        <h1>Preguntas Frecuentes</h1>
      </section>
    </main>
  );
}
