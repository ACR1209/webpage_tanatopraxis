import Image from 'next/image'
import React from 'react'

function EndorsedSection() {
    return (
        <div className='flex flex-col items-center mt-10'>

            <h3 className='text-3xl font-bold text-primary'>Estamos avalados por</h3>
            <div className='flex flex-col lg:flex-row w-full justify-center gap-5 items-center mt-3'>
                <Image
                    alt="logo de la universidad de los hemisferios"
                    src="/logos/hemisferios.png"
                    width={1080}
                    height={1080}
                    className="h-12 lg:h-24 w-auto"
                />
                <Image
                    alt="logo de la cámara artesanal del pichincha"
                    src="/logos/cap.png"
                    width={1080}
                    height={1080}
                    className="h-24 lg:h-40 w-auto"
                />
            </div>
        </div>
    )
}

export default EndorsedSection