import React from "react";
import { Link } from "react-router-dom";

const LayoutMenu = () => {
  return (
    <div className="py-10 px-16">
      <div className="flex items-center justify-between">
        <img src="/logo.png" alt="" className="w-[140px] h-auto object-cover" />
        <div className="flex gap-x-10">
            <span>0371525777</span>
            <Link to="/">Help</Link>
            <Link to="/sign-in">Account</Link>
        </div>
      </div>
    </div>
  );
};

export default LayoutMenu;
