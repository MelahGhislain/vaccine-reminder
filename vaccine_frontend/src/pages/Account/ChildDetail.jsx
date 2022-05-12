import React from 'react'
import { Link } from 'react-router-dom'
import {FaDotCircle} from "react-icons/fa"


const ChildDetail = ({detail}) => {
  return (
      <>
        {detail && <div className=' px-8 flex w-full h-full'> 
            <ul className="py-4 w-[70%]">
                <h3 className='text-teal-600 pb-2'>Details of {detail.name}</h3>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Name: </p>
                    <p>{detail.name}</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Date of Birth: </p>
                    <p>{detail.dob}</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Blood Group: </p>
                    <p>{detail.blood_group}</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Height: </p>
                    <p>{detail.height} cm</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Weight: </p>
                    <p>{detail.weight} kg</p>
                </li>
            </ul>
            <div className="bg-neutral-50 w-[30%] px-4 py-4 flex flex-col">
                <h3 className="text-teal-600">Vaccines</h3>
                <p className="text-sm text-neutral-500 py-4">This vaccines are meant for children between 0 to 5 weeks</p>
                {detail.vaccines.map(vaccine =>(
                    <Link to="/vaccines" key={vaccine.id} className="py-2 text-teal-400 flex items-center">
                        <span className="mr-2 text-xs"><FaDotCircle /></span>
                        {vaccine.name}</Link>
                ))}
            </div>
        </div>}
    </>
  )
}

export default ChildDetail