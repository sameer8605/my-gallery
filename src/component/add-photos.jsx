import axios from "axios";
import {  useFormik } from "formik";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BASE_URL;

export default function AddPhotos(){
    const[selectedImageFile,setselectedImageFile] = useState([])
    const [imagePreviews, setImagePreviews] = useState([]);
   
     const navigate = useNavigate()
   


    const formik = useFormik({
        initialValues: {
            image: [] 
        },
        onSubmit : ()=>{
            const formData = new FormData();
            if(selectedImageFile){
                console.log(selectedImageFile)
             //   formData.append('image[]', selectedImageFile);

             Array.from(selectedImageFile).forEach((file) => {
              formData.append('image[]', file); // 'image[]' is the field name expected on the backend
            });
            }

            
         axios.post(`${baseUrl}/api/auth/add-photos`,formData)
         .then((res)=>{
          console.log(res)
          if(res.status == 200){
          //  toast.success("Product Added Successfully")
            navigate("/admin-dash")
          }
         } )
         .catch((err)=>{
            console.log(err)

         // toast.error(err.response.data.message)
        })
          
        }
    })

    function handleImageChange(e){
        
        if(e.target.files){
            const newFiles = [...e.target.files]

            if(selectedImageFile.length + newFiles.length > 4){
               // toast.error("you can only upload upto 4 images")
                return;
            }
            setselectedImageFile((prevFile)=>[...prevFile,...newFiles])

            newFiles.forEach((file)=>{
                const reader = new FileReader();
                reader.onloadend = ()=>{
                    setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
                }
                reader.readAsDataURL(file);
            })
        }
    }
    
    function handleClearFiles(){
        setImagePreviews([])
        setselectedImageFile([])
    }


   

   
    return(
        <div>
            
          <div className="col-6 col-sm-8 border border-1 rounded  p-4">
          <h4 className="text-center">Add Product</h4>
          <form className="mt-3" onSubmit={formik.handleSubmit} encType="multipart/form-data">
            <dl >
                
                <dt className="my-2">Product Image</dt>
                <dd>
                <input type="file" multiple className="form-control"  onChange={handleImageChange} onBlur={formik.handleBlur}/>
               < div className="row">
          {imagePreviews.map((preview, index) => (
            <div className="col-3 mb-3" key={index}>
              <div className="card">
                <img
                  src={preview}
                  alt={`preview-${index}`}
                  className="card-img-top"
                  style={{ height: '50px', objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
        {selectedImageFile.length > 0 && (
        <div>
          <button onClick={handleClearFiles} className="btn btn-danger mt-3">
            Clear Files
          </button>
        </div>
      )}
                </dd>
               
               
                
               
               
            </dl>
            <div className="d-flex justify-content-around">
            <button className="btn btn-primary w-50" type="submit">save</button>
            <Link to="/admin-dash" className="btn mx-2 btn-warning w-50">Cancel </Link>
            </div>
            
           </form>
          </div>
        </div>
    )
}