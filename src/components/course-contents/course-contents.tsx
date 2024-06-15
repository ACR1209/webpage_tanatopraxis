"use client";
import { CourseContent } from "@/types/contents";
import React, { useMemo, useState } from "react";

function CourseContentsSection() {
  const contents: CourseContent[] = useMemo(
    () => [
      {
        title: "Inyectología",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Canalizaciones</li>
              <li>Primeros auxilios básicos</li>
            </ul>
          </>
        ),
      },
      {
        title: "Anatomía Humana aplicada a la tanatopraxia",
        content: (
          <>
            <ul className="list-disc ml-5  mt-3">
              <li>Paquetes vasculares</li>
              <li>Sistema circulatorio</li>
              <li>Circulación cerrada</li>
              <li>
                Arterias y venas de las extremidades superiores, torácicas,
                abdominal y extremidades inferiores
              </li>
              <li>Guías lineales y tejidos circundantes</li>
            </ul>
          </>
        ),
      },
      {
        title: "Causales de muerte y toxicología",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>
                Clasificación de las causas y maneras de muerte en medicina
                forense
              </li>
              <li>Definición de causas de muerte</li>
              <li>Causas de muerte</li>
              <li>Traumatismo craneoencefálico</li>
              <li>Traumatismo torácico</li>
              <li>Traumatismo abdominal</li>
              <li>Asfixias</li>
              <li>Quemaduras</li>
              <li>Misceláneos</li>
              <li>Maneras de mjuerte</li>
              <li>Muerte natural</li>
              <li>Muerte violenta</li>
            </ul>
          </>
        ),
      },
      {
        title: "Fenómenos cadavéricos",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Definición de muerte</li>
              <li>Fenómenos de tempranos</li>
              <li>Fenómenos tardíos conservadores y sus clasificaciones</li>
            </ul>
          </>
        ),
      },
      {
        title: "Introducción a la tanatopraxia y tanatoestética",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Historia del embalsamiento</li>
              <li>El maquillaje funerario en la historia</li>
              <li>Ritos y cultos funerarios</li>
              <li>Ritos y costumbres populares funerarias</li>
              <li>Ritos occidentales</li>
              <li>Ritos musulmanes o islámicos</li>
              <li>Ritos orientales</li>
              <li>Ritos afro-asiáticos</li>
              <li>Ritos africanos</li>
              <li>Ritos funerarios en la cultura americana</li>
              <li>Otros ritos</li>
            </ul>
          </>
        ),
      },
      {
        title: "La sala de tanatopraxia y tanatoestética",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Condiciones generales de las salas de tanatopraxia</li>
              <li>Las mesas de preparación y sus características</li>
              <li>Los cubículos de trabajo</li>
              <li>Acceso a la sala de tanatopraxia</li>
              <li>Sistemas de emergencia</li>
              <li>Instalación de refrigeración en tanatorios</li>
              <li>Salas de preparación, tanatopraxia y tanatoestética</li>
              <li>Cámaras frigoríficas</li>
              <li>Sala técnica</li>
            </ul>
          </>
        ),
      },
      {
        title: "Gestión funeraria",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Documentación funeraria que gestionan las empresas</li>
              <li>Certificado médico de defunción</li>
              <li>Inscripción de defunción en el registro civil</li>
              <li>Licencia de sepultura</li>
              <li>Orden judicial de inhumación</li>
              <li>Autorizaciones de traslados</li>
              <li>Transporte funerario</li>
              <li>
                Ritos y cultos funerarios relativos a las necesidades mortuorias
              </li>
              <li>Protocolo funerario</li>
              <li>
                Deontología y ética profesional relativas a la tanatopraxia
              </li>
              <li>Ética profesional</li>
              <li>Secreto profesional</li>
              <li>Código de ética profesional del tanatopractor</li>
            </ul>
          </>
        ),
      },
      {
        title:
          "Legislación Sanitaria, Seguridad y Salud Laboral: Marco Normativo Nacional e Internacional",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Titulo III, de los derechos garantías y deberes</li>
              <li>Capítulo IV, De la seguridad social del trabajador</li>
              <li>Convenio 139 OIT, sustancias cangerígenas</li>
              <li>Convenio 170 OIT, productos químicos en el trabajo</li>
              <li>Titulo IV, capitulo 1, definiciones y responsabilidades </li>
              <li>Titulo IV, capitulo 2, accidentes e incapacidades</li>
              <li>Titulo IV, capitulo 3, enfermedades profesionales</li>
              <li>Titulo IV, capitulo 4, indemnizaciones</li>
              <li>Titulo IV, capitulo 5, prevención</li>
              <li>
                Artículo 416, obligaciones respecto a la prevención de riesgo
              </li>
              <li>I, disposiciones generales</li>
              <li>II, condiciones generales de los centros de trabajo</li>
              <li>III, aparatos máquinas y herramientas</li>
              <li>IV, Manipulación y transporte</li>
              <li>V, Protección colectiva</li>
            </ul>
          </>
        ),
      },
      {
        title: "Organismos de regulación nacional",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Ministerio de salud - ARCSA</li>
              <li>Ministerio del medio ambiente</li>
              <li>Ministerio del interior</li>
              <li>Ministerio del trabajo - SETEC</li>
              <li>IESS, dpto. de riesgo laboral</li>
              <li>Municipio</li>
            </ul>
          </>
        ),
      },
      {
        title: "Técnicas de embalsamiento",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Embalsamiento arterial</li>
              <li>Embalsamiento de cavidades</li>
              <li>Embalsamiento tópico</li>
              <li>Embalsamiento intradérmico</li>
            </ul>
          </>
        ),
      },
      {
        title: "Centros de embalsamamiento",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Pisos y paredes</li>
              <li>Iluminación</li>
              <li>Tipo de ventilación</li>
              <li>Mesas de trabajo</li>
              <li>Instrumental</li>
              <li>Equipos</li>
              <li>Área de asepsia</li>
              <li>Tratamiento de lixiviados</li>
              <li>Accesos de entrada</li>
            </ul>
          </>
        ),
      },
      {
        title: "Fallas en el embalsamamiento",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Tipos de enfermedad y casos</li>
              <ul className="list-decimal ml-5">
                <li>Arteriosclerosis</li>
                <li>Trombosis</li>
                <li>Cirrosis</li>
                <li>Infarto</li>
                <li>Insuficiencia renal</li>
                <li>Cuerpos autopsiados, congelados o refrigerados</li>
                <li>Multi traumáticos</li>
                <li>Soluciones acuosas</li>
              </ul>
            </ul>
          </>
        ),
      },
      {
        title: "Fórmulas en el embalsamiento",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <ul className="list-decimal ml-5">
                <li>Factores a considerar</li>
                <li>Peso</li>
                <li>Causa de defunción</li>
                <li>Años de edad</li>
                <li>Tiempo de custodia</li>
              </ul>
            </ul>
          </>
        ),
      },
      {
        title: "Tanatoestética",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>El maquillaje funerario</li>
              <li>Conocimientos básicos del color</li>
              <li>El estudio del rostro</li>
              <li>Estudio del rostro sobre plano horizontal</li>
              <li>Estudio del rostro sobre plano vertical</li>
              <li>La clasificación de los óvalos</li>
              <li>La armonía entre los elementos del rostro</li>
              <li>Utensilios de maquillaje</li>
              <li>Maniobras previas y aseo mortuorio</li>
              <li>Aplicación de cosméticos</li>
              <li>Proceder al maquillaje mortuorio</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tanatoplastía y tipos de suturas",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Arete restaurativo y resconstructivo</li>
              <li>Cera restaurativa</li>
              <li>Carne artificial</li>
              <li>Proceso en la reconstrucción por accidentes traumáticos</li>
              <li>Clasificación de tipos de heridas, regulares e irregulares</li>
              <li>Suturas</li>
              <li>Aproximación</li>
              <li>Eversión</li>
              <li>Inversión</li>
              <li>Prótesis</li>
            </ul>
          </>
        ),
      },
      {
        title: "Bioseguridad",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Medidas preventivas</li>
              <li>Precauciones estándar</li>
              <li>Lavado y desinfección de manos</li>
              <li>EPP/EPI</li>
              <li>Esquema de vacunación</li>
              <li>Riesgos químicos, físicos, biológicos, psicosociales y otros factores de riesgo</li>
              <li>Disminución de riesgo químico</li>
              <li>Hojas de seguridad</li>
              <li>MSDS y SDS</li>
              <li>Sistema HMIS</li>
              <li>Tipo de peligro</li>
              <li>Grado de peligro</li>
              <li>Categorización Internacional de infecciones tanatotransmisibles</li>
              <li>Limpieza</li>
              <li>Desinfección y esterilización</li>
            </ul>
          </>
        ),
      },
      {
        title: "Clasificación de desechos",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Desechos peligrosos</li>
              <li>Desechos y/o residuos no peligrosos, infecciosos, biológicos, cortopunzantes, anatomo-patológicos</li>
              <li>Desechos primarios y temporales</li>
              <li>Almacenamiento, recoleción y transporte</li>
            </ul>
          </>
        ),
      },
      {
        title: "Tanatología Online",
        content: (
          <>
            <ul className="list-disc ml-5 mt-3">
              <li>Definición de la muerte</li>
              <li>Tanatopraxia, la importancia de estar psicológicamente preparado</li>
              <li>Etapas del proceso de duelo</li>
              <li>Tipos de duelo, capacitación para el acompañamiento y abordaje del duelo</li>
              <li>Introducción a la tanatología</li>
              <li>Conceptos generales</li>
              <li>Tanatología</li>
              <li>Forense</li>
              <li>Cadáver</li>
              <li>Muerte</li>
              <li>Diagnóstico clínico de muerte</li>
              <li>Diagnósticos relativos y absolutos de muerte</li>
              <li>Tipos y formas de muerte</li>
              <li>Muerte celular</li>
              <li>Muerte real</li>
              <li>Muerte aparente</li>
              <li>Muerte cerebral</li>
              <li>Muerte súbita</li>
              <li>Muerte repentina</li>
              <li>Causas de muerte</li>
              <li>Cronotanatodiagnóstico</li>
              <li>Agonía</li>
            </ul>
          </>
        ),
      },
    ],
    []
  );

  const [selectedContent, setSelectedContent] = useState(contents[0]);

  return (
    <div className="my-16 w-full relative flex flex-col px-5 lg:px-44 ">
      <h1 className="text-3xl lg:text-5xl font-bold w-full text-left mb-5">
        Contenidos del curso
      </h1>

      <div className="w-full flex flex-col lg:flex-row">
        <select
          onChange={(e) =>
            setSelectedContent(contents[e.target.value as unknown as number])
          }
          className="w-full lg:hidden mb-5 border-0 rounded-lg px-2 py-3 text-xl font-bold"
        >
          {contents.map((content, index) => (
            <option className="" key={content.title} value={index}>
              {content.title}
            </option>
          ))}
        </select>

        <div className="w-full hidden lg:w-1/2 lg:flex flex-col">
          <ul>
            {contents.map((content) => (
              <li
                onClick={() => setSelectedContent(content)}
                key={content.title}
                className="mb-5"
              >
                <h1
                  className={`text-2xl cursor-pointer transition-all  ${
                    content.title === selectedContent.title
                      ? "font-bold border-l-4 border-primary pl-4"
                      : "pl-5"
                  }`}
                >
                  {content.title}
                </h1>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-2/3 flex flex-col border rounded-lg px-10 py-5">
          <h1 className="text-2xl font-bold">{selectedContent.title}</h1>
          <hr className="my-3" />
          {selectedContent.content}
        </div>
      </div>
    </div>
  );
}

export default CourseContentsSection;
