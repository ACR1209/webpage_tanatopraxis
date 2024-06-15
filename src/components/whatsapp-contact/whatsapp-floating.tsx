import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappFloating() {
  return (
    <a href="https://wa.me/593987734581" target="_blank" rel="noreferrer" className="fixed bottom-10 right-10 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 z-50 shadow">
      <FaWhatsapp size={42} />
    </a>
  )
}
