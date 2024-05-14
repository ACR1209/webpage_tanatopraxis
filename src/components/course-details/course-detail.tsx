import React from 'react'

function CourseDetail({title, value}: {title: string, value: string}) {
  return (
    <div>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-4xl'>{value}</p>
    </div>
  )
}

export default CourseDetail