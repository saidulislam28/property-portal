import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../component/PageTitle";

const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

const Register = () => {


const {registerUser , updateProfileInfo} = useContext(AuthContext);


  const handleRegister = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const password = form.get('password');
    const photo = form.get('photo');
   
    
    if(!uppercaseRegex.test(password)){
      return alert('boro de')
    }
    if(!lowercaseRegex.test(password)){
      return alert('choto de')
    }
    if(password.length <6){
      return alert('6 da hoy nai ')
  
    }
    
   
    
    registerUser(email,password)
    .then(result =>{
      toast("Successfully Registered")
      console.log(result.user);
      updateProfileInfo(name, photo)
      .then()
      .catch(error =>{
        console.log(error);
      })
    })
    .catch(error => {
      toast.error("Something Went wrong")
      console.log(error);
    })
    e.target.reset();
    
    
    console.log(email,password, photo, name);

  
  }


  return (
    <form
     onSubmit={handleRegister}
      className=" md:w-3/4 lg:w-1/2 border rounded-2xl p-4 mx-auto my-10"
    >
       <PageTitle title="pPortal-register"></PageTitle>
      <p className="text-3xl text-center mb-4 font-bold text-primary underline">
        Please Register
      </p>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input
          type="text"
          name="photo"
          placeholder="Photo url"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
      <p>
        Do not have an account ? please 
        <Link className="text-primary underline text-center font-semibold" to="/login">  Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
