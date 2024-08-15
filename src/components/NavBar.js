import React from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="bg-primary text-tertiary px-12 flex items-center w-full justify-between h-24 font-['Kalnia',_serif]">
      <div className="logo bg-primary h-36  w-36 p-2 rounded-full translate-y-1/4">
        <img src={logo} alt="" className="rounded-full" />
      </div>
      <div className="flex gap-4 ">
        <NavLink to="/" className="text-xl font-semibold hover:opacity-50">
          Menu
        </NavLink>
        <NavLink to="/" className="text-xl font-semibold hover:opacity-50">
          Home
        </NavLink>
        <NavLink to="/" className="text-xl font-semibold hover:opacity-50">
          About
        </NavLink>
        <NavLink to="/" className="text-xl font-semibold hover:opacity-50">
          Contact Us
        </NavLink>
      </div>
      <div className="">
        <button className="bg-secondary text-tertiary px-4 py-2 rounded-full font-semibold hover:opacity-50">
          Book for Party
        </button>
      </div>
    </div>
  );
};

export default NavBar;
