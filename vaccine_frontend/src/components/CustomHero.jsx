import React from 'react'
import { motion } from 'framer-motion'

const CustomHero = ({title, subtitle, image}) => {
  return (
    <section className='h-full relative mt-12'>
        <div className="h-full w-full">
            <img src={image} alt="stethoscope" className='h-full w-full object-cover'/>
        </div>
        <div className='absolute bg-black/50 h-full w-full top-0 flex justify-center items-center'>
            <motion.div
              whileInView={{opacity: [0,1], y:[-300, 0]}}
              transition={{duration: 0.5}}
             className='w-full sm:w-[90%] md:w-2/3 lg:w-1/2  h-full flex justify-center items-start px-12 lg:px-20 flex-col text-white'>
                <h1 className=" text-center w-full">{title}</h1>
                <p className='text-neutral-200 py-4  text-center w-full'>{subtitle}</p>
            </motion.div>
        </div>
    </section>
  )
}

export default CustomHero