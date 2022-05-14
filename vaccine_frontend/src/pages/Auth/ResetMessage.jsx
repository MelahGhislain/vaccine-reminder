import React from 'react'
import { FaCheckCircle} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const ResetMessage = () => {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/login')
    }

  return (
    <div className='h-screen w-screen md:px-8 py-8  bg-slate-200 flex justify-center items-center'>
      <div className='h-full rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg w-[70%]'>
          <div className='flex-1 h-full flex justify-center items-center flex-col px-6 md:px-20'>
              <FaCheckCircle className='text-3xl text-green-700 mb-8'/>
              <h1 className='text-green-700 text-xl md:text-3xl font-bold'>Password Reset</h1>
              <p className='text-neutral-500 py-1'>Your password has been successfully reset.</p>
              <p className='text-neutral-500 py-1 mb-6'>Click below to login</p>
            
                  
                <button onClick={handleClick} className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded mt-2'>Continue</button>
            
          </div>
      </div>
  </div>
  )
}

export default ResetMessage