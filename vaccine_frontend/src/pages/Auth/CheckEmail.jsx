import React from 'react'
import {FaChevronLeft, FaEnvelope} from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'

const CheckEmail = () => {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/new-password')
    }

  return (
    <div className='h-screen w-screen md:px-8 py-8  bg-slate-200 flex justify-center items-center'>
      <div className='h-full rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg w-[70%]'>
          <div className='flex-1 h-full flex justify-center items-center flex-col px-6 md:px-20'>
              <FaEnvelope className='text-2xl text-green-700 mb-8'/>
              <h1 className='text-green-700 text-xl md:text-3xl font-bold'>Check Your Email</h1>
              <p className='text-neutral-500 py-1'>We sent a password reset linkto</p>
              <p className='text-neutral-500 py-1 mb-6'>example@gmail.com</p>
            
                  
                <button onClick={handleClick} className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded mt-2'>Open email app</button>
              
                <a href="/login" className='mt-4 text-sm flex justify-center items-center ml-2 text-green-800 transition-all duration-300 hover:scale-95'>
                    <span><FaChevronLeft className='mr-2 text-sm' /></span>
                    <p>Back to login</p> 
                </a>
          </div>
      </div>
  </div>
  )
}

export default CheckEmail