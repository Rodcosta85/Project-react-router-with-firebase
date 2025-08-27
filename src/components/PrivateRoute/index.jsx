import { Link, Navigate } from "react-router-dom";

function PrivateRoute() {

  const token = sessionStorage.getItem("token");

  // fazer a validação

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <div className="w-[100vw] h-16 pl-2 bg-blue-500 flex flex-row items-center justify-center">
    <li className="mr-7 font-semibold list-none hover:text-white">
      <Link to="/home">Home</Link>
    </li>
    <li className="mr-7 font-semibold list-none hover:text-white">
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li className="mr-7 font-semibold list-none hover:text-white">
      <Link to="/update+info">Update your info</Link>
    </li>
  </div>;
}

export default PrivateRoute;
