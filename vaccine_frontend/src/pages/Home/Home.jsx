import React from 'react'
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'

const Home = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-start'>
      <NavBar />
      <Hero />
    </div>
  )
}

export default Home