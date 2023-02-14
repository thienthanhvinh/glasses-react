import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex text-sm font-semibold gap-x-8'>
                <li><Link to = "/">Shops</Link></li>
                <li><Link to = "/">Offers</Link></li>
                <li><Link to = "/">Warranty</Link></li>
                <li><Link to = "/">Medical</Link></li>
                <li><Link to = "/">Info</Link></li>
                <li><Link to = "/">Blog</Link></li>
                <li><Link to = "/">About us</Link></li>
                <li><Link to = "/">Contact</Link></li>
            </ul>
            <div className='ml-auto'></div>
        </div>
      
    );
};

export default Navbar;