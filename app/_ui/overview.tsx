import React from "react";

import pic1 from "@/lib/assets/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";
import pic2 from "@/lib/assets/li-yang-a8iCZvtrHpQ-unsplash.jpg";
import Image from "next/image";

const Overview = () => {
  return (
    <div className=" w-full py-40 ">
      <div className=" w-[65%] mx-auto">
        <div className=" space-y-10 mb-32">
          <p className=" text-center font-medium text-griy">OVERVIEW</p>
          <h1 className=" text-[2.6rem] lg:max-w-[60%] font-medium mx-auto text-center">
            The location you always needed at the right time with special perks
          </h1>
        </div>
        <div className=" w-full flex flex-col space-y-20">
          <div className=" w-full h-[85vh] grid lg:grid-cols-2 space-x-32">
            <div className=" w-full h-full  rounded-tl-[50%] overflow-hidden rounded-tr-[50%] relative">
              <Image
                src={pic1}
                alt=""
                fill
                className=" object-cover object-center"
              />
            </div>
            <div className=" flex flex-col items-center text-center justify-center w-full h-full space-y-6 max-w-[90%] mx-auto">
              <h4 className=" text-lg uppercase text-griy font-medium">
                green spaces
              </h4>
              <h1 className=" font-medium text-5xl  mx-auto leading-normal">
                Unique courtyard design & minimal
              </h1>
              <p className=" text-griy text-lg  mx-auto">
                Meet the minimal and the most welcome look and feel that you can
                breath, live and enjoy with your family and friends together.
              </p>
              <button className=" py-5 px-10 text-base hover:shadow-lg duration-150 transition-all  border-2 border-black rounded-full">
                View More
              </button>
            </div>
          </div>
          <div className=" w-full h-[85vh] grid  lg:grid-cols-2 space-x-32">
            <div className=" flex flex-col items-center text-center justify-center w-full h-full space-y-6 max-w-[90%] mx-auto">
              <h4 className=" text-lg uppercase text-griy font-medium">
                design
              </h4>
              <h1 className=" font-medium text-5xl  mx-auto leading-normal">
                Explore new possibilities to relax
              </h1>
              <p className=" text-griy text-lg  mx-auto">
                Meet the minimal and the most welcome look and feel that you can
                breath, live and enjoy with your family and friends together.
              </p>
              <button className=" py-5 px-10 text-base hover:shadow-lg duration-150 transition-all  border-2 border-black rounded-full">
                View More
              </button>
            </div>
            <div className=" w-full h-full  rounded-tl-[50%] overflow-hidden rounded-tr-[50%] relative">
              <Image
                src={pic1}
                alt=""
                fill
                className=" object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
