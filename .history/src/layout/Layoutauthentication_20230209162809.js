import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = ({heading}) => {
  return (
    <div className="w-full h-screen bg-white p-12">
      <Link to="/" className="inline-block mb-10">
        <img src="/Polygon.png" alt=""  className="w-[70px] h-auto object-cover"/>
      </Link>
      <div className="w-full max-w-[500px] bg-white-400 shadow-md mx-auto">
        <h2 className="">{heading}</h2>
        <p className=""></p>
      </div>
    </div>
  );
};

export default LayoutAuthentication;
