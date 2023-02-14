import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BsFillSunFill } from "react-icons/bs";
import {FaMoon} from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

const LayoutAuthentication = ({ heading, question, children }) => {
  const {isDarkMode, toggleDarkMode} = useDarkMode;
  const [theme, setTheme] = useState();
  useEffect(() => {
    
  })
  return (
    <div className="w-full h-screen bg-white p-12">
      <div className="mb-6 flex justify-between items-center">
        <Link to="/" className="inline-block">
          <img
            src="/Polygon.png"
            alt=""
            className="w-[70px] h-auto object-cover"
          />
        </Link>
        <label htmlFor="toggle" className="cursor-pointer toggle-switch inline-block">
        <input
          type="checkbox"
          name=""
          id="toggle"
          className="darkmode-input hidden"
        />
        <div className="w-[60px] h-8 border border-gray-300 rounded-full flex items-center">
          <div className="darkmode-spinner transition-all duration-500">
             <BsFillSunFill size={"24px"} color={"#e9c46a"} onClick={() => toggleDarkMode(!isDarkMode)}></BsFillSunFill>
          </div>
        </div>
        </label>
       
      </div>
      <div className="w-full max-w-[550px] bg-white-400 shadow-md rounded-lg mx-auto px-12 py-5">
        <h2 className="text-center text-[20px] font-semibold mb-1">
          {heading}
        </h2>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  question: PropTypes.string,
  children: PropTypes.node,
};

export default LayoutAuthentication;
