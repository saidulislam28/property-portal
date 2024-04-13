import {useLoaderData,useParams} from "react-router-dom";
import PageTitle from "./PageTitle";

const DetailsOfData = () => {

  
   
    const {id,estate_title,segment_name,description,price,status,location,facilities,image} = useParams();

    console.log(segment_name, description);
  return (
    <div>
       <PageTitle title="pPortal-details"></PageTitle>
       <h1>{description}</h1>
       <h1 className="text-8xl">{id}</h1>
       
       

      
    </div>
  );
};

export default DetailsOfData;