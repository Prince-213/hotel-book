import Link from "next/link";
import React from "react";
import pic1 from "@/lib/assets/li-yang-a8iCZvtrHpQ-unsplash.jpg";
import Image from "next/image";
import { signup } from "../_actions/actions";
import SignUpButton from "./_ui/button";

const Page = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 mt-[10vh] pb-10">
      <div className=" w-full h-full flex flex-col  justify-center">
        <div className=" w-[90%] lg:w-[50%] mx-auto">
          <div className=" w-full mx-auto text-black space-y-5 mb-10 text-left">
            <h1 className=" text-[2.6rem] font-medium mx-auto  ">
              Create an account
            </h1>
            <p className=" font-medium ">Sign up to book a service.</p>
          </div>
          <div className="mt-10 s">
            <form action={signup} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className=" w-full p-4 rounded-xl border-2 bg-white  text-black"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className=" w-full p-4 rounded-xl border-2 bg-white  text-black"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Create a password"
                    className=" w-full p-4 rounded-xl border-2 bg-white  text-black"
                  />
                </div>
              </div>

              <div>
                <SignUpButton />
              </div>
            </form>

            <p className="mt-10 text-center text-lg text-gray-500">
              Alredy have an account?{" "}
              <Link
                href="/signin"
                className="font-semibold leading-6 underline text-gray-900 hover:text-gray-800"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block w-full h-full pt-[10vh] rounded-lg bg-gray-200">
        <div className=" w-[75%] mx-auto h-full  rounded-tl-[50%] overflow-hidden rounded-tr-[50%] relative">
          <Image
            src={pic1}
            alt=""
            fill
            className=" object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
