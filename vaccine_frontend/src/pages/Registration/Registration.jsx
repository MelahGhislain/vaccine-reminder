import React, { useContext } from 'react'
import CustomHero from '../../components/CustomHero'
import NavBar from '../../components/NavBar'
import {images} from "../../constants"
import Footer from '../../components/Footer'
import RegistrationForm from './RegistrationForm'
import AppContext from '../../AppContext/AppContext'
import Login from '../Auth/Login'


const Registration = () => {
  const {user} = useContext(AppContext)
  return (
    <>
      {!user.token?
        <Login /> :
       <div className="flex justify-center items-center flex-col w-screen">
            <div className='h-[70vh] w-screen flex flex-col justify-start'>
                <NavBar />
                <CustomHero 
                    image={images.three}
                    title="REGISTER YOUR CHILD "
                    subtitle="Fill in the form below to get riminded on the upcomming vaccination dates"
                />
          </div>
          <RegistrationForm />
          <Footer />
        </div>}
    </>
  )
}

export default Registration