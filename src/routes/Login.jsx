import { useContext } from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {

  const {LogIn} = useContext(AuthContext);
  const location= useLocation();
  const navigate = useNavigate();

const handleLogin = e =>{
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const email = form.get('email')
  const password = form.get('password')

  LogIn(email, password)
  .then(result =>{
    console.log(result.user);
    navigate(location?.state ? location.state : '/');
  })
  .catch(error =>{
    console.error(error);
  })

}

  return (
    <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 border rounded-2xl p-2 mx-auto my-10">
      <p className="text-3xl text-center mb-4 font-bold text-primary underline">Please Login</p>
    
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email"     placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
    <p>Do not have an account ? please <Link className="text-primary underline text-center" to="/register"> Register</Link> </p>
  </form>
  );
};

export default Login;