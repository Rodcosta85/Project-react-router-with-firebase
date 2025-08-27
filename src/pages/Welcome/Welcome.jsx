import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu.jsx";

function Welcome() {

  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <Menu />
      <h1 className="font-medium text-[20px] mt-6">Welcome to my first page using <i className="text-lime-500">react router</i>!</h1>
      <p>You can either <Link to="/login" class="text-blue-500 hover:font-bold">login</Link> or <Link to="/signup" class="text-blue-500 hover:font-bold">sign up</Link> if you don't have an account.</p>
    </div>
  )
}

export default Welcome