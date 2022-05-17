import React from 'react'

const Vote = () => {
    
  return (
    <div className='bg-teal-900/10 p-4 md:p-8 border-l-8 border-teal-800 w-full md:w-2/3'>
        <p className="pb-4">What do you think about Vaccination Reminder service?</p>
        <form>
            <div className='py-2'>
                <input type="radio" name="choice" />
                <label > Very important</label>
            </div>
            <div className='py-2'>
                <input type="radio" name="choice"/>
                <label > Fairly important</label>
            </div>
            <div  className='py-2'>
                <input type="radio" name="choice" />
                <label > Not important</label>
            </div>
            <div  className='w-fit mt-2'>
                <button type='submit' className="bg-green-600 text-white py-1 px-4 rounded">Vote</button>
            </div>
        </form>
    </div>
  )
}

export default Vote