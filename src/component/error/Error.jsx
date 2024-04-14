import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="space-y-5 text-center  mt-10 lg:mt-80">
      <h1 className="text-3xl lg:text-9xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">Oops!</h1>
      <p className="font-bold text-4xl">404</p>
      <p className="font-bold text-2xl">Page Not found</p>
      <Link to="/"><button className="btn btn-error text-white mt-5">Back to Homepage</button></Link>
      
    </div>
  );
};

export default Error;