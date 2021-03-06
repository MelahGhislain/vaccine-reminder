import React, { useContext, useEffect, useState } from 'react'
import {FaClock, FaBars, FaWindowClose } from 'react-icons/fa'
import {Link, useLocation} from 'react-router-dom'
import AppContext from '../AppContext/AppContext'



const navItems = [
    {name:'home', route: "/"}, 
    {name:'vaccine', route: "/vaccine"}, 
    {name:'about', route: "/about"}, 
    {name:'contact', route:"/contact"},
    {name:'account', route:"/account"},
]


const NavBar = () => {
    const [navLinks, setNavLinks] = useState(navItems)
    const [active, setActive] = useState('home')
    const [openDrawer, setOpenDrawer] = useState(false)
    const {user} = useContext(AppContext)
    const location = useLocation()

    console.log(location.pathname)
    
    useEffect(()=>{
        const items = navItems.filter(item =>{
            if(item.name !== "account") return item
            else if(item.name === "account" && user.token) return item
            return null
        })
        setNavLinks(items)
    },[user])

  return (
      <div className=' w-full fixed top-0 z-20 bg-white'>
        <nav className="flex-none flex items-center px-8 py-2">
            <Link to="/" className='flex-1'>
                <div className=' flex items-center text-2xl font-bold'><span className='mr-1 text-gray-700'>Vaccine</span> <FaClock className='text-green-600'/></div>
            </Link>
            
            <ul className='flex-none hidden md:flex justify-center items-center '>
                {navLinks.map((nav, index) =>(
                    
                        <Link to={nav.route} key={index}>
                            <li onClick={()=>setActive(nav.name)} className={`text-sm font-medium py-2 px-4 mx-1 cursor-pointer transition-all duration-300 hover:text-green-600 ${(location.pathname.slice(1) === nav.name)||(location.pathname === '/' && nav.name === "home" )? "text-green-600": "" }`}>
                                {nav.name.toUpperCase()}
                            </li>
                        </Link>
                ))}
                

                {!user.token && <Link to="/signup">
                    <li className='text-gray-100 bg-green-600 border-2 border-green-600 m-1 rounded py-1 px-4 cursor-pointer text-sm font-medium shadow-md transition-all duration-300 hover:scale-95 hover:shadow-sm'>GET STARTED</li>
                </Link>}
            </ul>
            {!openDrawer?
                <FaBars className='cursor-pointer md:hidden' onClick={()=>setOpenDrawer(true)}/>
                : <FaWindowClose className='cursor-pointer md:hidden' onClick={()=>setOpenDrawer(false)}/>
                }
        
        </nav>
        {openDrawer && <nav className="flex-none flex items-center px-4 py-2 md:hidden">
            
            <ul className='flex-none flex justify-center items-start  flex-col'>
                {navLinks.map((nav, index) =>(
                    <Link to={nav.route} key={index}>
                        <li to={nav.route} onClick={()=>setActive(nav.name)} className={`text-sm font-medium py-2 px-4 mx-1 cursor-pointer transition-all duration-300 hover:text-green-600 ${(location.pathname.slice(1) === nav.name)||(location.pathname === '/' && nav.name === "home" ) ? "text-green-600": "" }`}>
                            {nav.name.toUpperCase()}
                        </li>
                    </Link>
                ))}
                {!user.token && <Link to="/signup">
                    <div className='px-4'>
                        <li className='text-gray-100 bg-green-600 border-2 border-green-600 m-1 rounded py-1 px-4 cursor-pointer text-sm font-medium shadow-md transition-all duration-300 hover:scale-95 hover:shadow-sm'>GET STARTED</li>
                    </div>
                </Link>}
            </ul>
        </nav>}
    </div>
  )
}

export default NavBar