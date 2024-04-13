import {useParams} from "react-router-dom";
import PageTitle from "./PageTitle";
// import SingleData from "./SingleData";
const DetailsOfData = () => {
const {id} = useParams();
  return (
    <div>
       <PageTitle title="pPortal-details"></PageTitle>



      <h2 className="text-5xl">data details {id}</h2>
      {/* <SingleData></SingleData> */}
    </div>
  );
};

export default DetailsOfData;