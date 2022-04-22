import React from "react";
import { useFetch } from "../helpers/firebase";
import BlogCard from "../components/BlogCard";
import "./Dashboard.css";



const Dashboard = () => {
  const { items } = useFetch();

  


  return (
    <div className="dhsb">
      <div className="dashh1">
        <div className="lftnrght"></div>
        <h1 style={{color : "#046582"}}>Dashboard</h1>
        <div className="lftnrght"></div>
      </div>
      <div className="container dashboard">
      {items?.map((item, index) => {
        return (
          <BlogCard item={item} key={index} />
        );
      })}
      </div>
    </div>
  );
};

export default Dashboard;
