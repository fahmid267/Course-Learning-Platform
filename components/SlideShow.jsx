import Image from 'next/image'
import React from 'react'

function SlideShow() {
  return (
    <div className='bg-white w-full h-[750px] relative'>
        <Image src={"/images/slideshow/web_development.jpg"} alt='Machine Learning' fill className='object-cover'/>
    </div>
  )
}

export default SlideShow