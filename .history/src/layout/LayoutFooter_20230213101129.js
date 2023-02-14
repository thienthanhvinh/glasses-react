import React from 'react';
import { Link } from 'react-router-dom';

const LayoutFooter = () => {
    return (
        <div className='bg-primary flex'>
            <div className='flex'>
                <h2 className='text-secondary font-extrabold text-[32px] leading-[46px]'>LENS<span className='font-normal'>LOVE</span></h2>
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