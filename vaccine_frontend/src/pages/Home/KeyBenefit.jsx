import React from 'react'
import {images} from '../../constants'

const KeyBenefit = () => {
  return (
    <section className="w-screen min-h-screen lg:h-screen p-12">
        <div className="flex justify-center items-center flex-col text-center">
            <h2 className="text-green-800">KEY BENEFITS</h2>
            <p className="w-1/2 text-gray-600 mt-2">The the  vaccine reminder revolutionise the way you capture patient immunisation records.</p>
        </div>
        <div className="flex h-full w-full justify-center items-center flex-col lg:flex-row">
            <div className="h-full w-full bg-indigo-600">
                <img src={images.login} alt="benefits" className="h-full w-full object-covers" />
            </div>
            <div className="h-full w-full">
                right
            </div>
        </div>
    </section>
  )
}

export default KeyBenefit