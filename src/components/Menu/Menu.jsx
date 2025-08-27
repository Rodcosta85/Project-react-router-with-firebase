import { Link, useNavigate } from "react-router-dom";

{
  /* <li onClick={() => navigate("/login")}>
        {/* dá no mesmo que usar o link, mas ai precisa passar dentro do onClck do elemento */
}

function Menu() {
  

  return (
    <div className="w-[100vw] h-16 pl-2 bg-blue-500 flex flex-row items-center justify-center">
      <ul className="flex flex-row ml-5">
        <li className="mr-7 font-semibold hover:text-white">
          <Link to="/">Welcome</Link>
        </li>
        {/* <li className="mr-7 font-semibold hover:text-white">
          <Link to="/home">Home</Link>
        </li> */}
        <li className="mr-7 font-semibold hover:text-white">
          <Link to="/signup">Sign up</Link>
        </li>
        <li className="mr-7 font-semibold hover:text-white">
          <Link to="/login">Login</Link>
        </li>
        {/* <li className="mr-7 font-semibold hover:text-white">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="mr-7 font-semibold hover:text-white">
          <Link to="/update+info">Update your info</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Menu;
