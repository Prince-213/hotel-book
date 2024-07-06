import React from "react";
import pic from "@/lib/assets/li-yang-a8iCZvtrHpQ-unsplash.jpg";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className=" w-full bg-black py-10 pb-20 lg:pb-10 gap-y-14">
      <h1 className=" font-semibold mb-20 text-2xl text-center text-white font-author">
        Instagram
      </h1>
      <div className=" w-[80%] mx-auto grid gap-y-3 lg:gap-x-10 grid-cols-3 lg:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className={` ${index % 2 ? " lg:-mt-12" : " lg:mt-0"} ${
              index == 1 ? " -translate-y-10 lg:translate-y-0 " : ""
            }  ${
              index == 4 ? " translate-y-10 lg:translate-y-0 " : ""
            } w-full h-[7rem] lg:h-[13rem] rounded-sm overflow-hidden relative `}
          >
            <Image
              src={pic}
              fill
              alt=""
              className=" object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
