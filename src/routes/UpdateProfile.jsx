import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import auth from "../firebase/firebase.config";

const UpdateProfile = () => {

const {user} = useContext(AuthContext);



console.log(user); 


  return (
    <div>
      <h2 className="text-3xl">Profile</h2>
    </div>
  );
};

export default UpdateProfile; 