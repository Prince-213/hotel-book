import React from "react";
import BookButton from "../_ui/book_button";
import Image from "next/image";
import pic from "@/lib/assets/mp-fV2dM2WvKvE-unsplash.jpg";
import Testimonial from "../_ui/testimonial";
import Experience from "../_ui/experience";

const Page = () => {
  return (
    <div className=" w-full">
      <main className=" w-full h-[80vh] lg:h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className=" w-full h-full flex items-center justify-center">
          <div className=" w-[80%] lg:w-[55%] mx-auto space-y-6 flex flex-col items-center">
            <h1 className=" text-4xl leading-normal lg:text-[3.6rem] text-center">
              Thousands of happy clients from all around the world
            </h1>
            <p className=" text-[#5b6269] text-[1rem] text-center">
              Experience the comfort at the next level and have fun staying at
              our property. Luxury, minimalist approach and downtown location.
            </p>
            <BookButton />
          </div>
        </div>
        <div className=" hidden lg:block w-full h-full relative">
          <Image
            src={pic}
            fill
            alt=""
            className=" object-cover object-center"
          />
        </div>
      </main>
      <Testimonial />
      <Experience />
    </div>
  );
};

export default Page;
