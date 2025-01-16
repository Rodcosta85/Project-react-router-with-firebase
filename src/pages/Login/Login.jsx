import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu.jsx";
// import users from "./users.json";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // React Router's navigation hook

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = (email, password) => {
      const user = users.find(user => user.email === email);
      if (!user) {
        return false;
      }
      sessionStorage.setItem("projeto-user", JSON.stringify(user));
      const isPasswordValid = user.password === password;
      return isPasswordValid;
    }
    // Basic Validation
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email!");
      return;
    }

    const isUserValid = checkUser(email, password);


    // Mock login validation
    if (isUserValid) {
      sessionStorage.setItem("token", "a1b2c3d4");
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to the dashboard page
    } else {
      alert("Invalid email or password.");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Menu />
      <form
        onSubmit={handleSubmit}
        className="w-[400px] h-[330px] flex flex-col justify-center items-center gap-3 border-black border-[1px] border-opacity-20 rounded-xl mt-12"
      >
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[270px] mb-3 pb-1 border-black border-b-[1px] focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[270px] mb-3 pb-1 border-black border-b-[1px] focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-300 border-[1px] w-52 h-10 mt-8 rounded-xl text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
