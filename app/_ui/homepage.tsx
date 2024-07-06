import React from "react";
import pic from "@/lib/assets/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";
import BookButton from "@/app/_ui/book_button";
import Image from "next/image";

const Homepage = () => {
  return (
    <main className=" w-full h-screen grid grid-cols-2">
      <div className=" w-full h-full flex items-center justify-center">
        <div className=" w-[55%] mx-auto space-y-6 flex flex-col items-center">
          <h1 className=" text-[3.6rem] text-center">
            Perfect stay for your perfect vacation
          </h1>
          <p className=" text-[#5b6269] text-[1rem] text-center">
            Experience the comfort at the next level and have fun staying at our
            property. Luxury, minimalist approach and downtown location.
          </p>
          <BookButton />
        </div>
      </div>
      <div className=" w-full h-full relative">
        <Image src={pic} fill alt="" className=" object-cover object-center" />
      </div>
    </main>
  );
};

export default Homepage;
