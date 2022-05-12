import React from 'react'
import NavBar from '../../components/NavBar'
// import {images} from "../../constants"
import Footer from '../../components/Footer'
import AccountOverlay from './AccountOverlay'

const Account = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
        <div className='w-screen'>
            <NavBar />
      </div>
      <AccountOverlay />
      <Footer />
    </div>
  )
}

export default Account