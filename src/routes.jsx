import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import SignUp from "./pages/Sign Up/SignUp.jsx";
import UpdateInfo from "./pages/Update Info/UpdateInfo.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<PrivateRoute page={<Dashboard />} />} />
        <Route path="/update+info" element={<PrivateRoute page={<UpdateInfo />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
