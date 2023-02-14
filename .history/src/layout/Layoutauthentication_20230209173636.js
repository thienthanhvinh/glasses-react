import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LayoutAuthentication = ({heading, question, children}) => {
  return (
    <div className="w-full h-screen bg-white p-12">
      <Link to="/" className="inline-block mb-8">
        <img src="/Polygon.png" alt=""  className="w-[70px] h-auto object-cover"/>
      </Link>
      <div className="w-full max-w-[550px] bg-white-400 shadow-md rounded-lg mx-auto px-12 py-5">
        <h2 className="text-center text-[20px] font-semibold mb-1">{heading}</h2>
        {children}
      </div>
    </div>
  );
};


LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    question: PropTypes.string,
    children: PropTypes.node,
}

export default LayoutAuthentication;
