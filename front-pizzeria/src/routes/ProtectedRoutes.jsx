import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";


const ProtectedRoutes = ({ children }) => {
  const { token } = useUser();

  if(!token) {
    return <Navigate to='/login'/>
  }
  return children
};

export default ProtectedRoutes;
