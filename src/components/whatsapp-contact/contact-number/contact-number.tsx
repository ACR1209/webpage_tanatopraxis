import React from 'react'

function ContactNumber({place, number}: {place: string, number: string}) {
  return (
    <a target="_blank" href={`https://wa.me/593${number.substring(1).replaceAll(' ', '')}`} className='flex flex-col'>
      <h1 className='text-2xl font-bold text-center bg-primary text-white rounded-lg'>{place}</h1>
      <p className='text-2xl'>{number}</p>
    </a>
  )
}

export default ContactNumber