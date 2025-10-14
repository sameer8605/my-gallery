import axios from "axios";
import React, { useEffect, useState } from "react";
import './gallery.css'
export default function Gallery() {
const baseUrl = import.meta.env.VITE_BASE_URL;


    const [photos,setPhoto] = useState([])
    useEffect(()=>{
    axios.get(`${baseUrl}/api/auth/photos`)
    .then((res)=>{
        console.log(res)
        setPhoto(res.data)
    })
    },[])
  return (
    <div >
      <div className=" col-sm-11 d-flex flex-wrap ">
        {photos.map((photo) => (
          <div key={photo.id}>
            <div className="card shadow-sm border-0">
              <img
                src={photo.image}
                alt="not found"
                className="gallery-img "
                
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
