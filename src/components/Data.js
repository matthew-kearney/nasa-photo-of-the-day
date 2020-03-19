import React from "react";
import styled from "styled-components";


const Info = ({ title, date, explanation, copyright }) => {
 
 const NasaComponent = styled.div`
 .title {
   font-size: 3rem;
   
 }
 .explanation {
   width: 750px;
   display: flex;
   text-align: center;
   font-size: 1.3rem;
 }
 .date {
   font-size: 2rem;
 }

 display: flex;
 width: 80%;
 flex-direction: column;
 align-items: center;
 border-style: inset;
margin-left: 10%;
margin-bottom: 5%;
 `;


  return (
    <NasaComponent>
      <h2 className="title">{title}</h2>
      <p className="explanation">{explanation}</p>
      <p className="date">{date}</p>
      <p className="copyright">Taken by: {copyright}</p>
    </NasaComponent>
  );
};



// const Component = (props) => {
//   const NasaComponent = styled.div`
//     background: #efefef;
//     width: 100px;
//   `;
//   return <NasaComponent />;
// };

// const title = (props) => {
//   const NasaComponent = styled.h2`
//     font-size: 3rem;
//   `;
//   return <NasaComponent />;
// };

export default Info;