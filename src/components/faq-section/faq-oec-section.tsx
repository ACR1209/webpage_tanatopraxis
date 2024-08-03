"use client"
import React from "react";
import FrequentAskedQuestion from "./faq";


const FAQs = [
    {
        question: "¿Qué significa OEC?",
        answer: "Significa un Organismo Evaluador de Conformidad, es decir somos un Centro avalado por el Ministerio de Trabajo del Ecuador",
    },
    {
        question: "¿Qué se evalúa en la OEC?",
        answer: "Se evalúa los conocimientos teóricos-prácticos que has adquirido con tu experiencia al laborar en el campo de la Tanatopraxia y Tanatoestética",
    },
    {
        question: "¿Pará que sirve la certificación?",
        answer: "Podrás reconocer por 5 años tu experiencia en la SENESCYT y firmar documentación relacionada a Tanatopraxia. Además, la OEC te sirve como un reconocimiento sobre tu experiencia"
    },
    {
        question: "¿Qué sucede al finalizar la validez del certificado OEC?",
        answer: "En este caso, después de los 5 años de vigencia,  debes rendir un nuevo examen de certificación presentando los mismos requisitos del inicio"
    },
    {
        question: "¿Cuáles son los requisitos?",        
        answer: "Los requisitos para optar por la OEC en Tanatopraxia son: (1) Ser mayor de 18 años, (2) Educación mínima: primaria, (3) Cédula de ciudadanía, (4) Curso referente al perfil realizado en el último año, (5) Certificado laboral de al menos 2 años que acredite tu experiencia y (6) Comprobante de pago."
    },
    {
        question: "¿Qué valor tiene la certificación OEC?",
        answer: "Tiene un valor de $350.00 más IVA en el caso del público en general y en $250.00 más IVA para estudiantes de PRAXIS que hayan realizado el curso de EXPERTO EN TANATOPRAXIA Y TANATOESTÉTICA con nosotros"
    },
]

function FAQOECSection() {
  return (
    <div id="faq-oec" className="w-full min-h-screen flex justify-center px-5 lg:px-44 pb-10 lg:py-10">
      <div className="bg-gray-200 w-full flex flex-col items-center py-10 lg:py-14 px-5 lg:px-24 rounded-xl">
        <h1 className="font-bold text-2xl lg:text-4xl">Preguntas frecuentes sobre la OEC</h1>

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

export default FAQOECSection;
