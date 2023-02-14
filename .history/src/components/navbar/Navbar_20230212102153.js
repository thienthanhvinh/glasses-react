import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className='flex'>
            <li><Link to = "/">Shops</Link></li>
            <li><Link to = "/">Offers</Link></li>
            <li><Link to = "/">W</Link></li>
        </ul>
    );
};

export default Navbar;