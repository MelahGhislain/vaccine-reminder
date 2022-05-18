import React, { useContext } from 'react'
import AppContext from '../AppContext/AppContext'
import {motion} from 'framer-motion'

const Dialog = ({children}) => {
    const {openDialog} = useContext(AppContext)
  return (
      <>
        {openDialog && <motion.div 
            whileInView={{opacity: [0,1],}}
            transition={{duration: 0.5}}
            className=' bg-transparent fixed z-50 top-0 w-full flex justify-center items-center'>
            <div className=" mt-4 py-4 px-6 bg-slate-200/80 rounded-lg shadow-sm">
                {children}
            </div>
        </motion.div>}
    </>
  )
}

export default Dialog