import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import "./Profile.css"


const Profile = () => {

  const {currentUser} = useContext(AuthContext)




  return (
    <div className='profilee'>
      <h6>Display Name :</h6>
      <h3>{currentUser.displayName}</h3>
      <h6>Email :</h6>
      <h3>{currentUser.email}</h3>

    </div>
  )
}

export default Profile