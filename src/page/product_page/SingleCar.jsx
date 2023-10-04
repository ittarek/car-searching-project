import { HiOutlineUsers } from "react-icons/hi";
import {
  HiDevicePhoneMobile,
  HiLifebuoy,
  HiOutlineLifebuoy,
  HiOutlineHeart,
} from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

import { EffectFade, Pagination } from "swiper/modules";

import "swiper/css/pagination";

const SingleCar = ({ car }) => {
  const {
    id,
    image1,
    image2,
    image3,
    carName,
    productionYear,
    seatingCapacity,
    technology,
    engineTechnology,
    kmPerLiter,
    transmission,
    rentPricePerMonth,
  } = car || [];

  return (
    <div className="card shadow-xl p-3 bg-[#e4e7ec] w-full rounded-xl">
      <figure>
        <Swiper
          effect={"fade"}
          pagination={{
            clickable: true,
            // el: ".swiper-pagination",
          }}
          modules={[Pagination, EffectFade]}
          className="mySwiper"
        >
          mySwiper.destroy();
          <SwiperSlide>
            {" "}
            <img
              src={image1}
              alt="Cars"
              className="h-80 w-full rounded-lg  hover:scale-110 
              transition  image-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={image2}
              alt="Cars"
              className="h-80 w-full rounded-lg image-fluid  hover:scale-110 
              transition "
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              src={image3}
              alt="Cars"
              className="h-80 w-full rounded-lg image-fluid  hover:scale-110 
              transition   "
            />
          </SwiperSlide>
        </Swiper>
      </figure>

      <div className="card-body ">
        {/* top item */}
        <div className="card-title flex justify-between items-center ">
          <h2 className="font-bold ">{carName}</h2>
          <h3 className="border-2 border-[#4999ED]  px-2 border-dashed  rounded-full ">
            {productionYear}
          </h3>
        </div>
        {/* car summary */}
        <div className="flex justify-between items-center w-[250px] ">
          {/* 1st div */}
          <div className="">
            <p className="flex items-center gap-2 mb-5 text-gray-500 ">
              <HiOutlineUsers className="text-[#4999ED]" />
              <span className="font-semibold "> {seatingCapacity} People</span>
            </p>
            <p className="flex items-center gap-2 mb-5 text-gray-500 ">
              <HiLifebuoy className="text-[#4999ED]" />
              <span className="font-semibold  ">{kmPerLiter}km/1-litre</span>
            </p>
          </div>
          {/* 2nd div */}
          <div className=" ">
            <p className="flex items-center gap-2 mb-5 text-gray-500 ">
              {" "}
              <HiDevicePhoneMobile className="text-[#4999ED] " />
              <span className="font-semibold ">{engineTechnology}</span>
            </p>
            <p className="flex items-center gap-2 mb-5 text-gray-500 ">
              {" "}
              <HiOutlineLifebuoy className="text-[#4999ED]" />
              <span className="bg-transparent font-semibold">
                {transmission}
              </span>
            </p>
          </div>
        </div>
        <div className="border border-1 border-solid border-gray-300"></div>

        <div className="flex bg-transparent  justify-between items-center ">
          {/* 1st div */}
          <div className="bg-transparent">
            <h2 className=" bg-transparent">
              {" "}
              <span className="text-black font-semibold text-2xl bg-transparent">
                ${rentPricePerMonth}{" "}
              </span>{" "}
              <span className="bg-transparent">/month</span>
            </h2>
          </div>

          {/* 2nd div */}
          <div className=" flex items-center gap-3 bg-transparent">
            <span className="p-2 rounded-[50px] bg-[#b6cfea]">
              {" "}
              <HiOutlineHeart className="text-[#2878ce] text-xl bg-transparent  " />
            </span>{" "}
            <button className="btn btn-sm bg-[#4999EC] text-white hover:text-black">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
