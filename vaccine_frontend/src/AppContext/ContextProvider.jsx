import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [stateChanged, setStateChanged] = useState(false)
    const [user, setUser] = useState({})
    const [updatedRefreshToken, setUpdatedRefreshToken] = useState(false)
    // this will run each time you refresh the app and get the updated user data
    useEffect(()=>{
      const userData = localStorage.getItem("user")
      if(userData) {
        setUser(JSON.parse(userData))
      }
    },[updatedRefreshToken])
    setTimeout(()=>{
      if (openDialog) setOpenDialog(false)
    }, 3000)
    
  return (
    <AppContext.Provider value={{openDialog, setOpenDialog, user, setUser, updatedRefreshToken, setUpdatedRefreshToken, stateChanged, setStateChanged}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider