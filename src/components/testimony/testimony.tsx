import { Testimony } from "@/types/testimony";
import React, { useMemo } from "react";
import TestimonyItem from "./testimony-item/testimony-item";

function TestimonySection() {
  const testimonies: Testimony[] = useMemo(
    () => [
      {
        name: "Nataly Moya",
        title: "Graduada",
        videoSrc: "/videos/testimonial1.mp4",
      },
      {
        name: "Karina Grajales",
        title: "Graduada",
        videoSrc: "/videos/testimonial2.mp4",
      },
    ],
    []
  );

  return (
    <div id="testimony" className="my-16 w-full relative flex flex-col px-5 lg:px-44">
      <h1 className="text-3xl lg:text-5xl font-bold w-full text-left mb-5">
        Testimonios
      </h1>

      <div className="flex flex-col gap-5">
        {testimonies.map((testimony, index) => (
          <TestimonyItem
            key={testimony.name}
            testimony={testimony}
            flipped={index % 2 === 1}
            className={index % 2 === 1 ? "bg-primary" : "bg-secondary"}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonySection;
