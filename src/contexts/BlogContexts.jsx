import { createContext, useState } from "react";
import { Additem } from "../helpers/firebase";

import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)

  const [initialValues, setInitialValues] = useState({
    title: "",
    imgurl: "",
    content: "",
    date: "",
    email : "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Additem(initialValues, currentUser);
  };

  return (
    <BlogContext.Provider
      value={{ initialValues, setInitialValues, handleFormSubmit }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
