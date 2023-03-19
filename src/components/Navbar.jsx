import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { Link } from "react-scroll";






const Navbar = ({menu, setMenu}) => {
  
  const navLink = [
    {
      id: 1,
      text: "Home",
      link: "#home",
    },
    {
      id: 2,
      text: "About",
      link: "#about",
    },
    {
      id: 3,
      text: "Portfolio",
      link: "#portfolio",
    },
    {
      id: 4,
      text: "Experience",
      link: "#experience",
    },
    {
      id: 5,
      text: "Contact",
      link: "#contact",
    },
  ];

  return (
    <>
    <div className="w-full fixed bg-black">
      <div className="flex text-white px-6 justify-between items-center py-4">
        <div className= 'text-4xl font-logo'>
          <p>Vishal</p>
        </div>

        <div className=" hidden md:flex gap-8 ">
          {navLink.map((user) => (
            <a key={user.id} href={user.link}  className="text-gray-400 cursor-pointer hover:scale-110 duration-300 hover:text-white">
              {user.text}
            </a>
          ))}
        </div>

        <div
          className="md:hidden text-3xl text-gray-400 cursor-pointer bg-black hover:scale-110 duration-300 hover:text-white"
          onClick={() => setMenu((prev)=>!prev)}
          >
          {menu ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </div>
      
    </div>
    {menu && (
      

      <div className="flex flex-col  fixed top-14 h-screen w-full items-center bg-gradient-to-b from-black to-slate-800 justify-center text-4xl gap-11 bg-black ">
        {navLink.map((user) => (
          <a key={user.id} href={user.link} className="text-gray-500 hover:scale-110 duration-200 hover:text-white first-letter:" onClick={()=>setMenu(!menu)}>
            {user.text}
          </a>
        ))}
          
          <a href='#socials' className="text-gray-500 hover:scale-110 duration-200 hover:text-white first-letter:" onClick={()=>setMenu(!menu)}>
            Socials
          </a>
         
        </div>
    
    )}
    </>
  );
};

export default Navbar;
