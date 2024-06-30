import Image from "next/image";
import React, { useMemo } from "react";

function CertificateSection() {
  const certificate = useMemo(() => {
    return [
      "/certificates/certificate1.jpg",
      "/certificates/certificate2.jpg",
      "/certificates/certificate3.jpg",
      "/certificates/certificate4.jpg",
    ];
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center px-5 lg:px-44 pb-10 lg:py-10">
      <div className="bg-gray-200 w-full flex flex-col items-center py-10 lg:py-14 px-5 lg:px-24 rounded-xl">
        <h1 className="font-bold text-2xl lg:text-4xl">Certificados</h1>
        <p className="text-center">
          Al completar el curso, obtendrás los siguientes certificados que
          demuestran lo que has aprendido a lo largo de tu viaje profesional con
          nosotros
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {certificate.map((certificate) => (
            <Image
              key={certificate}
              src={certificate}
              alt="certificate"
              width={1080}
              height={1080}
              className="w-full "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CertificateSection;
