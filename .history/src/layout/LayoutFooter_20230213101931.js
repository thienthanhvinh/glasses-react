import React from 'react';
import { Link } from 'react-router-dom';

const LayoutFooter = () => {
    return (
        <div className='bg-primary flex px-16 py-16'>
            <div className='flex flex-col'>
                <h2 className='text-secondary font-extrabold text-[32px] leading-[46px] mb-32px'>LENS<span className='font-normal'>LOVE</span></h2>
                <Link to="/about">About us</Link>
                <Link to="contact">Contact</Link>
                <div className='flex'>
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