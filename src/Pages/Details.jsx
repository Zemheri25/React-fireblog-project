import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import "./Details.css";
import { useContext } from 'react';
import {AuthContext} from "../contexts/AuthContext"


const Details = () => {
  const [deleteAndUpdate, setDeleteAndUpdate] = useState(true) 
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  const location = useLocation();
  const item = location.state.item


  useEffect(() => {
    if(currentUser.email === item.email) {
      setDeleteAndUpdate(true)
    }
    else {
      setDeleteAndUpdate(false)
    }
  }, [])


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

      <p className='emaill'>{item.email}</p>

      {
        deleteAndUpdate && <div className='deleteandupdate'>
            <button style={{backgroundColor : "#C51162", color : "white"}} className='du'>Update</button>
            <button style={{backgroundColor : "#D5D5D5"}} className='du'>Delete</button>
        </div>
      }
    </div>
  )
}

export default Details