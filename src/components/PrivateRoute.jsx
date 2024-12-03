import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    // Dacă nu este autentificat, redirecționează către login
    return <Navigate to="/login" />;
  }

  // Dacă este autentificat, afișează conținutul
  return children;
};

export default PrivateRoute;
