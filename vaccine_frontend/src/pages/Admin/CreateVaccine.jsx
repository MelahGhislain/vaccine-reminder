import React, { useContext, useState } from 'react'
import axios from 'axios'
import  URLS from '../../constants'
import Dialog from '../../components/Dialog'
import AppContext from '../../AppContext/AppContext'

const CreateVaccine = () => {

    const fields = {name: "", abbrevation: "", contact: "", age: "", route_of_admin: "", preventable_diseases: ""}
    const [values, setValues] = useState(fields)
    const [error,  setError] = useState(fields)
    const [message, setMessage] = useState("")
    const { setOpenDialog, stateChanged, setStateChanged} = useContext(AppContext)

    const handleChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }
    const verifyField = (name) => {
        if (values[name] === "") {
            setError(err => {return { ...err, [name]: `${name} is required`}})
        }else {
            setError(err => {return { ...err, [name]: ""}})
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        verifyField("name")
        verifyField("abbrevation")
        verifyField("contact")
        verifyField("abbreagevation")
        verifyField("route_of_admin")
        verifyField("preventable_diseases")
        if(values.name && values.abbrevation, values.contact && values.age, values.route_of_admin && values.preventable_diseases){
           
            axios.post(`${URLS.BASE_URL}/vaccine/create`, values).then( res =>{
                
                const status = res.data.status
                if(status === "success"){
                    setValues(data=>{ return fields})
                    setError(fields)
                    setMessage("Successfully created vaccine")
                    setOpenDialog(true)
                    setStateChanged(!stateChanged)
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
    <div className='h-full w-fll md:px-8 py-8  bg-slate-200 flex justify-center items-center'>
        { message.includes("Successfully")? 
            <Dialog>
                <p className="text-green-600">{message}</p>
            </Dialog> :
            <Dialog>
                <p className="text-red-600">{message? message : "Failed to create vaccine please try again"}</p>
            </Dialog>
        }
      <div className='min-h-full w-[90%] lg:w-[70%] rounded-2xl flex justify-center items-center bg-slate-100/80 shadow-lg'>
          <div className='flex-1 h-full flex justify-center items-center flex-col px-4 md:px-12'>
              <h1 className='text-green-800 text-lg lg:text-xl md:text-3xl font-bold'>Add a new vaccine</h1>
              <form className='w-full' onSubmit={handleSubmit}>
                  <div className='w-full rounded'>
                      <label htmlFor="name" className='text-neutral-600 text-sm'>Name*</label>
                      <input type="text" name='name' onChange={handleChange} value={values.name} placeholder='Name' className="p-2 w-full mb-2 rounded focus:outline-none active:bg-white" />
                      {error.name && <p className='text-sm text-red-500'>{error.name}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="abbrevation" className='text-neutral-600 text-sm'>Abbrevation*</label>
                      <input type="text" name='abbrevation' onChange={handleChange} value={values.abbrevation}  placeholder='Abbrevation' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.abbrevation && <p className='text-sm text-red-500'>{error.abbrevation}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="contact" className='text-neutral-600 text-sm'>Contact*</label>
                      <input type="text" name='contact' onChange={handleChange} value={values.contact}  placeholder='Contact' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.contact && <p className='text-sm text-red-500'>{error.contact}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="age" className='text-neutral-600 text-sm'>Age*</label>
                      <input type="text" name='age' onChange={handleChange} value={values.age}  placeholder='Age in weeks' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.age && <p className='text-sm text-red-500'>{error.age}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="route_of_admin" className='text-neutral-600 text-sm'>Route of Admin*</label>
                      <input type="text" name='route_of_admin' onChange={handleChange} value={values.route_of_admin}  placeholder='Route of Admin' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.route_of_admin && <p className='text-sm text-red-500'>{error.route_of_admin}</p>}
                  </div>
                  <div className='w-full rounded'>
                      <label htmlFor="preventable_diseases" className='text-neutral-600 text-sm'>Preventable Diseases*</label>
                      <input type="text" name='preventable_diseases' onChange={handleChange} value={values.preventable_diseases}  placeholder='Preventable Diseases' className="p-2 w-full mb-2 bg-white rounded focus:outline-none" />
                      {error.preventable_diseases && <p className='text-sm text-red-500'>{error.preventable_diseases}</p>}
                  </div>
                  <button type='submit' className='w-full p-2 bg-green-800 transition-all duration-300 hover:scale-95 text-white rounded lg:mt-4 mb-3'>Add Vaccine</button>
              </form>
              
          </div>
      </div>
  </div>
  )
}

export default CreateVaccine