import Marquee from "react-fast-marquee";

const SlidingMarque = () => {
  return (
    <div className="container mx-auto">
      <Marquee className="bg-black text-white rounded-xl" speed={150} pauseOnHover={true}>
        <div className="mr-10">
         New Season , New places : You cant miss.
        </div>
        <div className="mr-10 text-green-500 font-bold">
          Prime time to buy one get one free
        </div>
        <div className="mr-10">
        Limited time offer

        </div>
        
      </Marquee>
    </div>
  );
};

export default SlidingMarque;
