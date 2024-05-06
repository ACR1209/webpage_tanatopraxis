import Image from 'next/image'
import React from 'react'

function EmojiIcon({emojiImagePath, className}: {emojiImagePath: string, className?: string}) {
  return (
    <div className={`${className} xl:flex hidden absolute p-2 bg-white shadow rounded-lg h-16 w-16 `}>
      <Image
        className='w-full h-full'
        src={emojiImagePath}
        alt="Icono"
        width={50}
        height={50}
      />
    </div>
  )
}

export default EmojiIcon