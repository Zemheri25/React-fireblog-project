import React from "react";
import "./NewBlog.css";
import Blog from "../assets/blok.png";
import { useState } from "react";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [content, setContent] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, imgurl, content)
  }

  return (
    <form className="newblog" onSubmit={handleSubmit}>
      <img src={Blog} alt="" className="blokim" />
      <div className="blognew">
        <div className="leftnright"></div>
        <h1 className="h11">New Blog</h1>
        <div className="leftnright"></div>
      </div>

      <input
        type="text"
        name="title"
        placeholder="Title*"
        required
        className="newinput"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="imgurl"
        placeholder="Image URL*"
        required
        className="newinput"
        onChange={(e) => setImgurl(e.target.value)}
      />
      <textarea
        name="content"
        id=""
        cols="52"
        rows="10"
        placeholder="Content*"
        style={{ marginTop: "1rem" }}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="submit" value="SUBMIT" className="newsubmit" />
    </form>
  );
};

export default NewBlog;
