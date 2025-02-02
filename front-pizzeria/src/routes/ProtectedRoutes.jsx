import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

// Este componente protege las rutas y redirige si no hay token
const ProtectedRoutes = ({ element }) => {
  const { token } = useUser();

  // Si no hay token, redirige a login, sino muestra el componente de la ruta protegida
  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoutes;
