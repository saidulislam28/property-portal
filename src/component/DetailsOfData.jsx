import {useParams} from "react-router-dom";
const DetailsOfData = () => {
const {id} = useParams();
  return (
    <div>
      <h2 className="text-5xl">data details {id}</h2>
    </div>
  );
};

export default DetailsOfData;