import React, { useState } from 'react'
import {FaPeopleCarry, FaSignOutAlt, FaShieldAlt, FaChevronDown, FaChevronUp, FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ChildDetail from './ChildDetail'
const children = [
    {
        id: "child-id-1",
        name: "John Doe",
        dob: "10/01/2022",
        blood_group: "A+",
        height: "60",
        weight: "30",
        gender: "M",
        vaccines: [
            {
                id: "vaccine-id-1",
                name:"OPV"
            },
            {
                id: "vaccine-id-2",
                name:"BCG"
            },
            {
                id: "vaccine-id-3",
                name:"ROTAL 2"
            },
        ]
    },
    {
        id: "child-id-2",
        name: "Mary Jane",
        dob: "10/01/2012",
        blood_group: "AB+",
        height: "100",
        weight: "60",
        gender: "F",
        vaccines: [
            {
                id: "vaccine-id-1",
                name:"OPPneumo 13-2V"
            },
            {
                id: "vaccine-id-2",
                name:"BCG"
            },
            {
                id: "vaccine-id-3",
                name:"ROTAL 2"
            },
            {
                id: "vaccine-id-4",
                name:" OPV 3"
            },
            {
                id: "vaccine-id-5",
                name:" Vit A"
            },
        ]
    },
]
const AccountOverlay = () => {
    const [drop, setDrop] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [child, setChild] = useState(children[0])
    const handleSelect = (index) => {
        setChild(children[index])
        setOpenDrawer(false)
    }

  return (
    <section className=' w-full py-4'>
        <div className="flex h-full">
            {openDrawer && <div className={`flex-none flex md:w-[200px] lg:w-[250px] bg-neutral-100`}>
                <div className="h-full w-full">
                    <div className="flex flex-col  p-4">
                        <div className='h-[70px] w-[70px] rounded-full bg-neutral-600 cursor-pointer'></div>
                        <h6 className='mt-2 px-2'>Agendia Ester</h6>
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
                                    <p key={index} onClick={()=>handleSelect(index)} className="pl-6 text-sm py-1 cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500">{child.name}</p>
                                ))}
                            </div>}
                        </div>
                        <div className="flex items-center cursor-pointer transition-all duration-300 hover:scale-95 hover:text-teal-500 py-2">
                            <span className="mr-2 font-bold"><FaShieldAlt /></span>
                            <Link to="/policy" className="">Privacy</Link>
                        </div>
                        <div className="flex items-center cursor-pointer py-2">
                            <p className="">Sign Out</p>
                            <span className="ml-2 font-bold"><FaSignOutAlt /></span>
                        </div>
                    </div>
                </div>
            </div>}

            <div className="flex-auto ">
                <span onClick={()=>setOpenDrawer(!openDrawer)} className="md:hidden pt-12">{openDrawer?<FaArrowLeft /> : <FaArrowRight />}</span>
                <ChildDetail detail={child}/>
            </div>
        </div>
    </section>
  )
}

export default AccountOverlay