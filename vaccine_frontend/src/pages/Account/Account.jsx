import React, { useContext } from 'react'
import NavBar from '../../components/NavBar'
import {images} from "../../constants"
import Footer from '../../components/Footer'
import CustomHero from '../../components/CustomHero'
import AccountOverlay from './AccountOverlay'
import AppContext from '../../AppContext/AppContext'
import Login from '../Auth/Login'

const Account = () => {
  const {user} = useContext(AppContext)
  return (
    <>
      { !user.token?
        <Login /> :
        <div className="flex justify-center items-center flex-col w-screen">
          <div className='h-[70vh] w-screen flex flex-col justify-start mb-12'>
              <NavBar />
              <CustomHero 
                  image={images.midwife}
                  title="MY ACCOUNT "
                  subtitle="Go throught the account settings for more informaton"
              />
        </div>
        <AccountOverlay />
        <Footer />
      </div>}
    </>
  )
}

export default Account