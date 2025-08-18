import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu.jsx";
import Edit from "../../../public/edit.svg";
import Delete from "../../../public/delete.svg";
import { db } from "../../services/firebase.js";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const [info, setInfo] = useState([]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // React Router's navigation hook

  // const handleRemove = async (id) => {
  //   try {
  //     await fetch(`http://localhost:3000/users/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ id }),
  //     });
      
  //     setInfo(info.filter((user) => user.id !== id));
  //     alert("user deleted from our database");
    
  //   } catch (error) {
  //     console.log(error);
  //     alert("Something went wrong, please try again");
  //   }
  // };

  
  useEffect(() => {
    async function fetchUsers() {
      const snapshot = await getDocs(collection(db, "users"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const updateInfo = () => {
    navigate("/update+info");
  };



  return (
    <>
      <Menu />
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h1 className="font-semibold text-[20px] ml-6 mt-6">
          Hey you made it to the dashboard!
        </h1>
        <h2 className="font-medium text-[15.5px] ml-6 mt-4 text-center">
          Here we have a list of users that have already signed up for our
          service:
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-14 mt-[50px]">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="flex flex-row justify-center items-center border-b-[2px] border-b-blue-500 pb-5"
            >
              <ul className="w-[310px] h-[120px] flex flex-col justify-center ">
                <li className="text-[17px] mb-2">Name: {user.name}</li>
                <li className="text-[17px] mb-2">Email: {user.email}</li>
                <li className="text-[17px]">Password: {user.password}</li>
              </ul>
              <div className="h-[100px] flex flex-col justify-center items-center gap-3">
                <button
                  onClick={updateInfo}
                  className="w-11 h-11 border-[1px] bg-gray-300 rounded-[15px] flex justify-center items-center"
                >
                  <img
                    src={Edit}
                    alt="a pencil symbol"
                    className="w-[22px] h-[22px]"
                  />
                </button>
                <button
                  onClick={() => handleRemove(user.id)}
                  className="w-11 h-11 border-[1px] bg-gray-300 rounded-[15px] flex justify-center items-center"
                >
                  <img src={Delete} alt="a trash can symbol" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Dashboard;
