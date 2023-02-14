import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex">
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
      <div className="ml-auto flex">
        <div className="flex gap-x-2 items-center">
          <svg
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.153 15.747L12.8535 11.5161C13.9794 10.2929 14.6712 8.67509 14.6712 6.89489C14.6707 3.0867 11.534 0 7.66437 0C3.79477 0 0.658081 3.0867 0.658081 6.89489C0.658081 10.7031 3.79477 13.7898 7.66437 13.7898C9.3363 13.7898 10.8698 13.2115 12.0743 12.2501L16.3905 16.4976C16.6008 16.7047 16.9422 16.7047 17.1525 16.4976C17.3633 16.2904 17.3633 15.9541 17.153 15.747ZM7.66437 12.729C4.39027 12.729 1.7361 10.117 1.7361 6.89489C1.7361 3.67281 4.39027 1.06082 7.66437 1.06082C10.9385 1.06082 13.5926 3.67281 13.5926 6.89489C13.5926 10.117 10.9385 12.729 7.66437 12.729Z"
              fill="#414141"
            />
          </svg>
          <span className="text-sm font-sem">Search</span>
        </div>
        <span>
          <svg
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.14414 8.80841C0.111678 6.47788 0.614575 3.72661 2.23686 2.03652C3.85628 0.349414 6.5587 -0.245866 8.98238 1.79479L8.98243 1.79483C9.37299 2.12358 9.93842 2.1081 10.3148 1.781L10.3148 1.78097C12.5442 -0.15713 15.2905 0.329246 16.9821 1.956C17.8273 2.76872 18.3905 3.85299 18.4856 5.03784C18.5799 6.21232 18.2175 7.5254 17.1436 8.81679L10.2601 16.0112C9.92623 16.3602 9.36908 16.3602 9.03526 16.0113L2.14414 8.80841Z"
              stroke="#414141"
            />
          </svg>
        </span>
        <span>
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.672966 15.0244L1.47201 5.03632H10.653L11.452 15.0244C11.5228 15.9093 10.8238 16.6665 9.93602 16.6665H2.18895C1.30121 16.6665 0.602173 15.9093 0.672966 15.0244Z"
              stroke="#414141"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.58252 7.56769V3.52604C3.58252 2.68402 4.08773 1 6.10856 1C8.12938 1 8.63459 2.68402 8.63459 3.52604V7.56769"
              stroke="#414141"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="6" y="9" width="11" height="8" rx="4" fill="#414141" />
            <path
              d="M11.8424 15.084C11.5568 15.084 11.3048 15.0233 11.0864 14.902C10.868 14.7788 10.6972 14.608 10.574 14.3896C10.4527 14.1712 10.392 13.9192 10.392 13.6336V12.3344C10.392 12.0488 10.4527 11.7968 10.574 11.5784C10.6972 11.36 10.868 11.1901 11.0864 11.0688C11.3048 10.9456 11.5568 10.884 11.8424 10.884C12.128 10.884 12.3791 10.9456 12.5956 11.0688C12.814 11.1901 12.9848 11.36 13.108 11.5784C13.2312 11.7968 13.2928 12.0488 13.2928 12.3344V13.6336C13.2928 13.9192 13.2312 14.1712 13.108 14.3896C12.9848 14.608 12.814 14.7788 12.5956 14.902C12.3791 15.0233 12.128 15.084 11.8424 15.084ZM11.8424 14.4428C11.9843 14.4428 12.1131 14.4092 12.2288 14.342C12.3445 14.2729 12.436 14.1815 12.5032 14.0676C12.5704 13.9519 12.604 13.8231 12.604 13.6812V12.284C12.604 12.1403 12.5704 12.0115 12.5032 11.8976C12.436 11.7819 12.3445 11.6904 12.2288 11.6232C12.1131 11.5541 11.9843 11.5196 11.8424 11.5196C11.7005 11.5196 11.5717 11.5541 11.456 11.6232C11.3403 11.6904 11.2488 11.7819 11.1816 11.8976C11.1144 12.0115 11.0808 12.1403 11.0808 12.284V13.6812C11.0808 13.8231 11.1144 13.9519 11.1816 14.0676C11.2488 14.1815 11.3403 14.2729 11.456 14.342C11.5717 14.4092 11.7005 14.4428 11.8424 14.4428Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
