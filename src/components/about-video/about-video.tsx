import React from "react";

function AboutVideoSection() {
  return (
    <section className="w-full min-h-screen relative px-5 lg:px-44 lg:py-10">
      <h2 className="text-5xl font-bold shadow mb-5 lg:mb-0">
        <b className="text-white bg-primary px-3">Sobre</b>
        <b className="bg-secondary px-3 text-white font-bold">el curso</b>
      </h2>

      <video className="w-full h-[500px] lg:h-[700px] lg:mt-5 relative z-10 bg-gray-200"
        width={1000}
        height={320}
        controls

      >
        <source src="/videos/videoTanato.mp4" type="video/mp4" />
      </video>

      <div className="w-1/2 h-1/5 lg:block hidden absolute bottom-10 right-0  bg-secondary" />
    </section>
  );
}

export default AboutVideoSection;
