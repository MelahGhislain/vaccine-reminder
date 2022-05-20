import React, {useContext, useState} from 'react'
import AppContext from '../../AppContext/AppContext'
import {FaTrash} from 'react-icons/fa'
import axios from 'axios'
import  URLS from '../../constants'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Profile = ({childrenData, handleSelect}) => {
    const [openConfirm, setOpenConfirm] = useState(false)
    const [id, setId] = useState("")
    const {user, stateChanged, setStateChanged} = useContext(AppContext)

    const handleDelete = () =>{
        axios.delete(`${URLS.BASE_URL}/child/${id}/delete`, {headers:{Authorization: `Bearer ${user.token}`}}).then( res =>{
            const status = res.data.status
            if(status === "success"){
                setStateChanged(!stateChanged)
                setOpenConfirm(false)
            }
        }).catch( err =>{
            
            console.log(err)
        });
    }
    const isOPenConfirm = () =>{
        if(openConfirm){
            return true
        }
        return false
    }
    const handleOpenConfirm = (id) => {
        setOpenConfirm(true)
        setId(id)
    }
    
    
  return (
      <>
        {isOPenConfirm() && 
            <motion.div 
                whileInView={{opacity: [0,1],}}
                transition={{duration: 0.5}}
                className='fixed z-50 top-0 left-0 w-full flex justify-center items-center flex-col'>
                <div className=" mt-4 py-4 px-6 bg-slate-200/80 rounded-lg shadow-sm w-[270px]">
                    <div className="">
                        testing
                    </div>
                    <div className="flex justify-end items-center mt-4">
                        <p onClick={()=>setOpenConfirm(false)} className="bg-green-800 cursor-pointer rounded py-1 px-2 text-white text-sm">CANCLE</p>
                        <p onClick={handleDelete} className="bg-red-700 cursor-pointer rounded py-1 px-2 text-white text-sm ml-2">CONFIRM</p>
                    </div>
                </div>
            </motion.div>
            
        }
      
        <div className=" w-full h-full px-8 py-4 md:w-[80%] lg:w-[60%] mx-auto">
            <h2>Account Details</h2>
            <ul className='border p-4 rounded mt-2'>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">Name: </p>
                    <p>{user.name.replace(/\w\S*/g, (w)=>(w.replace(/^\w/, (c)=>c.toUpperCase())))}</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">Email: </p>
                    <p>{user.email}</p>
                </li>
                <li className="flex items-center py-1 text-neutral-600">
                    <p className="mr-2">Phone: </p>
                    <p>{user.phone}</p>
                </li>
            </ul>
            <ul className='border p-4 rounded mt-2'>
                <h3>{childrenData.length > 1? "Children" : "Child"}</h3>
                {childrenData.map((child, index) =>(
                    <li className="py-1 text-neutral-500 flex items-center justify-between">
                        <p onClick={()=>{handleSelect(index)}} className="w-fit cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-teal-500">{`${child.first_name} ${child.last_name}`}</p>
                        <span onClick={()=> handleOpenConfirm(child._id) } className="text-red-600 cursor-pointer transition-all duration-300 hover:scale-110"><FaTrash /></span>
                    </li>
                ))}
                <Link to='/registration'>
                    <div className="p-2 bg-teal-500 text-white mt-4 cursor-pointer transition-all duration-300 hover:scale-95 rounded w-full text-center">
                        Add Child
                    </div>
                </Link>
            </ul>
        </div>
    </>
  )
}

export default Profile