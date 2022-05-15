import React, { useState} from 'react'

const GetInTouch = () => {
    const fields = {name: "", email: "", phone: "", message: ""}
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
        verifyField("email")
        verifyField("phone")
        verifyField("message")
        if(values.name && values.email && values.phone && values.message){
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
    <section className="bg-neutral-100 w-full p-4 md:p-12 mt-20">
        <div className="w-full flex justify-center items-center flex-col">
            <h3 className="text-green-800">GET IN TOUCH</h3>
            <p className="text-neutral-500 text-sm">complete the form below:</p>
            <div className='mt-8 w-full lg:w-2/3'>
                <form className='w-full' onSubmit={handleSubmit}>
                    <div className='w-full rounded'>
                        <input type="text" name='name' onChange={handleChange} value={values.name} placeholder='Name*' className="p-2 w-full mb-2 rounded focus:outline-none border-2" />
                        {error.name && <p className='text-sm text-red-500'>{error.name}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <input type="email" name='email' onChange={handleChange} value={values.email}  placeholder='Email*' className="p-2 w-full mb-2 rounded bg-white focus:outline-none border-2" />
                        {error.email && <p className='text-sm text-red-500'>{error.email}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <input type="text" name='phone' onChange={handleChange} value={values.phone}  placeholder='Mobile Number*' className="p-2 w-full mb-2 rounded bg-white focus:outline-none border-2" />
                        {error.phone && <p className='text-sm text-red-500'>{error.phone}</p>}
                    </div>
                    <div className='w-full rounded'>
                        <textarea name="message" cols="30" rows="4" onChange={handleChange} value={values.message}  placeholder='Support Question' className="p-2 w-full mb-2 bg-white rounded focus:outline-none border-2"></textarea>
                        {error.message && <p className='text-sm text-red-500'>{error.message}</p>}
                    </div>
                    <button type='submit' className='w-full lg:w-fit py-2 px-8 bg-green-900 transition-all duration-300 hover:scale-95 text-white rounded mt-2'>Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch