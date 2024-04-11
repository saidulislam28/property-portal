import { Link } from "react-router-dom";

const SingleData = ({data}) => {
  return (
    <div className="card bg-gray-600 shadow-xl text-white">
    <figure className="px-10 pt-10">
      <img src={data.image} alt="Shoes" className="rounded-xl h-36" />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-orange-300 ">{data.estate_title}</h2>
      <p className="text-orange-100">{data.description.slice(0, 60)}</p>
      <p className="font-bold">Price : <span className="text-orange-300 font-semibold">{data.price}</span> </p>
      <div className="card-actions">
        <Link to={`/data/${data.id}`} className="btn btn-error text-orange-100">View Property</Link>
      </div>
    </div>
  </div>
  );
};

export default SingleData;