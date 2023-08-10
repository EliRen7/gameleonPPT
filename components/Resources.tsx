import React from 'react'
import Image from 'next/image'

const Resources = () => {
  return (
    <div className="overflow-x-auto relative p-80 mt-40" id='teacher-resources'>
    <Image 
    src='/computer2.png'
    fill
    className='object-contain '
    alt='computer'
    /> 
</div>
  )
}

export default Resources