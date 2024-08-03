import Image from 'next/image'
import React from 'react'

function EndorsedOECSection() {
    return (
        <div className='flex flex-col items-center mt-10'>

            <h3 className='text-3xl font-bold text-primary'>El OEC está avalado por</h3>
            <div className='flex flex-row w-full justify-center gap-10 items-center mt-3'>
                <Image
                    alt="logo de la universidad de los hemisferios"
                    src="/logos/ministeriotrabajo.png"
                    width={1080}
                    height={1080}
                    className="h-40 w-auto"
                />
                <Image
                    alt="logo de la cámara artesanal del pichincha"
                    src="/logos/senescyt.png"
                    width={1080}
                    height={1080}
                    className="h-24 w-auto"
                />
            </div>
        </div>
    )
}

export default EndorsedOECSection