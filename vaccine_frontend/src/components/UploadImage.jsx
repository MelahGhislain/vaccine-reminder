import React, { useContext, useState } from 'react'
import axios from 'axios'
import  URLS from '../constants'
import AppContext from '../AppContext/AppContext'

const UploadImage = ({openOverlay, setOpenOverlay}) => {
    const [image, setImage] = useState({ preview: '', data: '' })
    const {user} = useContext(AppContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', image.data)

        // const response = await fetch('http://localhost:5000/image', {
        // method: 'POST',
        // body: formData,
        // })

        // if (response) alert(response)

        axios.post(`${URLS.BASE_URL}/image/upload`, formData, {headers:{Authorization: `Bearer ${user.token}`}}).then( res =>{
           
            const status = res.data.status
            if(status === "success"){
                setOpenOverlay(false)
            }
        }).catch( err =>{
            alert(err)
            setOpenOverlay(false)
            console.log(err)
        });
    }

    const handleFileChange = (e) => {
        const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
        }
        setImage(img)
    }

  return (
    <div className= {`w-screen h-screen ${openOverlay? "fixed" : "hidden"} top-0 z-20 flex justify-center items-center `}>
        <div onClick={()=>setOpenOverlay(false)} className="absolute w-full h-full bg-black/50 cursor-pointer"></div>
        <div className="absolute flex justify-center items-center bg-white flex-col h-[50%] w-[50%]">
            {image.preview && <img src={image.preview} width='100' height='100' alt='profile'/>}
            
            <form onSubmit={handleSubmit} className="flex flex-col ">
                <input type='file' name='file' onChange={handleFileChange}></input>
                <button type='submit' disabled={image.preview? false : true} className="bg-green-800 text-white mt-6 py-2 rounded-md">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default UploadImage