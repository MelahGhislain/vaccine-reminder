import React from 'react'
import {motion} from 'framer-motion'

const Goals = () => {
  return (
    <section className="flex justify-center items-center flex-col w-full py-8 px-12">
        <div className='bg-neutral-200 w-full p-8'>
            <h4>OUR VISION</h4>
            <p className="text-sm text-neutral-600 pt-4">Championing a health nation with our children - To live well & with peace of mind.</p>
        </div>
        <div className="flex justify-center items-start w-full space-y-4 md:space-y-0 md:space-x-4 mt-4 flex-col md:flex-row">
            <motion.div 
                whileInView={{opacity: [0,1], x:[-300, 0]}}
                transition={{duration: 0.5}}
                className="flex-1 flex flex-col h-full bg-neutral-200 p-8">
                <h4>OUR MISSION</h4>
                <ul className="text-sm text-neutral-600 pt-4 italic">
                    <li>Vaccine Reminder is to:</li>
                    <li>Promote vaccination</li>
                    <li>Ensure to good health and affordable healthcare</li>
                    <li>Pursue medical excellence</li>
                </ul>
                <div className="flex-auto md:p-10"></div>
            </motion.div>
            <motion.div 
                whileInView={{opacity: [0,1], x:[300, 0]}}
                transition={{duration: 0.5}}
                className="flex-1 h-full bg-neutral-200 p-8">
                <h4>OUR VALUES</h4>
                <ul className="text-sm text-neutral-600 pt-4 italic">
                    <li>The following signifies the cores that vaccine reminder embodies throught our staff: </li>
                    <li>Dedication</li>
                    <li>Excellence</li>
                    <li>Integrity</li>
                    <li>Professionalism</li>
                    <li>Care & Compassion</li>
                    <li>Teamwork</li>
                </ul>
            </motion.div>
        </div>
    </section>
  )
}

export default Goals