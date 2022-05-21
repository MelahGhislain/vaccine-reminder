import React, { useContext, useEffect, useState } from 'react'
import UploadImage from '../../components/UploadImage'
import { FaSignOutAlt, FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios'
import  URLS from '../../constants'
import AppContext from '../../AppContext/AppContext'
import VaccinesDashboard from './VaccinesDashboard'
import CreateVaccine from './CreateVaccine'

const Dashboard = () => {
    const [vaccines, setVaccines] = useState([])
    const [openVaccineDashboard, setOpenVaccineDashboard] = useState(true)
    const [openDrawer, setOpenDrawer] = useState(false)
    const {user, setUser, stateChanged} = useContext(AppContext)
    const [openOverlay, setOpenOverlay] = useState(false)
    const [createVaccine, setCreateVaccine] = useState(false)

    const handleCreateVaccine =()=>{
        setCreateVaccine(true)
        setOpenVaccineDashboard(false)
    }
    const handleOpenVaccineDashboard =()=>{
        setOpenVaccineDashboard(true)
        setOpenDrawer(false)
        setCreateVaccine(false)
    }
    const logout = () => {
        console.log("loggin out")
        // axios.get(`${URLS.BASE_URL}/user/logout`, {headers:{Authorization: `Bearer ${user.token}`}}).then( res =>{
           
        //     const status = res.data.status
        //     if(status === "success"){
        //         localStorage.removeItem("user")
        //         setUser({})
        //     }
        // }).catch( err =>{
            
        //     console.log(err)
        // });
    }

    useEffect(()=>{
        axios.get(`${URLS.BASE_URL}/vaccine`).then( res =>{
            const status = res.data.status
            if(status === "success"){
                // console.log(res.data.data)
                setVaccines(res.data.data)
            }
        }).catch( err =>{
            alert(err)
            console.log(err)
        });
    },[user, stateChanged])
  return (
    <>
        <main className=' w-full h-screen'>
            <UploadImage openOverlay={openOverlay} setOpenOverlay={setOpenOverlay} />
            <div className="flex h-full">
               
                <div className={`hidden flex-none md:flex md:w-[200px] lg:w-[250px] bg-neutral-100`}>
                    <div className="h-full w-full">
                        <div className="flex flex-col  p-4">
                            {/* <div className='relative w-fit'>
                                <div onClick={()=>setOpenVaccineDashboard(false)} className='h-[70px] w-[70px] rounded-full bg-neutral-600 cursor-pointer'></div>
                                <div onClick={()=>setOpenOverlay(true)} className='absolute bg-white cursor-pointer text-teal-500 p-2 rounded-full right-0 bottom-0 z-10 text-sm'><FaPencilAlt /></div>
                            </div> */}
                            {/* <h6 className='mt-2 px-2'>{user.name.toUpperCase()}</h6> */}
                        </div>
                        <div className="border"></div>
                        <div className=' p-4 flex flex-col h-full w-full'>
                            <div className="w-full">
                                <div className="flex items-center py-2 w-full">
                                    <p onClick={()=>handleOpenVaccineDashboard()} className="flex-none cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-teal-500">Vaccines</p>
                                </div>
                            </div>
                            <div className="flex items-center w-full py-2">
                                <Link to="/policy" className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-teal-500">Privacy</Link>
                            </div>
                            <div onClick={logout} className="flex items-center cursor-pointer py-2">
                                <p className="">Sign Out</p>
                                <span className="ml-2 font-bold"><FaSignOutAlt /></span>
                            </div>
                        </div>
                    </div>
                </div>

                {openDrawer &&  <div className={`flex-none flex md:hidden md:w-[200px] lg:w-[250px] bg-neutral-100`}>
                    <div className="h-full w-full">
                        <div className="flex flex-col  p-4">
                            {/* <div className='relative w-fit'>
                                <div onClick={()=>setOpenVaccineDashboard(false)} className='h-[70px] w-[70px] rounded-full bg-neutral-600 cursor-pointer'></div>
                                <div onClick={()=>setOpenOverlay(true)} className='absolute bg-white cursor-pointer text-teal-500 p-2 rounded-full right-0 bottom-0 z-10 text-sm'><FaPencilAlt /></div>
                            </div> */}
                            {/* <h6 className='mt-2 px-2'>{user.name.toUpperCase()}</h6> */}
                        </div>
                        <div className="border"></div>
                        <div className=' p-4 flex flex-col h-full w-full'>
                            <div className="w-full">
                                <div className="flex items-center cursor-pointer py-2 w-full">
                                    <p onClick={()=>handleOpenVaccineDashboard()} className="flex-none transition-all duration-300 hover:translate-x-1 hover:text-teal-500">Vaccines</p>
                                </div>
                            </div>
                            <div className="flex items-center cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500 py-2">
                                <Link to="/policy" className="">Privacy</Link>
                            </div>
                            <div onClick={logout} className="flex items-center cursor-pointer py-2">
                                <p className="">Sign Out</p>
                                <span className="ml-2 font-bold"><FaSignOutAlt /></span>
                            </div>
                        </div>
                    </div>
                </div>}

                {openVaccineDashboard && <div className="flex-auto ">
                    <div className="flex items-center justify-between px-10 pt-2 ">
                        <span onClick={()=>setOpenDrawer(!openDrawer)} className="md:hidden ">{openDrawer?<FaArrowLeft /> : <FaArrowRight />}</span>
                        <button onClick={()=>handleCreateVaccine()} className="bg-green-800 text-white px-4 py-2 rounded-md text-sm">Add</button>
                    </div>
                    <VaccinesDashboard vaccines={vaccines}/>
                </div>}
                {createVaccine && <div className="flex-auto ">
                    <div className="flex items-center justify-between px-10 py-2 ">
                        <span onClick={()=>setOpenDrawer(!openDrawer)} className="md:hidden ">{openDrawer?<FaArrowLeft /> : <FaArrowRight />}</span>
                        <button className="bg-green-800 text-white px-4 py-2 rounded-md text-sm">Add</button>
                    </div>
                    <CreateVaccine />
                </div>}
            </div>
        </main>
    </>
  )
}

export default Dashboard