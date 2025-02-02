import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";


const ProtectedRoutes = ({ element }) => {
  const { token } = useUser();

  
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoutes;
