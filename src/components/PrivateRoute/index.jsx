import { Navigate } from "react-router-dom";

function PrivateRoute({ page }) {

  const token = sessionStorage.getItem("token");

  // fazer a validação

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{page}</>;
}

export default PrivateRoute;
