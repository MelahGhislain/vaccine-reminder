import React from 'react'
import {images} from "../constants"

const Hero = () => {
  return (
    <section className='h-[80%] bg-red-500 relative'>
        <div className="h-full w-full">
            <img src={images.stethoscope} alt="stethoscope" className='h-full w-full object-cover'/>
        </div>
        <div className='absolute bg-black/50 h-full w-full top-0'>

        </div>
    </section>
  )
}

export default Hero