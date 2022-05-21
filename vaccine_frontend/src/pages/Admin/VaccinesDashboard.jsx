import React, { useContext } from 'react'
import VaccineList from '../Vaccine/VaccineList'
import axios from 'axios'
import  URLS from '../../constants'
import AppContext from '../../AppContext/AppContext'

const VaccinesDashboard = ({vaccines}) => {
    const {stateChanged, setStateChanged} = useContext(AppContext)

    const handleDelete = (id) => {
        axios.delete(`${URLS.BASE_URL}/vaccine/${id}/delete`).then( res =>{
            const status = res.data.status
            if(status === "success"){
                setStateChanged(!stateChanged)
            }
        }).catch( err =>{
            console.log(err)
        });
    }
  return (
    <>
        <div className="py-8 w-full lg:w-[90%] flex flex-col items-center lg:items-start lg:flex-row justify-center">
            <div className="w-full lg:w-[60%]">
                {
                    vaccines.map((vaccine, index)=>(
                        <VaccineList vaccine={vaccine} deleteVaccine={()=>handleDelete(vaccine._id)} key={index} />
                    ))
                }
            </div>
            <div className=" w-[90%] lg:w-[40%] bg-gray-100/50 py-6 px-8 h-fit">
                <h3 className="text-teal-700 mb-2">Abbrevations</h3>
                <ul>
                    {
                        vaccines.map((vaccine, index)=>(
                            <li key={index} className="py-2 border-b">
                                <span>{vaccine.abbrevation}: </span>
                                <span className="italic text-sm text-teal-500">{vaccine.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    </>
  )
}

export default VaccinesDashboard