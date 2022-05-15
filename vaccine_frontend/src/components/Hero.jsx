import React from 'react'
import {images} from "../constants"
import OutlineButton from './OutlineButton'
import PrimaryButton from './PrimaryButton'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-[92%] relative mt-12'>
        <div className="h-full w-full">
            <img src={images.stethoscope} alt="stethoscope" className='h-full w-full object-cover'/>
        </div>
        <div className='absolute bg-black/50 h-full w-full top-0 flex justify-center items-center'>
            <div className='md:w-[70%] lg:w-[50%] h-full flex justify-center items-start px-12 lg:px-20 flex-col text-white'>
                <h1>DON'T FORGET YOUR NEXT VACCINE DATE <span className='text-green-600'>GET REMINDED </span></h1>
                <p className='text-neutral-200 py-4'>A unique and cutting edge way to to interact with your patients vaccine needs.</p>
                <div className='flex items-center flex-col md:flex-row w-full'>
                  <span className='md:pr-2 w-full mb-2 md:mb-0'>
                    <Link to="/registration" className="w-full">
                      <PrimaryButton text="Register Now" />
                    </Link>
                  </span>
                  <Link to="/login" className="w-full">
                    <OutlineButton text="Practitional login" />
                  </Link>
                </div>
            </div>
            <div className='md:w-[30%] lg:w-[50%] h-full hidden md:flex'>
                
            </div>
        </div>
    </section>
  )
}

export default Hero