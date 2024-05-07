import React from "react";
import SquareSection from "./square-section.tsx/square-section";

function OfferSection() {
  return (
    <section id="offer" className="flex flex-col lg:py-32 h-fit">
      <SquareSection className="bg-primary" imageUrl="/offer/tanatoImageOffer1.jpg">
        <h1 className="text-3xl font-bold mb-5">
          PREPARATE PARA CONSTRUIR UNA{" "}
          <b className="text-white bg-secondary px-3">CARRERA</b> DE IMPACTO Y
          DEMANDA
        </h1>
        <p className="text-xl">
          Inicia tu camino hacia la excelencia profesional con nuestro curso
          avanzado en tanatopraxia y tanatoestetica. Profundizaras en metodos de
          preservacion y restauracion, asi como tecnicas de enbellecimiento post
          morten.
        </p>
      </SquareSection>
      <SquareSection isFlipped imageUrl="/offer/tanatoImageOffer2.jpg" className="bg-secondary">
        <h1 className="text-3xl font-bold mb-5">
          ÚNETE A LOS <b className="text-white bg-primary px-3">PIONEROS</b> DE
          EXPERTOS EN EL CAMPO
        </h1>
        <p className="text-xl">
          En el Centro de Capacitación Continua Praxis, no solo te preparamos;
          te impulsamos hacia una trayectoria profesional destacada. Inicia tu
          viaje con nosotros, donde cada lección es un paso hacia el éxito.
        </p>
      </SquareSection>
    </section>
  );
}

export default OfferSection;
