import React, { useContext } from 'react'
import {images} from "../constants"
import OutlineButton from './OutlineButton'
import PrimaryButton from './PrimaryButton'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import AppContext from '../AppContext/AppContext'

const Hero = () => {
  const {user} = useContext(AppContext)
  return (
    <section className='h-[92%] relative mt-12'>
        <div className="h-full w-full">
            <img src={images.stethoscope} alt="stethoscope" className='h-full w-full object-cover'/>
        </div>
        <div className='absolute bg-black/50 h-full w-full top-0 flex justify-center items-center'>
            <div className='md:w-[70%] lg:w-[50%] h-full flex justify-center items-start px-12 lg:px-20 flex-col text-white'>
                <motion.h1
                  whileInView={{opacity: [0,1], y:[-300, 0]}}
                  transition={{duration: 0.5}}
                >DON'T FORGET YOUR NEXT VACCINE DATE <span className='text-green-600'>GET REMINDED </span></motion.h1>
                <motion.p 
                  whileInView={{opacity: [0,1]}}
                  transition={{duration: 0.5}}
                  className='text-neutral-200 py-4'>A unique and cutting edge way to to interact with your patients vaccine needs.</motion.p>
                <div className='flex items-center flex-col md:flex-row w-full'>
                  <motion.span 
                    whileInView={{opacity: [0,1], x:[-300, 0]}}
                    transition={{duration: 0.5}}
                    className='md:pr-2 w-full mb-2 md:mb-0'>
                      
                    <Link to={user.token? "/registration" : "/login"} className="w-full">
                      <PrimaryButton text="Register CHILD" />
                    </Link>
                  </motion.span>
                  <motion.span 
                    whileInView={{opacity: [0,1], x:[300, 0]}}
                    transition={{duration: 0.5}}
                    className="w-full">
                    <Link to="/login" className="w-full">
                      <OutlineButton text="Practitional login" />
                    </Link>
                  </motion.span>
                </div>
            </div>
            <div className='md:w-[30%] lg:w-[50%] h-full hidden md:flex'>
                
            </div>
        </div>
    </section>
  )
}

export default Hero