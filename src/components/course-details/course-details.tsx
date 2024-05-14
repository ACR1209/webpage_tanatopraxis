import Image from "next/image";
import React from "react";
import CourseDetail from "./course-detail";

function CourseDetails() {
  return (
    <section className="my-16 w-full min-h-screen relative flex flex-col items-center px-5 lg:px-44 justify-center">
      <h1 className="text-3xl lg:text-5xl font-bold w-full text-left mb-5">Detalles del curso</h1>
      <div className="w-full flex lg:flex-row flex-col relative z-10">

        <Image
          alt="bg"
          src="/tanatopraxiaHex.jpg"
          width={1080}
          height={1080}
          className="w-full lg:w-1/2"
          />
        <div className="flex flex-col gap-5 mt-5 lg:mt-0 lg:pl-10">
          <CourseDetail title="Modalidad" value="Online e Hibrida" />
          <CourseDetail title="Horas Formativas" value="700" />
          <CourseDetail title="Duración" value="5 meses" />
          <CourseDetail title="Requisitos" value="Ninguno" />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Avalado por</h1>
            <Image
              alt="bg"
              src="/avals.png"
              width={500}
              height={500}
              className="w-full -mt-5"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-2/5 lg:block hidden absolute bottom-11 left-0  bg-primary"/>
    </section>
  );
}

export default CourseDetails;
