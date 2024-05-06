import HeroSection from "@/components/hero/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <section id="offer" className="flex min-h-screen">
        <h1>Oferta</h1>
      </section>

      <section id="faq" className="flex min-h-screen bg-gray-300">
        <h1>Preguntas Frecuentes</h1>
      </section>
    </main>
  );
}
