import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

import { Navigate,useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

  const location = useLocation()

  const {user,loading} = useContext(AuthContext);

  if(loading){
    return alert('not possible')
  }

  if(user){
    return children;
  }
  
  return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutes;