import React from "react";
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex lg:px-24 lg:py-8  p-4 justify-start items-center w-full bg-secondary text-tertiary drop-shadow-md   gap-x-8">
      <div className="">
        <img
          src={logo}
          alt="American Pizza"
          className="lg:w-32 lg:h-32 h-20 w-20  rounded-full"
        />
      </div>
      <div className="">
        <ul>
          <NavLink to="/" className="lg:text-lg text-xs block">
            Home
          </NavLink>
          <NavLink to="/menu" className="lg:text-lg text-xs">
            Menu
          </NavLink>
          <li className="lg:text-lg text-xs">Contact</li>
        </ul>
      </div>
      <div className="w-1/3">
        <p className="lg:text-lg text-xs">Brahmapur, Odisha</p>
        <p className="lg:text-lg text-xs">1234567890</p>
        {/* <p className="lg:text-lg text-xs">sairamsenapati0022@gmail.com</p> */}
      </div>
      <div className="flex-1 hidden lg:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.3491796597295!2d84.78232097509449!3d19.310648581942875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d500f4b900fad%3A0x4d7e1573361baa72!2sAmerican%20Pizzaz%20%26%20Fried%20Chicken!5e0!3m2!1sen!2sin!4v1723904486416!5m2!1sen!2sin"
          width="100%"
          height="200"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
