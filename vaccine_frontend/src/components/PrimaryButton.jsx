import React from 'react'

const PrimaryButton = ({text, className}) => {
  const handleClick = () => {

  }
  return (
    <button onClick={handleClick} disabled className={`${className} w-full text-gray-100 bg-green-600 border-2 border-green-600 rounded py-2 px-4 font-medium shadow-md transition-all duration-300 hover:scale-95 hover:shadow-sm`}>
        {text.toUpperCase()}
    </button>
  )
}

export default PrimaryButton