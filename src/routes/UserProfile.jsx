import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PageTitle from "../component/PageTitle";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user} = useContext(AuthContext);

 

  return (
    <div className="border-2 border-violet-700 rounded-xl mt-5 lg:mt-10 p-5 lg:p-10 w-full lg:w-96 mx-auto">
      <PageTitle title="pPortal-profile"></PageTitle>
      <h1 className="font-bold text-4xl underline text-primary text-center my-5">My Profile</h1>

      <img src={user.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
      

      

        <h1 className="text-3xl font-bold text-center">{user.displayName}</h1>
        
        <h2 className="my-5 font-semibold text-center">
        Email : {user.email}</h2>
        
       <h1>If you want to update your profile information please go to <span className="font-bold">update profile</span> or click <Link to="/profile" className="underline font-semibold hover:cursor-pointer">Update</Link> </h1>
       
      
    </div>
  );
};

export default UserProfile;
