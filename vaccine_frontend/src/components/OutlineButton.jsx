import React from 'react'

const OutlineButton = ({text, className}) => {
  return (
    <button className={`${className} text-gray-100 border-2 w-full border-white rounded py-2 px-4 font-medium shadow-md transition-all duration-300 hover:scale-95 hover:shadow-sm`}>
        {text.toUpperCase()}
    </button>
  )
}

export default OutlineButton