import React from "react";
import AboutItem from "./about-item";

function AboutCourseSection() {
  const benefits = [
    {
      icon: "/icons/classIcon.png",
      title: "Clases Online/Híbridas",
      description:
        "Te ofrecemos la posibilidad de tomar tus clases de manera online, asi como recibirlas de manera presencial cuando gustes.",
    },
    {
      icon: "/icons/materialsIcon.png",
      title: "Materiales de apoyo",
      description:
        "Recibira un material de apoyo que te ayudara a entender mejor los temas que te proponemos. Este material es de gran ayuda para tu aprendizaje y lo tendrás a tu disposición para siempre.",
    },
    {
      icon: "/icons/flexibleIcon.png",
      title: "Horas flexibles",
      description:
        "Todas tus horas clases se adaptaran a tu disponibilidad y horario, para que puedas tomarlas cuando y donde quieras.",
    },
    {
      icon: "/icons/practiceIcon.png",
      title: "Prácticas reales",
      description:
        "Te aseguramos de que completes las prácticas reales donde se realizan labores de tanatoestetica y tanatopraxia.",
    },
    {
      icon: "/icons/experienceIcon.png",
      title: "Experiencia laboral",
      description:
        "Te garantizamos que completes tu experiencia laboral en tanatoestetica y tanatopraxia, para que puedas tener una mejor experiencia entrando al mercado laboral.",
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-5 lg:px-44 pb-10 lg:py-10">
      <h1 className="text-3xl lg:text-5xl font-bold w-full text-left mb-5">
        Nuestro curso te ofrece:
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {benefits.map((benefit) => (
          <AboutItem
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutCourseSection;
