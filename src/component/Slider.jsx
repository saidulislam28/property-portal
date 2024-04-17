import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slider = () => {
  return (
    <div className="flex flex-col justify-center items-center">
       <h1 className="font-extrabold  text-3xl lg:text-5xl text-center my-10">Celebrating Our Success. <span className="font-normal text-lg">(slide to see)</span> </h1>

    <div className="h-[300px] lg:h-[500px] w-full lg:w-[500px] ">
     
     

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1172935536/photo/business-people-smile-and-raise-hands-up-feeling-happy-complete-finish-job-teamwork.jpg?s=1024x1024&w=is&k=20&c=o9dZkMF6DqpXkYGM5zqqNgDyitHm-f3v0dxRDeCyaFk="
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/978531572/photo/applauze.jpg?s=2048x2048&w=is&k=20&c=2QQgo6xGEEgNgIbs-FTpkpIboxPXOsY50LPLr8xOsVU="
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1249117045/photo/silver-trophy-competition-in-the-dark-on-the-abstract-blurred-light-background-with-copy.jpg?s=1024x1024&w=is&k=20&c=RAM7c5BkOJwzF8WkQ77QL7cs8ve3hwZMn3gL_MtrBsQ="
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1852326509/photo/business-people-cheering-and-applauding-in-meeting-room.jpg?s=1024x1024&w=is&k=20&c=__8LOEqsVtg-CZA9AGIkmbWZCQjAYnbx7DUnr-RVHfo="
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>

  
  );
};

export default Slider;
