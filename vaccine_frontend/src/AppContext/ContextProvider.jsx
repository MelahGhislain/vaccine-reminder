import React, { useState } from 'react'
import AppContext from './AppContext'


const ContextProvider = ({children}) => {
    const [openDialog, setOpenDialog] = useState(false)
    const [user, setUser] = useState({})
    setTimeout(()=>{
      if (openDialog) setOpenDialog(false)
    }, 3000)
    
  return (
    <AppContext.Provider value={{openDialog, setOpenDialog, user, setUser}}>
        {children}
    </AppContext.Provider>
  )
}

export default ContextProvider