import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import AppRouter from "./app-router/AppRouter";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
