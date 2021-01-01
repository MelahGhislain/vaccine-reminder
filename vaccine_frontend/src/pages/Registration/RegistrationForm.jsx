import React,{ useState } from 'react'


const RegistrationForm = () => {
    const fields = {first_name: "", last_name: "", dob: "", gender: ""}
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)

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
    <section className="bg-gray-100 w-full mt-12 py-8 px-12">
        <div>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='w-full rounded'>
                    <label htmlFor="first_name" className='text-neutral-600 text-sm'>First Name*</label>
                    <input type="text" name='first_name' onChange={handleChange} value={values.first_name} placeholder='First Name' className="p-2 w-full mb-2 rounded focus:outline-none " />
                    {error.first_name && <p className='text-sm text-red-500'>{error.first_name}</p>}
                </div>
                <div className='w-full rounded'>
                    <label htmlFor="last_name" className='text-neutral-600 text-sm'>Last Name*</label>
                    <input type="text" name='last_name' onChange={handleChange} value={values.last_name}  placeholder='Last Name' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                    {error.last_name && <p className='text-sm text-red-500'>{error.last_name}</p>}
                </div>
                <div className='w-full rounded'>
                    <label htmlFor="dob" className='text-neutral-600 text-sm '>Date Of Birth*</label>
                    <input type="date" name='dob' onChange={handleChange} value={values.dob}  placeholder='Date Of Birth' className="p-2 w-full mb-2 rounded bg-white focus:outline-none" />
                    {error.dob && <p className='text-sm text-red-500'>{error.dob}</p>}
                </div>
                <div className='w-full rounded'>
                    <label htmlFor="gender" className='text-neutral-600 text-sm'>Gender*</label>
                    <input type="text" name='gender' onChange={handleChange} value={values.gender}  placeholder='M or F' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                    {error.gender && <p className='text-sm text-red-500'>{error.gender}</p>}
                </div>
                {/* <div className='w-full rounded'>
                    <label htmlFor="confirmPassword" className='text-neutral-600 text-sm'>Confirm Password*</label>
                    <input type="password" name='confirmPassword' onChange={handleChange} value={values.confirmPassword}  placeholder='Password' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                    {error.confirmPassword && <p className='text-sm text-red-500'>{error.confirmPassword}</p>}
                </div> */}
                <button type='submit' className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded mt-4'>Sign Up</button>
            </form>
        </div>
        
    </section>
  )
}

export default RegistrationForm