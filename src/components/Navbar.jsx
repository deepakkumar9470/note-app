import React, { useState, useEffect } from "react";
import logo from "../assets/notepad.png";
import plus from "../assets/plus.svg";
import avatar from "../assets/avatar.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full  z-999 flex items-center justify-evenly md:justify-between px-10 py-3 bg-lightPrimary fixed top-0">
      <div className="flex items-center  gap-10 md:gap-6">
        <div className="w-12 h-12 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="note" />
          </Link>
        </div>

        <div className="hidden md:block md:w-[500px]">
          <input
            className="w-full px-10 py-2 rounded-full border outline-none 
                      bg-gray-100 placeholder:text-gray-600"
            type="text"
            placeholder="Search Note.."
          />
        </div>
        <div className="flex w-14 h-14 md:w-10 md:h-10 items-center gap-2 cursor-pointer">
          <img src={plus} alt="plus" />

          <Link to="/addnote" className="text-xl text-white font-medium">
            Add
          </Link>
        </div>
      </div>

      <div className="hidden md:block cursor-pointer bg-gray-200 rounded-full p-2">
        <img className="w-10 h-10" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
