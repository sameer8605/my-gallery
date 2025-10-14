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
      <div className=" col-sm-11 d-flex flex-wrap w-100">
        {photos.map((photo) => (
          
            <div key={photo.id} className="my-3 shadow-sm border-1 w-100" style={{height:'400px'}}>
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
