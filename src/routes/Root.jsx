import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { Outlet } from 'react-router-dom';
import PageTitle from "../component/PageTitle";




const Root = () => {
  return (
    <div className="space-y-8 ">
      <PageTitle title="pPortal-home"></PageTitle>
      
     <Navbar></Navbar>
     <div className="p-4">
      <Outlet></Outlet>
     </div>
      <Footer></Footer>
  </div>

      
  );
};

export default Root;






