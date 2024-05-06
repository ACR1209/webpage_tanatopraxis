import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="home" className="flex min-h-screen bg-gray-300">
        <h1>Inicio</h1>  
      </section>

      <section id="offer" className="flex min-h-screen">
        <h1>Oferta</h1>  
      </section>

      <section id="faq" className="flex min-h-screen bg-gray-300">
        <h1>Preguntas Frecuentes</h1>  
      </section>
    </main>
  );
}
