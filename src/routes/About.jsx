import PageTitle from "../component/PageTitle";
import "animate.css";

const About = () => {
  return (
    <div className="shadow-xl rounded-xl min-h-[calc(100vh-410px)]">
      <PageTitle title="pPortal-about"></PageTitle>
      <h1 className="animate__animated animate__backInUp text-5xl text-center my-5 font-extrabold text-orange-400">
        About Me
      </h1>

      <div className=" w-full lg:w-[50%] mx-auto border border-blue-600 rounded-xl flex flex-col justify-center items-center p-5"> 

       <div className="rounded-full">
         <img className="rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocIhE5XR83OwcqOv5Tu9PUaeEMnEdhgABvUrfrJ8ptT9YXE3fMU=s96-c" alt="" />
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
          <span className="font-semibold text-orange-600">+8001639279028</span>
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
  );
};

export default About;
