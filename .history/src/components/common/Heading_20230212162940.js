import React from 'react';

const Heading = ({children, className = ''}) => {
    return (
        <h2 className='font-extrabold text-[70px]'>
            {children}
        </h2>
    );

export default Heading;