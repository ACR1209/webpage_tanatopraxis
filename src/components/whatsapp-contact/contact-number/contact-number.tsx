import React from 'react'

function ContactNumber({place, number}: {place: string, number: string}) {
  return (
    <div className='flex flex-col'>
      <h1 className='text-2xl font-bold text-center bg-primary text-white rounded-lg'>{place}</h1>
      <p className='text-2xl'>{number}</p>
    </div>
  )
}

export default ContactNumber