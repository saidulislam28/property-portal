import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Navbar = () => {

  const {user , logOut} = useContext(AuthContext);

const handleLogOut = () =>{
logOut()
.then()
.catch()
}



const navLinks = ( <>
      <li>
        <NavLink to="/"
         style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/about"
         style={({ isActive }) => ({
          color: isActive ? '#fff' : '',
          background: isActive ? '#7600dc' : '',
        })}>About Us</NavLink>
      </li>
      <li>
        <NavLink to="/profile"
         style={({ isActive }) => ({
          color: isActive ? '#fff' : '',
          background: isActive ? '#7600dc' : '',
        })}>Update Profile</NavLink>
      </li>
    </>
  );




  return (
    <div className="navbar bg-base-100  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a>
          {" "}
          <span className="text-lg md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
            PropertyPortal
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
      
      {
        user ?
        <div className="flex items-center">
          <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar mr-4">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
        </div>
        <button onClick={handleLogOut} className="btn btn-primary">Logout</button>
        </div>
     
        :
        
        <Link to="/login"><p className="btn">Login</p></Link>
      }
      
      
      
      
      </div>
    </div>
  );
};

export default Navbar;
