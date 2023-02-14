import React from 'react';
import Button from '../button/Button';

const Category = () => {
    return (
        <div className='flex mb-[112px] mx-auto max-w-[1400px] w-full gap-x-2'>
            <div className='h-[596px] relative'>
                <img src="/category1.png" alt="" className='w-full h-full object-cover' />
                <div className=''>
                    <p>Optical</p>
                    <Button className='bg-secondary text-primary rounded-[4px] px-4 py-3'>Buy</Button>
                </div>
            </div>
            <div>
                <img src="/category2.png" alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default Category;