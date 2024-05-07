import Image from 'next/image'
import React from 'react'
import ContactNumber from './contact-number/contact-number'

function WhatsappContactSection() {
  return (
    <section id="whatsapp-contact" className="flex relative overflow-x-hidden w-full flex-col items-center justify-center min-h-screen">
        <Image
          alt="bg"
          src="/whatsapp-contact/whatsapp.svg"
          width={200}
          height={200}
          />

        <h1 className="text-4xl font-bold text-center my-3">¿Tienes preguntas?<br />Escribenos por WhatsApp</h1>
        <div className='flex flex-row justify-center gap-10'>
            <ContactNumber number='098 773 4581' place='Quito'/>
            <ContactNumber number='096 252 0001' place='Guayaquil'/>
        </div>
    
        <div className='w-1/3 h-1/5 absolute top-0 right-0 expand-animation bg-primary'/>
        <div className='w-1/6 h-1/5 absolute top-[20%] expand-animation right-0 bg-secondaryLight'/>
        <div className='w-1/3 h-1/5 absolute bottom-0 expand-animation-2 left-0 bg-secondary'/>
        <div className='w-1/6 h-1/5 absolute bottom-[20%] expand-animation left-0 bg-primaryLight'/>
    </section>
  )
}

export default WhatsappContactSection