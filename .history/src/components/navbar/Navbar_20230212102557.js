import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <ul className="flex text-sm font-semibold gap-x-8">
        <li>
          <Link to="/">Shops</Link>
        </li>
        <li>
          <Link to="/">Offers</Link>
        </li>
        <li>
          <Link to="/">Warranty</Link>
        </li>
        <li>
          <Link to="/">Medical</Link>
        </li>
        <li>
          <Link to="/">Info</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="ml-auto">
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.153 15.747L12.8535 11.5161C13.9794 10.2929 14.6712 8.67509 14.6712 6.89489C14.6707 3.0867 11.534 0 7.66437 0C3.79477 0 0.658081 3.0867 0.658081 6.89489C0.658081 10.7031 3.79477 13.7898 7.66437 13.7898C9.3363 13.7898 10.8698 13.2115 12.0743 12.2501L16.3905 16.4976C16.6008 16.7047 16.9422 16.7047 17.1525 16.4976C17.3633 16.2904 17.3633 15.9541 17.153 15.747ZM7.66437 12.729C4.39027 12.729 1.7361 10.117 1.7361 6.89489C1.7361 3.67281 4.39027 1.06082 7.66437 1.06082C10.9385 1.06082 13.5926 3.67281 13.5926 6.89489C13.5926 10.117 10.9385 12.729 7.66437 12.729Z"
            fill="#414141"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
