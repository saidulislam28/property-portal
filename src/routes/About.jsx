import PageTitle from "../component/PageTitle";
import 'animate.css';




const About = () => {
  return (
    <div>
       <PageTitle title="pPortal-about"></PageTitle>
       <h1 className="animate__animated animate__backInUp text-5xl">An animated element</h1>

       <section className="bg-blue-600 2xl:py-24 2xl:bg-white">
    <div className="px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div>
                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Use mobile app for better performance</h2>
                    <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                    <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                        
                    </div>
                </div>

                <div className="relative px-12">
                    <svg className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-yellow-300 w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <img className="relative w-full max-w-xs mx-auto -mb-60 lg:-mb-64" src="https://images.unsplash.com/photo-1691524711418-53acf98c84fa?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

       
    </div>
  );
};

export default About;