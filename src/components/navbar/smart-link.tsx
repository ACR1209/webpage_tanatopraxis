"use client"
import { SmartLink } from '@/types/navbar'
import Link from 'next/link'
import React from 'react'

function SmartNavLink({smartLink} : {smartLink: SmartLink} ) {

  return (
    <Link scroll={true} className={`text-lg text-black uppercase ${smartLink.isActive ? 'font-bold' : ''}`} href={`#${smartLink.href}`}>{smartLink.name}</Link>
  )
}

export default SmartNavLink