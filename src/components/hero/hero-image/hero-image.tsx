import Image from "next/image";
import React from "react";

function HeroImage() {
  return (
    <div className="w-full bg-white rounded-[2.5rem] shadow p-10">
      <Image
        className="rounded-[2.5rem]"
        alt="Imagen de un tanatopractor"
        src="/hero/tanato.jpg"
        width={1000}
        height={667}
      />
    </div>
  );
}

export default HeroImage;
