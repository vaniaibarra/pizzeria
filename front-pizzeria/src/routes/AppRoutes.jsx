import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import ProtectedRoutes from "./ProtectedRoutes"; 

function AppRoutes() {
  const { token } = useUser();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />

      
      <Route path="/profile" element={
        <ProtectedRoutes element={<Profile/>}/>
          
        
      } />

      
      <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
      <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />

      
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRoutes;
