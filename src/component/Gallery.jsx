import axios from "axios";
import React, { useEffect, useState } from "react";
import './gallery.css'
import Loader from "./loader";
export default function Gallery() {
  const [loading,setLoading] = useState(false)
const baseUrl = import.meta.env.VITE_BASE_URL;


    const [photos,setPhoto] = useState([])
    useEffect(()=>{
      setLoading(true)
    axios.get(`${baseUrl}/api/auth/photos` , {withCredentials : true})
    .then((res)=>{
        console.log(res)
        setPhoto(res.data)
    })
    .finally(()=>{
      setLoading(false)
    })
    },[])

if(loading){
  return(
    <div>
      <Loader />
    </div>
  )
}

  return (
      <div className=" mobile-gallery">
        {photos.map((photo) => (
          
            <div key={photo.id} className="photo-wrapper">
              <img
              className="gallery-img"
                src={photo.image}
                alt="not found"
              />
            </div>
          
        ))}
      </div>
    
  );
}
