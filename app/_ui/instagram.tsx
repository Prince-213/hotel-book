import React from "react";
import pic from "@/lib/assets/li-yang-a8iCZvtrHpQ-unsplash.jpg";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className=" w-full bg-black py-10 gap-y-14">
      <h1 className=" font-semibold mb-20 text-2xl text-center text-white font-author">
        Instagram
      </h1>
      <div className=" w-[80%] mx-auto grid gap-x-10 lg:grid-cols-6">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className={` ${
              index % 2 ? " -mt-12" : " mt-0"
            } w-full h-[13rem] rounded-sm overflow-hidden relative `}
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
