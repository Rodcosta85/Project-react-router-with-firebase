import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu.jsx";
import { auth } from "../../services/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
// import users from "./users.json";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // React Router's navigation hook

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Login successful
      sessionStorage.setItem("token", userCredential.user.uid); // Firebase UID as token
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid email or password.");
      console.error(error);
    }
  }

  return (
    <>
      <Menu />
      <form
        onSubmit={handleLogin}
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
