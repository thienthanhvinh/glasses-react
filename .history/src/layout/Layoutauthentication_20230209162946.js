import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LayoutAuthentication = ({heading, question, children}) => {
  return (
    <div className="w-full h-screen bg-white p-12">
      <Link to="/" className="inline-block mb-10">
        <img src="/Polygon.png" alt=""  className="w-[70px] h-auto object-cover"/>
      </Link>
      <div className="w-full max-w-[500px] bg-white-400 shadow-md mx-auto">
        <h2 className="">{heading}</h2>
        <p className="">{question}</p>
        {children}
      </div>
    </div>
  );
};


LayoutAuthentication.propTypes = {
    heading: PropTypes.string,
    
}

export default LayoutAuthentication;
