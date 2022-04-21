import { createContext, useState} from "react";
import { Additem } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
export const BlogContext = createContext();

const BlogContextProvider = ({children}) => {
    
   const [initialValues, setInitialValues] = useState({
       title : "",
       imgurl : "",
       content : "",
       date : "",
       email : "",
   });

   const handleFormSubmit = (e) => {
       e.preventDefault();
       
       Additem(initialValues);
   }



    return <BlogContext.Provider value={{initialValues, setInitialValues, handleFormSubmit}}>
        {children}
    </BlogContext.Provider>
}

export default BlogContextProvider;