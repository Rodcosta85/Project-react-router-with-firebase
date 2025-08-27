import PrivateRoute from '../../components/PrivateRoute/index.jsx'

function Home() {
  return (
    <>
      <PrivateRoute />
      <h1 className="font-medium text-[20px] ml-6 mt-6">Home</h1>
    </>
  )
}

export default Home
