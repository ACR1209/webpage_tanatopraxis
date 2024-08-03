import React from "react";

function OecVideoSection() {
    return (
        <section className="w-full min-h-screen relative px-5 lg:px-44 lg:py-10">
            <h2 className="text-5xl font-bold mb-5 lg:mb-0 text-white bg-primary p-5">¿Ya eres un profesional en Tanatopraxia y Tanatoestetica?</h2>
            <p className="text-xl mb-5 lg:mb-0 p-5">Certifica tus conocimientos en la SENESCYT con nosotros por 5 años y asegura tu éxito profesional en tanatopraxia y tanatoestética. La certificación de la OEC (Organismo Evaluador de la Conformidad) es una valiosa herramienta para demostrar tus capacidades y habilidades profesionales. Con esta certificación reconocida, podrás destacar en tu campo, garantizando un alto nivel de competencia y profesionalismo. No pierdas la oportunidad de fortalecer tu perfil profesional y abrir nuevas puertas en tu carrera.</p>

            <video className="w-full h-[500px] lg:h-[700px] lg:mt-5 relative z-10 bg-gray-200"
                width={1000}
                height={320}
                controls

            >
                <source src="/videos/oecVideo.mp4" type="video/mp4" />
            </video>

            <div className="w-1/2 h-1/5 lg:block hidden absolute bottom-10 right-0  bg-secondary" />
        </section>
    );
}

export default OecVideoSection;
