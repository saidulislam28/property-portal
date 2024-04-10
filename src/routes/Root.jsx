import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
  </div>

      
  );
};

export default Root;






