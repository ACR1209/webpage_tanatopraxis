import Image from "next/image";
import React from "react";

function AboutItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary-dark flex items-center justify-center">
          <Image src={icon} alt="Icono de beneficio" width={50} height={50} />
        </div>
      </div>

      <h3 className="text-primary font-semibold">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default AboutItem;
