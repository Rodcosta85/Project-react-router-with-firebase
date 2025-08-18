import React, { useState, useEffect } from 'react'
import useQuery from '../../services/useQuery.jsx';
import Menu from "../../components/Menu/Menu.jsx";

function Welcome() {

  const [users, setUsers] = useState([]);

  const { getData } = useQuery();

  async function getUsers() {
    const response = await getData("users");
    console.log(response);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Menu />
      <h1 className="font-medium text-[20px] ml-6 mt-6">Welcome to my first page using <i className="text-lime-500">react router</i>!</h1>
    </>
  )
}

export default Welcome