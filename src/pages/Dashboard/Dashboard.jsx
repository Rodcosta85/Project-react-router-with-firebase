import PrivateRoute from "../../components/PrivateRoute/index.jsx";

function Dashboard() {

  return (
    <div className="hidden">
      <PrivateRoute />
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <h1 className="font-semibold text-[20px] ml-6 mt-6">
          Hey you made it to the dashboard!
        </h1>
        <h2 className="font-medium text-[15.5px] ml-6 mt-4 text-center">
          Here we have a list of users that have already signed up for our
          service:
        </h2>
      </div>
    </div>
  );
}


export default Dashboard
