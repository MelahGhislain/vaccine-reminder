import React, { useState } from 'react'
import {images} from '../../constants'
import {Link, NavLink} from 'react-router-dom'

const Login = () => {

  const fields = {name: "", password: ""}
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)

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
        verifyField("name")
        verifyField("password")
        if(values.name && values.password){
            // axios.post(`${BASE_URL}/students`, value).then( response =>{
            //     setIsSubmitted(true)
            //     setValue(data=>{ return {name: "", matricule: "", present: false}})
            //     setError({ name: "", matricule: "" })
                
            // }).catch( err =>{
            //     console.log(err)
            // });
        }
        
    }
  return (
    <div className='h-screen w-screen md:px-8 md:py-8  bg-slate-200 '>
      <div className='h-full w-full rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg'>
          <div className='flex-1 h-full flex justify-center items-start flex-col px-6 md:px-12'>
              
              <h1 className='text-indigo-700 text-xl md:text-3xl font-bold'>Welcome black</h1>
              <p className=' text-sm text-neutral-500 py-2 mb-6'>Welcome back please enter your details</p>
              <form className='w-full' onSubmit={handleSubmit}>
                  <div className='w-full rounded'>
                      <label htmlFor="name" className='text-neutral-600 text-sm'>Username*</label>
                      <input type="text" name='name' onChange={handleChange} value={values.name} placeholder='username' className="p-2 w-full mb-2 rounded focus:outline-none active:bg-white" />
                      {error.name && <p className='text-sm text-red-500'>{error.name}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="password" className='text-neutral-600 text-sm'>Password*</label>
                      <input type="password" name='password' onChange={handleChange} value={values.password}  placeholder='Password' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.password && <p className='text-sm text-red-500'>{error.password}</p>}
                  </div>
                  <div className='flex justify-end items-center w-full'>
                      <a href="/forgot-password" className='text-indigo-700 text-sm py-4 hover:text-indigo-800'>forgot password</a>  
                  </div>
                  <button type='submit' className='w-full p-2 bg-indigo-500 transition-all duration-300 hover:scale-95 text-white rounded mt-2'>Sign In</button>
              </form>
              <div className='mt-4 text-sm flex justify-center items-center'>
                  <p className=''>Don't have an account?</p>
                  <a href="/" className='ml-2 text-lg text-indigo-600 transition-all duration-300 hover:scale-95'>Sign Up</a>
              </div>
          </div>
          <div className='flex-1 h-full w-full relative hidden md:flex'>
              <img src={images.syringe } alt="doctor" className='w-full h-full object-cover rounded-tr-2xl rounded-br-2xl'/>
              <div className='h-full w-full rounded-tr-2xl rounded-br-2xl absolute bg-black/30 top-0'></div>
          </div>
      </div>
  </div>
  )
}

export default Login