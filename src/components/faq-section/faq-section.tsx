"use client"
import React from "react";
import FrequentAskedQuestion from "./faq";


const FAQs = [
    {
        question: "¿Qué aprenderé en este curso?",
        answer: "Aprenderás técnicas avanzadas de tanatopraxia para la conservación y restauración del cuerpo, así como métodos de tanatoestética para el embellecimiento post-mortem, incluyendo maquillaje y arreglo del difunto. El curso también cubre aspectos éticos, psicológicos y culturales relacionados con el último adiós.",
    },
    {
        question: "¿A quién está dirigido este curso?",
        answer: " Está dirigido a profesionales de la salud, esteticistas, empleados de funerarias, y cualquier persona interesada en desarrollar habilidades especializadas para trabajar en el cuidado post-mortem, buscando aportar respeto y dignidad a este delicado proceso.",
    },
    {
        question: "¿Necesito tener experiencia previa en el sector funerario para inscribirme?",
        answer: "No es obligatorio tener experiencia previa, aunque puede ser útil. El curso está diseñado para proporcionar una formación completa desde los fundamentos básicos hasta técnicas avanzadas, adecuada tanto para principiantes como para profesionales que buscan especializarse."
    },
    {
        question: "¿Cuánto tiempo dura este curso?",
        answer: "El curso dura cinco meses."
    },
    {
        question: "¿Qué certificación obtendré al finalizar el curso?",        
        answer: " Recibirás un certificado de finalización que acredita tus conocimientos y habilidades en tanatoestética y tanatopraxia, respaldado por nuestro centro de capacitación y por la Universidad de los hemisferios"
    },
    {
        question: "¿Hay prácticas profesionales incluidas en el curso?",
        answer: " Sí, el curso incluye módulos prácticos"
    },
    {
        question: "¿Cómo me puedo inscribir?",
        answer: "Puedes inscribirte a través en nuestro centro   de atención o visitándonos en nuestras instalaciones. Te guiaremos a través del proceso de inscripción y resolveremos cualquier duda que tengas."
    },
    {
        question: "¿Qué oportunidades de empleo tendré después de completar el curso?",
        answer: "Con esta formación podrás trabajar en diferentes tipos de empresas del sector funerario, como pueden ser: Tanatorios y funerarias, cementerios, centros anatómico-forenses y crematorios."
    },
    {
        question: "¿A quién está dirigido?",
        answer: "Hacia profesionales que buscan especializarse en tanatopraxia y tanatoestética, personas interesadas en entrar al campo funerario"
    }
]

function FAQSection() {
  return (
    <div id="faq" className="w-full min-h-screen flex justify-center px-5 lg:px-44 pb-10 lg:py-10">
      <div className="bg-gray-200 w-full flex flex-col items-center py-10 lg:py-14 px-5 lg:px-24 rounded-xl">
        <h1 className="font-bold text-2xl lg:text-4xl">Preguntas frecuentes</h1>

        <div className="w-full flex flex-col gap-10 h-full mt-5">
          {FAQs.map((faq) => (
            <FrequentAskedQuestion
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
