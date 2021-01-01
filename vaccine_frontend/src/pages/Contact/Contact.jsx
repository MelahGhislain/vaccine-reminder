import React from 'react'
import CustomHero from '../../components/CustomHero'
import NavBar from '../../components/NavBar'
import {images} from "../../constants"
import Footer from '../../components/Footer'
import Support from './Support'
const Contact = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
        <div className='h-[70vh] w-screen flex flex-col justify-start mb-12'>
            <NavBar />
            <CustomHero 
                image={images.doctor}
                title="SUPPORT "
                subtitle="Contact us all for your support related enquiries."
            />
      </div>
      <Support />
      <Footer />
    </div>
  )
}

export default Contact