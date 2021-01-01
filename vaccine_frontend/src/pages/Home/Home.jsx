import React from 'react'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import HomeDescription from './HomeDescription'
import KeyBenefit from './KeyBenefit'

const Home = () => {
  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-start'>
        <NavBar />
        <Hero />
      </div>
      <HomeDescription />
      {/* <KeyBenefit /> */}
      <Footer />
    </>
  )
}

export default Home