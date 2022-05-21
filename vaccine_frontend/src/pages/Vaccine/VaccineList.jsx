import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp} from "react-icons/fa"

const VaccineList = ({vaccine, deleteVaccine}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col justify-center items-start px-4 md:px-10 md:px-18 py-2 w-full'> 
        <div className='bg-gray-50 w-full'>
            <h4 className="py-3 px-6 w-full shadow flex items-center">
                <p className='flex-auto'>Vaccine: <span className='text-teal-600'>{vaccine.abbrevation}</span></p> 
                <div className="hidden lg:flex">
                    <div className="flex items-center text-xs">
                        <h4 className="mr-2" >Age: </h4>
                        <p className="italic text-neutral-700">{vaccine.age}</p>
                    </div>
                </div>
                <span onClick={()=>setOpen(!open)} className="ml-0 lg:ml-20 flex-none cursor-pointer text-green-700">{open?<FaChevronUp /> : <FaChevronDown />}</span>
            </h4>
            {open && <div className='py-3 px-6 bg-neutral-900/5'>
                
                <div className="flex items-center">
                    <h4 className="mr-2" >Contact: </h4>
                    <p className="italic text-neutral-700">{vaccine.contact}</p>
                </div>
                <div className="flex items-center lg:hidden">
                    <h4 className="mr-2" >Age: </h4>
                    <p className="italic text-neutral-700">{vaccine.age}</p>
                </div>
                <div className="flex items-center">
                    <h4 className="mr-2" >Route of administration: </h4>
                    <p className="italic text-neutral-700">{vaccine.route_of_admin}</p>
                </div>
                <div className="">
                    <h4 className="mr-2" >Preventable disease{vaccine.preventable_diseases.length > 1? "s" : ""}: </h4>
                    {vaccine.preventable_diseases && vaccine.preventable_diseases.map((disease, index)=>(
                        <p className="ml-4 italic text-neutral-700" key={index}>- {disease }</p>
                    ))}
                </div>
                {deleteVaccine && <div onClick={deleteVaccine} className="flex items-center justify-center">
                    <div className="flex items-center justify-center mt-4 w-[50%]"> 
                        <button className="bg-red-600 py-2 px-4 rounded-md text-white text-sm w-full">
                            Delete
                        </button>
                    </div>
                </div>}
            </div>}
        </div>
        
    </div>
  )
}

export default VaccineList