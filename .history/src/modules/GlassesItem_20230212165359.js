import React from 'react';

const GlassesItem = () => {
    return (
        <div className='px-16'>
            <img src="/glasses.png" alt="" className='mb-4' />
            <p className='text-secondary-3 font-semibold textxl'>Model Name</p>
            <p className='font-normal text-secondary-3'>Price</p>
            <p className='font-bold '>See details -></p>
        </div>
    );
};

export default GlassesItem;