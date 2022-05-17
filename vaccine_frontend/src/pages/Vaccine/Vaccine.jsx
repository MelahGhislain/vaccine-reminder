import React from 'react'
import CustomHero from '../../components/CustomHero'
import NavBar from '../../components/NavBar'
import {images} from "../../constants"
import Footer from '../../components/Footer'
import VaccineServices from './VaccineServices'

const Vaccine = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
        <div className='h-[60vh] w-screen flex flex-col justify-start mb-12'>
            <NavBar />
            <CustomHero
                image={images.syringe}
                title="VACCINES"
                subtitle="Better Health, Better Care, Better Life"
            />
      </div>
      <VaccineServices />
      <Footer />
    </div>
  )
}

export default Vaccine