import React from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Terms from './Terms'

const Policy = () => {
  return (
    <div className="flex justify-center items-center flex-col w-screen">
        <NavBar />
        <div className='w-screen flex flex-col justify-start px-24 py-12'>
           <Terms />
           <h1 className='py-2'>Private policy</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Policy