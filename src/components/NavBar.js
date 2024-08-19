import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai'; 
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-primary text-tertiary lg:px-12 px-3 flex items-center w-full justify-between h-24 font-['Kalnia',_serif]">
      <div className="logo bg-primary lg:h-36 md:w-20 md:h-20 w-16 h-16 lg:w-36 lg:p-2 rounded-full lg:translate-y-1/4" onClick={()=>navigate('/')}>
        <img src={logo} alt="" className="rounded-full" />
      </div>
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
           <GiHamburgerMenu size={30} />
        </button>
      </div>
      <div className={`${isOpen ? 'w-full' : "w-0"}  absolute top-0 left-0 h-screen bg-primary transition-all duration-300`}>
        <div className={`flex flex-col items-center justify-center h-full gap-4 ${isOpen ? 'block' : "hidden"}`}>
          <NavLink to="/menu" className="text-xl font-semibold hover:opacity-50 uppercase">
            Menu
          </NavLink>
          <NavLink to="/" className="text-xl font-semibold hover:opacity-50 uppercase">
            Home
          </NavLink>
          <NavLink to="/" className="text-xl font-semibold hover:opacity-50 uppercase">
            Contact Us
          </NavLink>
          <button className="bg-secondary text-tertiary px-4 py-2 rounded-full font-semibold hover:opacity-50">
            Book for Party
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="absolute right-5 top-5">
            <AiOutlineClose size={30} />
          </button>
        </div>
      </div>
      <div className="lg:flex hidden gap-4 ">
        <NavLink to="/menu" className="text-xl font-semibold hover:opacity-50 uppercase">
          Menu
        </NavLink>
        <NavLink to="/" className="text-xl font-semibold hover:opacity-50 uppercase">
          Home
        </NavLink>
        <NavLink to="/" className="text-xl font-semibold hover:opacity-50 uppercase">
          Contact Us
        </NavLink>
      </div>
      <div className="hidden lg:block">
        <button className="bg-secondary text-tertiary px-4 py-2 rounded-full font-semibold hover:opacity-50">
          Book for Party
        </button>
      </div>
    </div>
  );
};

export default NavBar;
