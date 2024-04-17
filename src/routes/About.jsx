import PageTitle from "../component/PageTitle";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Slider from "../component/Slider";

const About = () => {
  useEffect(() => {
    AOS.init({});

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className=" rounded-xl min-h-[calc(100vh-410px)] container mx-auto">
      <PageTitle title="pPortal-about"></PageTitle>
      <div className="flex items-center gap-4 flex-col lg:flex-row">
        <div data-aos-duration="2000"
          data-aos="slide-down"
          className=" w-full lg:w-[40%] p-4 shadow-xl rounded-xl">
          <h1 className="container mx-auto my-10 font-semibold text-lg text-center ">
            Welcome to{" "}
            <span className="text-xl text-yellow-400">Property Portal</span>,
            where innovation meets retail space solutions. We specialize in
            curating dynamic environments that bridge the gap between brands and
            consumers. With a keen understanding of the evolving retail
            landscape, we strive to redefine the shopping experience by offering
            versatile, adaptable spaces tailored to meet the diverse needs of
            modern retailers. Our team is passionate about creating immersive
            environments that not only showcase products but also tell
            compelling stories and foster meaningful connections. Whether you
            are a burgeoning startup or an established brand looking to elevate
            your presence, we are here to transform your vision into reality.
            Explore our portfolio and discover how we are shaping the future of
            retail one space at a time. Welcome to the intersection of
            creativity and commerce. Welcome to{" "}
            <span className="text-xl text-yellow-400">Property Portal</span> .
          </h1>
        </div>

        <div
          data-aos-duration="2000"
          data-aos="slide-up"
          className=" w-full lg:w-[50%] mx-auto border border-blue-600 rounded-xl flex flex-col justify-center items-center p-5">
          <h1 className="text-5xl text-center my-5 font-bold text-orange-400">
            About Me
          </h1>

          <div className="rounded-full">
            <img
              className="rounded-full"
              src="https://i.postimg.cc/HLn7GgtV/My-Profile.jpg"
              alt=""
            />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-orange-600 sm:text-4xl lg:text-5xl lg:leading-tight">
            Md Saidul Houlader
          </h2>
          <p className="mt-4 font-semibold text-black">
            Email :{" "}
            <span className="font-bold text-orange-600">
              saidulislams9028@gmail.com
            </span>
          </p>
          <p className="mt-4 text-base text-black">
            Contact/whatsapp :{" "}
            <span className="font-semibold text-orange-600">
              +8001639279028
            </span>
          </p>
          <p className="mt-4 text-base text-black">
            Role :{" "}
            <span className="font-semibold text-orange-600">
              Full Stack Web Developer
            </span>
          </p>

          <button className="btn bg-orange-300 mt-5 px-20">Download CV</button>
        </div>
      </div>
      

        




      <Slider></Slider>

     


      
    </div>
  );
};

export default About;
