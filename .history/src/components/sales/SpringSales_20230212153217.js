import React from 'react';
import Button from '../button/Button';

const SpringSales = () => {
    return (
        <div className='bg-secondary h-[700px] w-full flex items-center justify-between'>
            <div className='ml-'>
                <h2>Spring Sale</h2>
                <p>Up to -40%</p>
                <Button>See offer</Button>
            </div>
            <div>
                <img src="/photo1.png" alt="" />
            </div>
        </div>
    );
};

export default SpringSales;