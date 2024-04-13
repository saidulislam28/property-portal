import Banner from "../component/Banner";
import { useLoaderData } from "react-router-dom";
import SingleData from "../component/SingleData";
import PageTitle from "../component/PageTitle";

const Home = () => {
  const aData = useLoaderData();

  return (
    <div>
       <PageTitle title="pPortal-home"></PageTitle>

      <Banner></Banner>

      <div>
        <h1 className="text-5xl my-10 text-center font-extrabold">
          We have many Facility
        </h1>
        <p className="text-center mb-5 font-bold opacity-50">
          From glam vibes to laid comfort, <br /> these all have one thing in
          common-and that’s amazing value.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  container mx-auto p-2">
        {aData.map((data) => (
          <SingleData key={data.id} data={data}></SingleData>
        ))}
      </div>
    </div>
  );
};

export default Home;
