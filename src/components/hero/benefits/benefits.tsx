import Image from 'next/image'
import React from 'react'

function Benefits({icon, title, className}: {icon: string, title: string, className?: string}) {
  return (
    <div className='bg-white shadow rounded-xl flex gap-3 justify-center items-center p-2'>
        <div className={`${className} rounded-xl p-2 flex items-center justify-center w-12 h-12`}>
            <Image
                src={icon}
                alt="Icono de beneficio"
                width={50}
                height={50}
            />
        </div>

        <h3 className='text-primary-dark text-center font-semibold py-4 text-sm'>{title}</h3>
    </div>
  )
}

export default Benefits