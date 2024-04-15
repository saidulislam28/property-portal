import { useLoaderData, useParams } from "react-router-dom";
import PageTitle from "./PageTitle";
import 'animate.css';

const DetailsOfData = () => {
  const allData = useLoaderData();
  console.log(allData);

  const { id } = useParams();

  const idInteger = parseInt(id);

  const data = allData.find((data) => data.id === idInteger);

  const facilityList = data.facilities;
  const aFacility = facilityList.map((facility, ind) => <li key={ind}> {facility} </li> )

  console.log(facilityList);

  

  const {
    estate_title,
    segment_name,
    description,
    price,
    area,
    status,
    location,
     image,
  } = data;

  return (
    <div>
      <PageTitle title="pPortal-details"></PageTitle>

      <div className=" mt-5 lg:mt-20 animate__animated animate__backInDown">
        <h2 className="text-4xl  font-bold text-center">
          Details of: <br />
          <span className="text-green-400 ">{estate_title}</span>
        </h2>
        <div className="border p-5 mt-10 rounded-xl flex flex-col lg:flex-row justify-around items-center gap-4 container mx-auto">
          <div className="  rounded-xl w-full lg:w-[40%]">
            <img className="rounded-xl animate__animated animate__backInDown" src={image} alt="" />
          </div>
          <div className="p-5 w-full lg:w-[60%]"> 
            <h1 className="text-3xl font-bold">
              {<span className="">{estate_title}</span>}
            </h1>
            <div className="divider"></div>
            
            
            <div className="flex gap-8 items-center ">
            <h2 className="font-bold">
              Segment : {segment_name}</h2>
            
            <h2 className="font-bold"> status:  {status}</h2>
            </div>
            <div className="divider"></div>
            <div className="flex items-center gap-8">
            <h4 className="font-bold">   Location: {location}</h4>
            <h1 className="font-bold">Area :
              {<span className=""> {area}</span>}
            </h1>

            </div>
            <div className="divider"></div>

            <h4 className="font-semibold">
              Price :
              <span className="font-bold">    {price}</span>
            </h4>
            
            <div className="divider"></div>
            <ol className="flex list-none hover:list-disc justify-around mt-5">
              {aFacility}
            </ol>
            <div className="divider"></div>
            <p>
              <span className="font-bold">Details :</span> {description}
            </p>
            

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfData;
// rounded-xl p-5 mt-10 flex flex-col lg:flex-row justify-around items-center 