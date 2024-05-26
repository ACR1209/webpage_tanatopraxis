"use client";
import { CourseContent } from "@/types/contents";
import React, { useMemo, useState } from "react";

function CourseContentsSection() {
  const contents: CourseContent[] = useMemo(
    () => [
      {
        title: "Módulo especial introductorio",
        content: (
          <>
            <p>
              El objetivo de este módulo es introducirse a las habilidades
              básicas necesarias para elaborar correctamente tus labores como
              tanatopractor
            </p>

            <ul className="list-disc ml-5 mt-3">
              <li>Inteligencia artificial y habilidades blandas</li>
              <li>Primeros Auxilios</li>
              <li>Inyectología</li>
            </ul>
          </>
        ),
      },
      {
        title: "Módulo 1",
        content: (
          <>
            <p>
              El objetivo de este módulo es conocer las habilidades básicas y
              conocimientos necesarios para realizar labores de tanatopractor
            </p>

            <ul className="list-disc ml-5  mt-3">
              <li>Anatomía Forense</li>
              <li>Causales de muerte</li>
              <li>Toxicología</li>
            </ul>
          </>
        ),
      },
      {
        title: "Módulo 2",
        content: (
          <>
            <p>
              El objetivo de este módulo es conocer los aspectos legales y
              prácticos que un tanatopractor hace en su labor en el día a día
            </p>

            <ul className="list-disc ml-5 mt-3">
              <li>Medicina Legal</li>
              <li>Técnicas de autopsia e instrumental</li>
              <li>Bioseguridad Forense</li>
            </ul>
          </>
        ),
      },
      {
        title: "Módulo especial 2",
        content: (
          <>
            <p>
              El objetivo de este módulo es conocer como realizar
              investigaciones y como plasmarlas en textos, un aspecto
              fundamental para la labor de tanatopractor
            </p>

            <ul className="list-disc ml-5 mt-3">
              <li>Metodología e investigación</li>
            </ul>
          </>
        ),
      },
      {
        title: "Módulo 3",
        content: (
          <>
            <p>
              El objetivo de este módulo es conocer como realizar las labores
              principales que conlleva ser tanatopractor, aprendiendo a la par
              tanatoestética
            </p>

            <ul className="list-disc ml-5 mt-3">
              <li>Tanatopraxia</li>
              <li>Tanatoplastia y tanatoestética</li>
            </ul>
          </>
        ),
      },
      {
        title: "Módulo 4",
        content: (
          <>
            <p>
              El objetivo de este módulo es conocer aspectos de gestión y de
              trato con las personas que se relacionan con el labor de
              tanatopractor
            </p>

            <ul className="list-disc ml-5 mt-3">
              <li>Psicología forense y del duelo</li>
              <li>Gestión funeraria</li>
            </ul>
          </>
        ),
      },
      {
        title: "Módulo 5",
        content: (
          <>
            <p>
              El objetivo de este módulo es sedimentar el conocimiento de como
              realizar las labores principales que conlleva ser tanatopractor,
              aprendiendo a la par tanatoestética
            </p>

            <ul className="list-disc ml-5 mt-3">
              <li>Tanatoestética</li>
              <li>Tanatopraxia</li>
            </ul>
          </>
        ),
      },
    ],
    []
  );

  const [selectedContent, setSelectedContent] = useState(contents[0]);

  return (
    <div className="my-16 w-full lg:min-h-screen relative flex flex-col px-5 lg:px-44 ">
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
