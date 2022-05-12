import React from 'react'
import {FaClock, FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import PrimaryButton from './PrimaryButton'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

const Footer = () => {
     
  return (
    <footer className="bg-neutral-50">
        <div className="flex items-start p-12 flex-col lg:flex-row">
            <motion.div
                whileInView={{opacity: [0,1], x:[-20, 0]}}
                transition={{duration: 0.2}}
                className="flex-1 md:pr-10 py-4 lg:py-0">
                <Link to="/">
                    <div className='flex-1 flex items-center text-2xl font-bold'><span className='mr-1 text-gray-700'>Vaccine</span> <FaClock className='text-green-600'/></div>
                </Link>
                <p className="py-4 text-neutral-600 sm:w-2/3 lg:w-full">The vaccine app is an official digital vaccine reminder. Your personal vaccine 
                    vaccine record the you can never lose. From birth to adulthood.
                </p>
                <div className="flex justify-start items-center">
                    <span className="text-xl mr-2 text-blue-700 cursor-pointer transition-all duration-300 hover:scale-110"> <FaFacebook /></span>
                    <span className="text-xl mr-2  text-red-400 cursor-pointer transition-all duration-300 hover:scale-110"> <FaInstagram /></span>
                    <span className="text-xl text-green-700 cursor-pointer transition-all duration-300 hover:scale-110"> <FaWhatsapp /></span>
                </div>
            </motion.div>
            <motion.div 
                whileInView={{opacity: [0,1], x:[-20, 0]}}
                transition={{duration: 0.4}}
                className="flex-1 py-4 lg:py-0">
                <h3 className="text-green-800 mb-2">CONTACT</h3>
                <div className="flex items-center py-2 text-neutral-500">
                    <FaPhoneAlt className="mr-2"/>
                    <p>(+237)692-581-056</p>
                </div>
                <div className="flex items-center py-2 text-neutral-500">
                    <FaEnvelope className="mr-2"/>
                    <p>agendiaester@gmail.com</p>
                </div>

            </motion.div>
            <motion.div 
                whileInView={{opacity: [0,1], x:[-20, 0]}}
                transition={{duration: 0.6}}
                className="flex-1 w-full py-4 lg:py-0">
                <h3 className="text-green-800 mb-2">NEWS LETTER</h3>
                <form className="w-full">
                    <div className="w-full py-2">
                        <input type="text"  name="name" placeholder="Your Name" className="w-full p-2 border rounded focus:outline-none text-neutral-700" />
                    </div>
                    <div className="w-full py-2">
                        <input type="email"  name="email" placeholder="Your Email" className="w-full p-2 border rounded focus:outline-none text-neutral-700" />
                    </div>
                    <PrimaryButton text="subscribe" />
                </form>
            </motion.div>
        </div>
        <div className="flex items-center px-12 bg-black/40 text-white text-sm w-full">
            <div className="py-2 flex justify-between items-center w-full flex-col md:flex-row">
                <p >&copy; The vaccine reminder -All Right Reserved.</p>
                <button className="w-full mt-2 md:mt-0 md:w-fit shadow-lg px-4 py-2 bg-green-900 cursor-pointer transition-all duration-300 hover:scale-95">Privacy & Cookies Policy</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer