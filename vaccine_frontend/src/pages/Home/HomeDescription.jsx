import React from 'react'
import TextButton from '../../components/TextButton'
import {images} from '../../constants'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const HomeDescription = () => {
  return (
    <section className="w-screen min-h-screen lg:h-screen p-12 ">
        <div className="h-1/2 flex justify-center items-center flex-col lg:flex-row lg:bg-neutral-100">
            <motion.article 
            whileInView={{opacity:[0,1], x:[-300, 0]}}
            className='flex-1 h-full w-full bg-neutral-100 flex items-center'>
                <div className="flex flex-col justify-center text-sm  px-4 md:px-20 py-4 lg:py-0">
                    <h2 className='text-green-800 mb-4'>PARENTS</h2>
                    <p className="text-gray-700  text-justify">
                        Parents simply register their children. They can add as many children as possible.
                        They can see the relevant vaccines schedule whether government recommended or private medicine.
                        The next step is for the app to notify you for your vaccine. Once vaccinated the app will update.
                    </p>
                    <Link to="/registration">
                        <TextButton text="get start now"/>
                    </Link>
                </div>
            </motion.article>
            <motion.article 
                whileInView={{opacity:[0,1], x:[300, 0]}}
                className='lg:flex-1 h-[18rem] lg:h-full w-full relative'>
                <img src={images.fourteen} alt="midwife" className='w-full h-full object-cover'/>
                <div className="absolute top-0 bg-black/60 w-full h-full"></div>
            </motion.article>
        </div>
        <div className="h-1/2 flex justify-center items-center flex-col lg:flex-row lg:bg-neutral-100">
            <motion.article 
                whileInView={{opacity:[0,1]}}
                transition={{duration: 0.5, delay: 0.5}}
                className='lg:flex-1 h-[18rem] lg:h-full w-full relative order-2 lg:order-1'>
                <img src={images.twelve} alt="midwife" className='w-full h-full object-cover'/>
                <div className="absolute top-0 bg-black/60 w-full h-full"></div>
            </motion.article>
            <motion.article 
            whileInView={{opacity:[0,1]}}
            transition={{duration: 0.5, delay: 0.5}}
            className='flex-1 h-full w-full bg-neutral-100 flex items-center order-1 lg:order-2'>
                <div className="flex flex-col justify-center text-sm px-4 md:px-20 py-4 lg:py-0">
                    <h2 className='text-green-800 mb-4'>PARENTS</h2>
                    <p className="text-gray-700  text-justify">
                        Parents simply register their children. They can add as many children as possible.
                        They can see the relevant vaccines schedule whether government recommended or private medicine.
                        The next step is for the app to notify you for your vaccine. Once vaccinated the app will update.
                    </p>
                    <TextButton text="get start now"/>
                </div>
            </motion.article>
            
        </div>
        
    </section>
  )
}

export default HomeDescription