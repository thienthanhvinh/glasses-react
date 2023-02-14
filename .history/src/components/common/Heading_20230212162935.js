import React from 'react';

const Heading = ({children, className = ''}) => {
    return (
        <h2 className='font-extrabold'>
            {children}
        </h2>
    );

export default Heading;