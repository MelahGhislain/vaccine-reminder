import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const TextButton = ({text}) => {
  return (
    <button className="text-sm flex items-center text-green-800 mt-2 transition-all duration-300 hover:scale-95 w-fit">
        <span>{text.toUpperCase()}</span> <FaArrowRight className="ml-2"/>
    </button>
  )
}

export default TextButton