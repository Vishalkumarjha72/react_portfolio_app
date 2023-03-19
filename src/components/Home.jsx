import React from "react";
import image from "../assets/image.png";
import { AiOutlineRight } from "react-icons/ai";

const Home = () => {
  return (
    <div id="home" className="h-screen flex w-full bg-gradient-to-b from-black via-black to-gray-800 items-center justify-between">
      <div className="flex flex-col-reverse md:flex-row md:items-center w-full justify-center ">
        <div className="flex flex-col justify-center gap-4 md:w-[30%] h-[60%] px-16 md:m-0 items-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold ">
            I'm a Full Stack Developer
          </h1>
          <p className="text-gray-500 text-sm  md:text-base text-start text-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          
          <a href="#portfolio" className= "group text-white my-4 flex items-center justify-center h-12 w-1/2 md:w-[50%]  rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold gap-2">
            Portfolio
            <AiOutlineRight className="text-white pt-1 text-xl group-hover:rotate-90 duration-300 pl-1" />
          </a>
          
        </div>
        <div className="text-xl items-end mt-0 sm:mt-72 md:mt-0">
          <img src={image} alt="image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
