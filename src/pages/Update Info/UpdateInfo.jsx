import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu.jsx";

function UpdateInfo() {
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const patchInfo = async (id, name, email, password) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Include fields to update
      });

      if (!response.ok) {
        throw new Error(`Failed to update user: ${response.status}`);
      }

      setInfo(info.filter((user) => user.id !== id));
      alert("your info has been updated successfully");
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      alert("Something went wrong, please try again");
    }
  };

  
  const handleFormSubmit = (e, id) => {
    e.preventDefault();
    patchInfo(id, name, email, password);
  };



  return (
    <>
      <Menu />
      <form
        className="w-[370px] h-[430px] flex flex-col justify-center mt-20 pl-8 border-black border-[1px] border-opacity-20 rounded-xl"
      >
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className="w-[290px] mb-7 pb-2 border-black border-b-[1px] focus:outline-none"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="w-[290px] mb-7 pb-2 border-black border-b-[1px] focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          type="password"
          name="password"
          id="password"
          className="w-[290px] mb-10 pb-2 border-black border-b-[1px] focus:outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex pl-12">
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="bg-red-500 hover:bg-red-300 border-[1px] w-52 h-10 rounded-xl text-white"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateInfo;
