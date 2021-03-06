import axios from 'axios'
import React,{ useContext, useState } from 'react'
import AppContext from '../../AppContext/AppContext'
import Dialog from '../../components/Dialog'
import  URLS from '../../constants'

const fields = {first_name: "", last_name: "", dob: "", gender: "", height:"", weight: "", blood_group: ""}

const RegistrationForm = () => {
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)
    const {user, setOpenDialog} = useContext(AppContext)
    const [message, setMessage] = useState("")

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
        verifyField("first_name")
        verifyField("last_name")
        verifyField("dob")
        verifyField("gender")
        verifyField("height")
        verifyField("weight")
        verifyField("blood_group")
        if(values.first_name && values.last_name && values.dob && values.gender && values.height && values.weight && values.blood_group){
            axios.post(`${URLS.BASE_URL}/child/create`, values, {headers:{Authorization: `Bearer ${user.token}`}}).then( res =>{
                const status = res.data.status
                if(status === "success"){
                    setValues(data=>{ return {first_name: "", last_name: "", dob: "", gender: "", height:"", weight: "", blood_group: ""}})
                    setError({first_name: "", last_name: "", dob: "", gender: "", height:"", weight: "", blood_group: ""})
                    
                    setMessage("Successfully created child")
                    setOpenDialog(true)
                }else{
                    setOpenDialog(true)
                }
                
                
            }).catch( err =>{
                const msg = err.response.data.msg
                setMessage(msg)
                setOpenDialog(true)
                console.log(err)
            });
        }
        
    }

    
  return (
    <section className="bg-gray-100 w-full mt-12 py-20 md:py-24 px-8 sm:px-12">
        { message.includes("Successfully")? 
            <Dialog>
                <p className="text-green-600">{message}</p>
            </Dialog> :
            <Dialog>
                <p className="text-red-600">{message? message : "Failed to login please try again"}</p>
            </Dialog>
        }
        <div className="px-0 md:px-18 lg:px-24">
            <h2 className="mb-8">Enter Child Information</h2>
            <form className='w-full' onSubmit={handleSubmit}>
                {/* First name and Last name */}
                <div className="flex items-center w-full  flex-col md:flex-row">
                    <div className='flex-1 w-full py-2 rounded md:mr-4'>
                        <label htmlFor="first_name" className='text-neutral-600 text-sm'>First Name*</label>
                        <input type="text" name='first_name' onChange={handleChange} value={values.first_name} placeholder='First Name' className="p-2 w-full mb-2 rounded focus:outline-none " />
                        {error.first_name && <p className='text-sm text-red-500'>{error.first_name}</p>}
                    </div>
                    <div className='flex-1 w-full py-2 rounded'>
                        <label htmlFor="last_name" className='text-neutral-600 text-sm'>Last Name*</label>
                        <input type="text" name='last_name' onChange={handleChange} value={values.last_name}  placeholder='Last Name' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                        {error.last_name && <p className='text-sm text-red-500'>{error.last_name}</p>}
                    </div>
                </div>
                {/* Height and Weight */}
                <div className="flex items-center w-full flex-col md:flex-row">
                    <div className='flex-1 w-full py-2 rounded md:mr-4'>
                        <label htmlFor="height" className='text-neutral-600 text-sm'>Height*</label>
                        <input type="text" name='height' onChange={handleChange} value={values.height} placeholder='Height(cm)' className="p-2 w-full mb-2 rounded focus:outline-none " />
                        {error.height && <p className='text-sm text-red-500'>{error.height}</p>}
                    </div>
                    <div className='flex-1 w-full py-2 rounded'>
                        <label htmlFor="weight" className='text-neutral-600 text-sm'>Weight*</label>
                        <input type="text" name='weight' onChange={handleChange} value={values.weight}  placeholder='Weight(kg)' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                        {error.weight && <p className='text-sm text-red-500'>{error.weight}</p>}
                    </div>
                </div>
                {/* Blood group */}
                <div className='w-full py-2 rounded'>
                    <label htmlFor="blood_group" className='text-neutral-600 text-sm'>Blood Group*</label>
                    <input type="text" name='blood_group' onChange={handleChange} value={values.blood_group}  placeholder='Blood Group' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                    {error.blood_group && <p className='text-sm text-red-500'>{error.blood_group}</p>}
                </div>
                {/* Date of Birth */}
                <div className='w-full py-2 rounded'>
                    <label htmlFor="dob" className='text-neutral-600 text-sm '>Date Of Birth*</label>
                    <input type="date" name='dob' onChange={handleChange} value={values.dob}  placeholder='Date Of Birth' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                    {error.dob && <p className='text-sm text-red-500'>{error.dob}</p>}
                </div>
                {/* Gender */}
                <div className='w-full py-2 rounded'>
                    <label htmlFor="gender" className='text-neutral-600 text-sm'>Gender*</label>
                    <input type="text" name='gender' onChange={handleChange} value={values.gender}  placeholder='M or F' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                    {error.gender && <p className='text-sm text-red-500'>{error.gender}</p>}
                </div>
                
                
                <button type='submit' className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded mt-4'>REGISTER</button>
            </form>
        </div>
        
    </section>
  )
}

export default RegistrationForm