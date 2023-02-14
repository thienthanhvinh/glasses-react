import React from 'react';
import { Link } from 'react-router-dom';

const LayoutFooter = () => {
    return (
        <div className='bg-primary flex'>
            <div className=''>
                <img src="/logo.png" alt="" />
                <Link to="/about">About us</Link>
                <Link to="contact">Contact</Link>
                <div className=''>
                    <span><img src="/Instagram.png" alt="" /></span>\
                    <span><img src="/Instagram.png" alt="" /></span>
                    <span><img src="/Instagram.png" alt="" /></span>
                    <span><img src="/Instagram.png" alt="" /></span>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default LayoutFooter;