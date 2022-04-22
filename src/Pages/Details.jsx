import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import "./Details.css";
import { useContext } from 'react';
import {AuthContext} from "../contexts/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DeleteItem } from '../helpers/firebase';
import { useNavigate } from 'react-router-dom';
import {BlogContext} from "../contexts/BlogContexts"




const Details = () => {
  const navigate = useNavigate();
  const [deleteAndUpdate, setDeleteAndUpdate] = useState(true) 
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  const location = useLocation();
  const item = location.state.item;
  const {handleEdit} = useContext( BlogContext)


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
      <div className='person'>
      <AccountCircleIcon style={{marginRight : "-2rem"}}/>
      <p className='emaill'>{item.email}</p>
      </div>
      {
        deleteAndUpdate && <div className='deleteandupdate'>
            <button style={{backgroundColor : "#C51162", color : "white"}} className='du' onClick={() => handleEdit(
              item.id,
              item.imgurl,
              item.title,
              item.content,
              item.email,
              item.date,
              
              navigate("/updateblog")
            )}>Update</button>
            <button style={{backgroundColor : "#D5D5D5"}} className='du' onClick={() => DeleteItem(item.id, navigate("/"))}>Delete</button>
        </div>
      }
    </div>
  )
}

export default Details