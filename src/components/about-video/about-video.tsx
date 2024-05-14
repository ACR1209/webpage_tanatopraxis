import React from "react";

function AboutVideoSection() {
  return (
    <section className="w-full min-h-screen relative px-5 lg:px-32 lg:py-10">
      <h2 className="text-5xl font-bold">Sobre el curso</h2>
      <video className="w-full h-[500px] lg:h-[700px] lg:mt-5 relative z-10 bg-gray-200" width={1000} height={320} controls>
        <source src="/videos/testimonial1.mp4" type="video/mp4" />
      </video>

      <div className="w-1/2 h-1/5 lg:block hidden absolute bottom-10 right-0  bg-secondary" />
    </section>
  );
}

export default AboutVideoSection;
