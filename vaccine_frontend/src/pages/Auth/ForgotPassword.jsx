import React, { useState } from 'react'
import {FaChevronLeft, FaKey} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'

const ForgotPassword = () => {

    const fields = {email: ""}
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)
    const navigate = useNavigate()

    const handleChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }
    const verifyField = (name) => {
        if (values[name].trim() === "") {
            setError(err => {return { ...err, [name]: `${name} is required`}})
        }else {
            setError(err => {return { ...err, [name]: ""}})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        verifyField("email")
        if(values.email){
            // axios.post(`${BASE_URL}/students`, value).then( response =>{
            //     setIsSubmitted(true)
            //     setValue(data=>{ return {name: "", matricule: "", present: false}})
            //     setError({ name: "", matricule: "" })
                
            // }).catch( err =>{
            //     console.log(err)
            // });
            navigate('/check-email')
        }
        
    }
  return (
    <div className='h-screen w-screen md:px-8 py-8  bg-slate-200 flex justify-center items-center'>
      <div className='h-full rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg w-[70%]'>
          <div className='flex-1 h-full flex justify-center items-center flex-col px-6 md:px-20'>
              <FaKey className='text-2xl text-indigo-700 mb-8'/>
              <h1 className='text-indigo-700 text-xl md:text-3xl font-bold'>Forgot Password?</h1>
              <p className=' text-sm text-neutral-500 py-2 mb-6'>No worries, we'll send you reset instructions.</p>
              <form className='w-full' onSubmit={handleSubmit}>
                  <div className='w-full rounded'>
                      <label htmlFor="email" className='text-neutral-600 text-sm'>Email*</label>
                      <input type="email" name='email' onChange={handleChange} value={values.name} placeholder='username' className="p-2 w-full mb-2 rounded focus:outline-none active:bg-white" />
                      {error.email && <p className='text-sm text-red-500'>{error.email}</p>}
                  </div>
                  
                  <button type='submit' className='w-full p-2 bg-indigo-500 transition-all duration-300 hover:scale-95 text-white rounded mt-2'>Reset Password</button>
              </form>
                <a href="/login" className='mt-4 text-sm flex justify-center items-center ml-2 text-indigo-600 transition-all duration-300 hover:scale-95'>
                    <span><FaChevronLeft className='mr-2 text-sm' /></span>
                    <p>Back to login</p> 
                </a>
          </div>
      </div>
  </div>
  )
}

export default ForgotPassword