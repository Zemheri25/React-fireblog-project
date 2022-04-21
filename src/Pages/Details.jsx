import React from 'react'
import { useLocation } from 'react-router-dom';
import "./Details.css"

const Details = () => {
  const location = useLocation();
  const item = location.state.item
  return (
    <div className='detailsmain'>
      <div className='maintop1'>
          <div className='lefttandright'></div>
          <h1 style={{color : "#046582"}}>Details</h1>
          <div className='lefttandright'></div>
      </div>

      <img src={item.imgurl} alt="imagetop" />
      <div className='purpleone'>
          <h4 style={{color : "#046582", textAlign : "center"}}>{item.title}</h4>
          <p style={{textAlign  :"center", color : "grey"}}>{item.date}</p>
          <p style={{color : "grey", fontSize : "14px", textAlign  : "center"}}>{item.content}</p>
      </div>
    </div>
  )
}

export default Details