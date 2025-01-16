import React from 'react'
import Menu from "../../components/Menu/Menu.jsx";

function Welcome() {
  return (
    <>
      <Menu />
      <h1 className="font-medium text-[20px] ml-6 mt-6">Welcome to my first page using <i className="text-lime-500">react router</i>!</h1>
    </>
  )
}

export default Welcome