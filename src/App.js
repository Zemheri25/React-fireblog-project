import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/AppRouter";
import { ToastContainer } from "react-toastify";
import BlogContextProvider from './contexts/BlogContexts'

function App() {
  
  return (
    <div className="App">
      
      <AuthContextProvider>
        <BlogContextProvider>
          <ToastContainer />
          <AppRouter />
        </BlogContextProvider>
        
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
