import React from "react";
import "./NewBlog.css";
import Blog from "../assets/blok.png";

import { useContext } from "react";
import { BlogContext } from "../contexts/BlogContexts";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const navigate = useNavigate();
  const { initialValues } = useContext(BlogContext);
  const { setInitialValues } = useContext(BlogContext);
  const { handleFormSubmit } = useContext(BlogContext);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  return (
    <form
      className="newblog"
      onSubmit={(e, navigate) => handleFormSubmit(e, navigate("/"))}
    >
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
        onChange={handleChange}
        value={initialValues.title}
      />
      <input
        type="text"
        name="imgurl"
        placeholder="Image URL*"
        required
        className="newinput"
        onChange={handleChange}
        value={initialValues.imgurl}
      />
      <textarea
        name="content"
        id="content"
        cols="52"
        rows="10"
        placeholder="Content*"
        style={{ marginTop: "1rem" }}
        onChange={handleChange}
        value={initialValues.content}
      />
      <input type="submit" value="SUBMIT" className="newsubmit" />
    </form>
  );
};

export default NewBlog;
