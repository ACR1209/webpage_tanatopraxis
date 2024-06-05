"use client";
import { sendEmail } from "@/actions/send-mail";
import React, { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    state: "pichincha",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, lastName, email, phone, state } = formData;
    const message = `Hola, me llamo ${name} ${lastName} y mi correo es ${email} y mi teléfono es ${phone} estoy en la provincia de ${state} y estoy interesado en el curso de tanatoestetica y tanatopraxia`;

    sendEmail({ subject: "Formulario de contacto", message })
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 3000);
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          state: "pichincha",
        });
      })
      .catch(console.error);
  };

  return (
    <div id="contact" className="my-16 w-full relative flex flex-col px-5 lg:px-44">
      <div className="bg-primary px-10 py-20 rounded">
        <h2 className="text-xl lg:text-5xl font-bold text-white text-center">
          ¡Inscríbete hoy y comienza tu viaje en el cuidado profesional
          funerario!
        </h2>
        {showSuccessMessage && <p className="text-white w-full text-center mt-5">¡El mensaje se ha enviado exitosamente!</p>}
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
          <div className="flex w-full flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full lg:w-1/2 gap-1">
              <label htmlFor="name" className="font-bold text-white">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-3 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-1">
              <label htmlFor="lastName" className="font-bold text-white">Apellido</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="px-3 py-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex w-full flex-col lg:flex-row gap-5">
            <div className="flex flex-col w-full lg:w-1/2 gap-1">
              <label htmlFor="phone" className="font-bold text-white">Teléfono</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="px-3 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 gap-1">
              <label htmlFor="email" className="font-bold text-white">Correo</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-3 py-2 rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="state" className="font-bold text-white">Provincia</label>
            <select
              name="state"
              id="state"
              value={formData.state}
              onChange={handleInputChange}
              className="px-3 py-2 rounded-lg"
            >
              <option value="pichincha">Pichincha</option>
              <option value="guayas">Guayas</option>
            </select>
          </div>

          <button type="submit" className="bg-white hover:bg-primaryLight transition-all text-primary font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;


