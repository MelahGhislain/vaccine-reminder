import React, { useContext, useState } from 'react'
import  URLS, {images} from '../../constants'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import AppContext from '../../AppContext/AppContext'
import Dialog from '../../components/Dialog'

const SignUp = () => {
    const fields = {name: "", email: "", phone: "", password: "", confirmPassword: ""}
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)
    const {setOpenDialog} = useContext(AppContext)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

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
        verifyField("name")
        verifyField("email")
        verifyField("phone")
        verifyField("password")
        verifyField("confirmPassword")
        
        if(values.name && values.email && values.phone && values.password){
            axios.post(`${URLS.BASE_URL}/user/register`, values).then( res =>{
                // console.log(res.data.status) 
                const status = res.data.status
                if(status === "success"){
                    navigate("/login")
                }else{
                    setOpenDialog(true)
                }
            }).catch( err =>{
                const msg = err.response.data.msg
                setErrorMessage(msg)
                setOpenDialog(true)

                console.log(err)
            });
        }
        
    }


  return (
    <div className='h-screen w-screen md:px-8  bg-slate-200 '>
        <Dialog>
            <p className="text-red-600">{errorMessage? errorMessage : "Failed to register please try again"}</p>
        </Dialog>
        <div className='h-full w-full rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg'>
            <div className='flex-1 h-full flex justify-center items-start flex-col px-6 md:px-12'>
                
                <h1 className='text-green-700 text-xl md:text-3xl font-bold'>Sign Up</h1>
                <p className=' text-sm text-neutral-500 py-2'>Please enter your details</p>
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='w-full rounded'>
                        <label htmlFor="name" className='text-neutral-600 text-sm'>Username*</label>
                        <input type="text" name='name' onChange={handleChange} value={values.name} placeholder='username' className="p-2 w-full mb-2 rounded focus:outline-none " />
                        {error.name && <p className='text-sm text-red-500'>{error.name}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <label htmlFor="email" className='text-neutral-600 text-sm'>Email*</label>
                        <input type="email" name='email' onChange={handleChange} value={values.email}  placeholder='Email' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                        {error.email && <p className='text-sm text-red-500'>{error.email}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <label htmlFor="phone" className='text-neutral-600 text-sm '>Phone number*</label>
                        <input type="number" name='phone' onChange={handleChange} value={values.phone}  placeholder='Phone number' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                        {error.phone && <p className='text-sm text-red-500'>{error.phone}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <label htmlFor="password" className='text-neutral-600 text-sm'>Password*</label>
                        <input type="password" name='password' onChange={handleChange} value={values.password}  placeholder='Password' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                        {error.password && <p className='text-sm text-red-500'>{error.password}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <label htmlFor="confirmPassword" className='text-neutral-600 text-sm'>Confirm Password*</label>
                        <input type="password" name='confirmPassword' onChange={handleChange} value={values.confirmPassword}  placeholder='Password' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                        {error.confirmPassword && <p className='text-sm text-red-500'>{error.confirmPassword}</p>}
                    </div>
                    <button type='submit' className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded mt-4'>Sign Up</button>
                </form>
                <div className='mt-4 text-sm flex justify-center items-center'>
                    <p className=''>Already have an account?</p>
                    <Link to="/login" className='ml-2 text-lg text-bold text-green-800 transition-all duration-300 hover:scale-95'>Login</Link>
                </div>
            </div>
            <div className='flex-1 h-full w-full relative hidden md:flex'>
                <img src={images.stethoscope} alt="doctor" className='w-full h-full object-cover rounded-tr-2xl rounded-br-2xl'/>
                <div className='h-full w-full rounded-tr-2xl rounded-br-2xl absolute bg-black/30 top-0'></div>
            </div>
        </div>
    </div>
  )
}

export default SignUp