import axios from "axios";
import React, { useEffect, useState } from "react";
import './gallery.css'
export default function Gallery() {
const baseUrl = import.meta.env.VITE_BASE_URL;


    const [photos,setPhoto] = useState([])
    useEffect(()=>{
    axios.get(`${baseUrl}/api/auth/photos` , {withCredentials : true})
    .then((res)=>{
        console.log(res)
        setPhoto(res.data)
    })
    },[])
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
