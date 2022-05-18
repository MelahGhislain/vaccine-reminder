import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Vote from './Vote'
import {FaDotCircle}  from "react-icons/fa"
import AppContext from '../../AppContext/AppContext'

const VaccineServices = () => {
  const {user} = useContext(AppContext)
  return (
    <section className="flex flex-col justify-center items-start px-10 md:px-20 py-8">
        <h2 className="py-2 text-green-700">Vaccination Reminder Services</h2>
        <h4 className="py-2">Overview:</h4>
        <p className="py-1 text-neutral-700">
            Within the framework of the efforts carried out the Ministry of Health to maintain the health of children in Cameroon, and protect them and the community 
            groups of diseases, it established this services to remind parents of the deadlines of basic vaccinations agaist diseases targeted by immunization according 
            to the date on mobile phone, e-mail by the vaccination child week.
        </p>
        <p className='text-neutral-700 py-1' >For the list of basic vaccination, <Link to='/vaccines' className='text-green-500'>click here</Link></p>
    

        <h6 className='pt-8 pb-1'>Service Prerequisites:</h6>
        <p className="text-neutral-700"> The service is available for all community members by entering the following required data:</p>
        
        <ul className='pt-4 text-neutral-700'>
            <li className='flex items-center text-sm pb-1'><FaDotCircle className='text-xs mr-2'/> Child name</li>
            <li className='flex items-center text-sm pb-1'><FaDotCircle className='text-xs mr-2'/> Child birthdate</li>
            <li className='flex items-center text-sm pb-1'><FaDotCircle className='text-xs mr-2'/> Child height</li>
            <li className='flex items-center text-sm pb-1'><FaDotCircle className='text-xs mr-2'/> Child weight</li>
            <li className='flex items-center text-sm '><FaDotCircle className='text-xs mr-2'/> Child gender</li>
            <li className='mt-4'>Click <Link to={user.token? "/registration" : "/login"} className='text-green-500'>here</Link> to get started</li>
        </ul>

        <h6 className="pt-8 pb-1">How to Get the service?</h6>
        <p className='text-neutral-700'>For the list of basic vaccination, <Link to='/vaccines' className='text-green-500'>click here</Link></p>

        <h6 className="pt-8 pb-1">Estimated Response Waiting Time</h6>
        <p className='text-neutral-700'>A SMS-based vaccination reminder is sent on the mobile phone or e-mail one week before due date.</p>
    
        <h6 className="pt-8 pb-1">Service Fees:</h6>
        <p className='text-neutral-700'>Free</p>

        <h6 className="pt-8 pb-1">Help and Contacts:</h6>
        <p className='text-neutral-700'>Technical <Link to='/contact'  className='text-green-500'>support</Link> is available</p>

        <h6 className="pt-8 pb-1">Alternative Channels for Service Assessment:</h6>
        <p className='text-neutral-700'>Not available</p>
        
        <div className="mt-8 w-full">
            <Vote />
        </div>
    </section>
  )
}

export default VaccineServices