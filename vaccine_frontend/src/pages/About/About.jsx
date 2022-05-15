import React from 'react'
import CustomHero from '../../components/CustomHero'
import NavBar from '../../components/NavBar'
import {images} from "../../constants"
import Footer from '../../components/Footer'
import Goals from './Goals'

const About = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
        <div className='h-[70vh] w-screen flex flex-col justify-start mb-12'>
            <NavBar />
            <CustomHero 
                image={images.syringe}
                title="ABOUT US "
                subtitle="Better Health, Better Care, Better Life"
            />
      </div>
      <Goals />
      <Footer />
    </div>
  )
}

export default About