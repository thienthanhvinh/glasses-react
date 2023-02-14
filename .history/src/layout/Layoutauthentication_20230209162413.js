import React from "react";
import { Link } from "react-router-dom";

const LayoutAuthentication = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full max-w-[500px] bg-red-400 shadow-md mx-auto">
        <h2>Đăng nhập</h2>
        <Link to="/" className="inline-block mb-10">
            <img src="/" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default LayoutAuthentication;
