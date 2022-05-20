import React from 'react'
import { Link } from 'react-router-dom'


const ChildDetail = ({detail}) => {

    const handleCheck =(e)=>{
        console.log(e.target.checked)
        e.target.checked = !e.target.checked
        console.log(e.target.value)
    }

  return (
      <>
        {detail && <div className=' px-8 flex w-full h-full flex-col md:flex-row'> 
            <ul className="py-4 md:w-[60%] lg:w-[70%]">
                <h3 className='text-teal-600 pb-2'>Details of {`${detail.first_name} ${detail.last_name}`}</h3>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Name: </p>
                    <p>{`${detail.first_name} ${detail.last_name}`}</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- DOB: </p>
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
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">- Gender: </p>
                    <p>{detail.gender.toUpperCase() === "M"? "Male": "Female"}</p>
                </li>
            </ul>
            <div className="bg-neutral-50 w-full my-4 md:my-0 md:w-[40%] lg:w-[30%] px-4 py-4 flex flex-col">
                <h3 className="text-teal-600">Vaccines</h3>
                <p className="text-sm text-neutral-500 py-4">This vaccines are meant for children between 0 to {detail.vaccines[0].age} weeks</p>
                {detail.vaccines.map(vaccine =>(
                    <p key={vaccine._id} className="py-2 text-teal-400 flex items-center">
                        <form>
                            <input type="checkbox" name={vaccine._id} checked onChange={handleCheck} />
                        </form>
                        <span className='ml-2'>
                            {vaccine.abbrevation}
                        </span>
                    </p>
                ))}

                <p className="mt-8">Click <Link to='/vaccines' className='text-teal-500'>here</Link> for more information about vaccines </p>
            </div>
        </div>}
    </>
  )
}

export default ChildDetail