import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
import "../index.css";
import "../App.css";
const TopNav = () => {
  const [sideNav, setsideNav] = useState(false);
  const menuItems = [
    
    { icon: BsPerson, title: "My Account" },
    { icon: TbTruckReturn, title: "Delivery" },
    { icon: MdOutlineFavorite, title: "My Favourite" },
    { icon: FaGoogleWallet, title: "My Wallet" },
    { icon: MdHelp, title: "Help" },
];
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer " onClick={() => setsideNav(!sideNav)}>
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Yum
          <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 ">Free</p>
          <p className="p-2">Delivery</p>
        </div>
      </div>
      <div className="bg-gray-200  rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="w-full p-2 bg-transparent focus:outline-none "
          type="text"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full outline-none border-none">
        <BsFillCartFill /> cart
      </button>
      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>setsideNav(false)}></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "w-[300px] bg-white left-0 top-0 h-screen z-10 fixed duration-300"
            : "w-[300px] bg-white left-[-100%] top-0 h-screen z-10 fixed duration-500"
        }
      >
        <AiOutlineClose
          className="absolute top-4 right-4 cursor-pointer"
          size={25}
          onClick={() => setsideNav(!sideNav)}
        />
        <h2 className="p-4 text-2xl">
          Yum <span className="text-orange-700 font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-900">
            {menuItems.map((item) => (
              <li className="flex items-center text-xl py-4 cursor-pointer">
                {
                  <item.icon
                    size={25}
                    className="mr-4 bg-black text-white rounded-full"
                  />
                }
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
