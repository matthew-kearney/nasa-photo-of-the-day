import React, { useState, useEffect } from "react";

 const Info =({title, date, explanation, copyright})=>{
     return (
       <div className="nasa-info">
        <h2>{title}</h2> 
       <p>{explanation}</p> 
       <p>{date}</p>
         <p>Taken by: {copyright}</p>
       </div>
     );
   };
 export default Info;