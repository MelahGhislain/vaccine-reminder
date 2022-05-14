import React, { useState } from 'react'
import {FaClock, FaBars, FaXing } from 'react-icons/fa'



const navItems = ['home', 'vaccines', 'about', 'contact']


const NavBar = () => {
    const [active, setActive] = useState('home')
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
      <>
    <nav className="flex-none flex items-center px-8 py-2">
        <div className='flex-1 flex items-center text-2xl font-bold'><span className='mr-1 text-gray-700'>Vaccine</span> <FaClock className='text-green-600'/></div>
        
        <ul className='flex-none hidden md:flex justify-center items-center '>
            {navItems.map(nav =>(
                <li onClick={()=>setActive(nav)} className={`text-sm font-medium py-2 px-4 mx-1 cursor-pointer transition-all duration-300 hover:text-green-600 ${active === nav? "text-green-600": "" }`}>
                    {nav.toUpperCase()}
                </li>
            ))}
        </ul>
        {!openDrawer?
            <FaBars className='cursor-pointer md:hidden' onClick={()=>setOpenDrawer(true)}/>
            : <FaXing className='cursor-pointer md:hidden' onClick={()=>setOpenDrawer(false)}/>
            }
       
    </nav>
    {openDrawer && <nav className="flex-none flex items-center px-8 py-2">
        
        <ul className='flex-none flex justify-center items-start  flex-col'>
            {navItems.map(nav =>(
                <li onClick={()=>setActive(nav)} className={`text-sm font-medium py-2 px-4 mx-1 cursor-pointer transition-all duration-300 hover:text-green-600 ${active === nav? "text-green-600": "" }`}>
                    {nav.toUpperCase()}
                </li>
            ))}
        </ul>
    </nav>}
</>
  )
}

export default NavBar