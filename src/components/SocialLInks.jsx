import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineMail } from "react-icons/ai";

import { RiContactsFill } from "react-icons/ri";

const SocialLInks = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-[35%]  rounded-r-xl left-0">
      <ul className="flex flex-col  ">
        <li className=" w-40 h-14 rounded-tr-lg flex  px-4 justify-between ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500 items-center ">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkedIn <AiFillLinkedin size={30} />
            </>
          </a>
        </li>
        <li className=" w-40 h-14  flex  px-4 justify-between ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500 items-center ">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Github <AiFillGithub size={30} />
            </>
          </a>
        </li>
        <li className=" w-40 h-14  flex  px-4 justify-between ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500 items-center ">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Mail <AiFillMail size={30} />
            </>
          </a>
        </li>
        <li className=" w-40 h-14 rounded-br-lg flex  px-4 justify-between ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500 items-center ">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Resume <RiContactsFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLInks;
