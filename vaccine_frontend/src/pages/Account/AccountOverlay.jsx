import React, { useContext, useEffect, useState } from 'react'
import {FaPeopleCarry, FaSignOutAlt, FaShieldAlt, FaChevronDown, FaChevronUp, FaArrowRight, FaArrowLeft, FaPencilAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ChildDetail from './ChildDetail'
import axios from 'axios'
import  URLS from '../../constants'
import AppContext from '../../AppContext/AppContext'
import Profile from './Profile'
import UploadImage from './UploadImage'

const AccountOverlay = () => {
    const [children, setChildren] = useState([])
    const [drop, setDrop] = useState(false)
    const [openChildrenDashboard, setOpenChildrenDashboard] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [child, setChild] = useState(children[0])
    const {user, setUser, stateChanged} = useContext(AppContext)
    const [openOverlay, setOpenOverlay] = useState(false)


    const handleSelect1 = (index) => {
        setChild(children[index])
        setOpenChildrenDashboard(true)
        setOpenDrawer(false)
    }
    const handleSelect2 = (index) => {
        setChild(children[index])
        setOpenChildrenDashboard(true)
    }

    const logout = () => {
        console.log("loggin out")
        axios.get(`${URLS.BASE_URL}/user/logout`, {headers:{Authorization: `Bearer ${user.token}`}}).then( res =>{
           
            const status = res.data.status
            if(status === "success"){
                localStorage.removeItem("user")
                setUser({})
            }
        }).catch( err =>{
            
            console.log(err)
        });
    }

    useEffect(()=>{
        axios.get(`${URLS.BASE_URL}/child`, {headers:{Authorization: `Bearer ${user.token}`}}).then( res =>{
            const status = res.data.status
            if(status === "success"){
                console.log(res.data.data)
                setChildren(res.data.data)
            }
        }).catch( err =>{
            console.log(err)
        });
    },[user, stateChanged])

  return (
    <section className=' w-full py-4'>
        <UploadImage openOverlay={openOverlay} setOpenOverlay={setOpenOverlay} />
        <div className="flex h-full">
            {openDrawer &&  <div className={`flex-none flex md:hidden md:w-[200px] lg:w-[250px] bg-neutral-100`}>
                <div className="h-full w-full">
                    <div className="flex flex-col  p-4">
                        <div className='relative w-fit'>
                            <div onClick={()=>setOpenChildrenDashboard(false)} className='h-[70px] w-[70px] rounded-full bg-neutral-600 cursor-pointer'></div>
                            <div onClick={()=>setOpenOverlay(true)} className='absolute bg-white cursor-pointer text-teal-500 p-2 rounded-full right-0 bottom-0 z-10 text-sm'><FaPencilAlt /></div>
                        </div>
                        <h6 className='mt-2 px-2'>{user.name.toUpperCase()}</h6>
                    </div>
                    <div className="border"></div>
                    <div className=' p-4 flex flex-col h-full w-full'>
                        <div className="w-full">
                            <div onClick={()=>{setDrop(!drop)}} className="flex items-center cursor-pointer py-2 w-full">
                                <span className="flex-none mr-2 font-bold"><FaPeopleCarry /></span>
                                <p className="flex-none ">{children.length > 1? "children" : "child"}</p>
                                <span className="flex-auto flex justify-end">{drop? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {drop && <div>
                                {children.map((child, index) =>(
                                    <p key={index} onClick={()=>handleSelect1(index)} className="pl-6 text-sm py-1 cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500">{`${child.first_name} ${child.last_name}`}</p>
                                ))}
                            </div>}
                        </div>
                        <div className="flex items-center cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500 py-2">
                            <span className="mr-2 font-bold"><FaShieldAlt /></span>
                            <Link to="/policy" className="">Privacy</Link>
                        </div>
                        <div onClick={logout} className="flex items-center cursor-pointer py-2">
                            <p className="">Sign Out</p>
                            <span className="ml-2 font-bold"><FaSignOutAlt /></span>
                        </div>
                    </div>
                </div>
            </div>}

            <div className={`hidden flex-none md:flex md:w-[200px] lg:w-[250px] bg-neutral-100`}>
                <div className="h-full w-full">
                    <div className="flex flex-col  p-4">
                        <div className='relative w-fit'>
                            <div onClick={()=>setOpenChildrenDashboard(false)} className='h-[70px] w-[70px] rounded-full bg-neutral-600 cursor-pointer'></div>
                            <div onClick={()=>setOpenOverlay(true)} className='absolute bg-white cursor-pointer text-teal-500 p-2 rounded-full right-0 bottom-0 z-10 text-sm'><FaPencilAlt /></div>
                        </div>
                        <h6 className='mt-2 px-2'>{user.name.toUpperCase()}</h6>
                    </div>
                    <div className="border"></div>
                    <div className=' p-4 flex flex-col h-full w-full'>
                        <div className="w-full">
                            <div onClick={()=>{setDrop(!drop)}} className="flex items-center cursor-pointer py-2 w-full">
                                <span className="flex-none mr-2 font-bold"><FaPeopleCarry /></span>
                                <p className="flex-none ">{children.length > 1? "children" : "child"}</p>
                                <span className="flex-auto flex justify-end">{drop? <FaChevronUp /> : <FaChevronDown />}</span>
                            </div>
                            {drop && <div>
                                {children.map((child, index) =>(
                                    <p key={index} onClick={()=>handleSelect2(index)} className="pl-6 text-sm py-1 cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500">{`${child.first_name} ${child.last_name}`}</p>
                                ))}
                            </div>}
                        </div>
                        <div className="flex items-center cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500 py-2">
                            <span className="mr-2 font-bold"><FaShieldAlt /></span>
                            <Link to="/policy" className="">Privacy</Link>
                        </div>
                        <div onClick={logout} className="flex items-center cursor-pointer py-2">
                            <p className="">Sign Out</p>
                            <span className="ml-2 font-bold"><FaSignOutAlt /></span>
                        </div>
                    </div>
                </div>
            </div>

            {!openChildrenDashboard &&<div className="flex-auto bg-neutral-50">
                <span onClick={()=>setOpenDrawer(!openDrawer)} className="md:hidden pt-12">{openDrawer?<FaArrowLeft /> : <FaArrowRight />}</span>
                <Profile childrenData={children} handleSelect={handleSelect2}/>
            </div>}

            {openChildrenDashboard && <div className="flex-auto ">
                <span onClick={()=>setOpenDrawer(!openDrawer)} className="md:hidden pt-12">{openDrawer?<FaArrowLeft /> : <FaArrowRight />}</span>
                <ChildDetail detail={child}/>
            </div>}
        </div>
    </section>
  )
}

export default AccountOverlay