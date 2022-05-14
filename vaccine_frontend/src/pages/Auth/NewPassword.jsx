import React, { useState } from 'react'
import {FaChevronLeft, FaKey} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

const NewPassword = () => {

  const fields = {password: "", confirmPassword: ""}
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)
    const navigate = useNavigate()

    const handleChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }
    const verifyField = (name) => {
        if (values[name].trim() === "") {
            setError(err => {return { ...err, [name]: `${name} is required`}})
        }else if(values.password !== values.confirmPassword){
            setError(err => {return { ...err, confirmPassword: `Passwords don't match`}})
        }else {
            setError(err => {return { ...err, [name]: ""}})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        verifyField("password")
        verifyField("confirmPassword")
        if(values.password && values.confirmPassword){
            // axios.post(`${BASE_URL}/students`, value).then( response =>{
            //     setIsSubmitted(true)
            //     setValue(data=>{ return {name: "", matricule: "", present: false}})
            //     setError({ name: "", matricule: "" })
                
            // }).catch( err =>{
            //     console.log(err)
            // });
            navigate('/reset-message')
        }
        
    }
  return (
    <div className='h-screen w-screen md:px-8 py-8  bg-slate-200 flex justify-center items-center'>
      <div className='h-full w-[70%] rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg'>
          <div className='flex-1 h-full flex justify-center items-center flex-col px-6 md:px-12'>
            <FaKey className='text-2xl text-green-800 mb-8'/>
              <h1 className='text-green-800 text-xl md:text-3xl font-bold'>Set New Password</h1>
              <p className='text-neutral-500 py-2 mb-6 text-center'>Your new password most be different to previously used password.</p>
              <form className='w-full' onSubmit={handleSubmit}>
                  <div className='w-full rounded'>
                      <label htmlFor="password" className='text-neutral-600 text-sm'>Password*</label>
                      <input type="password" name='password' onChange={handleChange} value={values.password} placeholder='password' className="p-2 w-full mb-2 rounded focus:outline-none active:bg-white" />
                      {error.password && <p className='text-sm text-red-500'>{error.password}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="confirmPassword" className='text-neutral-600 text-sm'>Confirm Password*</label>
                      <input type="password" name='confirmPassword' onChange={handleChange} value={values.confirmPassword}  placeholder='Confirm Password' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.confirmPassword && <p className='text-sm text-red-500'>{error.confirmPassword}</p>}
                  </div>
                  <button type='submit' className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded mt-4'>Reset Password</button>
              </form>
              <a href="/login" className='mt-4 text-sm flex justify-center items-center ml-2 text-green-800 transition-all duration-300 hover:scale-95'>
                <span><FaChevronLeft className='mr-2 text-sm' /></span>
                <p>Back to login</p> 
            </a>
          </div>
          {/* <div className='flex-1 h-full w-full relative hidden md:flex'>
              <img src={images.syringe } alt="doctor" className='w-full h-full object-cover rounded-tr-2xl rounded-br-2xl'/>
              <div className='h-full w-full rounded-tr-2xl rounded-br-2xl absolute bg-black/30 top-0'></div>
          </div> */}
      </div>
  </div>
  )
}

export default NewPassword