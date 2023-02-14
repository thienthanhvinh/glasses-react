import React from 'react';

const Heading = ({children, className = ''}) => {
    return (
        <h2 className='font-'>
            {children}
        </h2>
    );

export default Heading;