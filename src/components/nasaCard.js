import React, { useState, useEffect } from "react";
 import axios from "axios";
 import Info from "./Data";
 export default function PhotoCard(){
     const [photoData, setPhotoData] = useState({});

     useEffect(() => {

         axios.get(`https://api.nasa.gov/planetary/apod?api_key=poabCixXn4ymsmjXAxgjv37wfeUduqaRvmfSLuX1`)
         .then(response => {
         setPhotoData(response.data);
         })
         .catch(error => {
         });

     }, []);

     return (
 
         <div className = "photo-card">

             <img src = {photoData.url} className = "space-img" alt = 'space img'/>

             <Info
             title = {photoData.title}
             date = {photoData.date}
             explanation = {photoData.explanation}
             copyright = {photoData.copyright}
             />

         </div>

     )

 }