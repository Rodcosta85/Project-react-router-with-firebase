import React, { useState } from "react";
import Menu from "../../components/Menu/Menu.jsx";
import Arrow from "../../../public/DownwardArrow.svg";

function SignUp() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setFormData({ name: '', email: '', password: '' }); // Reset the form
      alert("user added to our database")
    } catch (error) {
      console.log(error);
      alert("Something wrong has happened, try again");
    }
  };

  return (
    <>
      <Menu />
      <div className="flex flex-row items-center gap-2 ml-6 mt-6">
        <h1 className="font-medium text-[20px]">
          Sign up to our service filling out the form below
        </h1>
        <img src={Arrow} alt="a small blue downward arrow" />
      </div>
      <form
        action="submit"
        onSubmit={handleAddUser}
        className="w-[420px] h-[470px] border-black border-opacity-20 border-[1px] rounded-[15px] mt-16 p-5 flex flex-col justify-center items-center gap-12"
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col gap-4">
            <label htmlFor="full name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-[270px] mb-3 pb-2 border-black border-b-[1px] focus:outline-none"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-[270px] mb-3 pb-2 border-black border-b-[1px] focus:outline-none"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-[270px] mb-3 pb-2 border-black border-b-[1px] focus:outline-none"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-300 border-[1px] w-52 h-10 rounded-xl text-white"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}

export default SignUp;
