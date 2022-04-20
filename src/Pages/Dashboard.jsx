import React from 'react'
import { useFetch } from '../helpers/firebase'
import BlogCard from "../components/BlogCard"
import "./Dashboard.css"

const Dashboard = () => {

  const {items} = useFetch();
  

  return (
    
      <div className='container dashboard'>
        {items?.map((item, index) => {
          return <BlogCard item = {item} key = {index}/>
        })}
      </div>
    
  )
}

export default Dashboard