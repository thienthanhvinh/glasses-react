import React from 'react';

const Heading = ({children, className = ''}) => {
    return (
        <h2 className={`font-extrabold text-[70px] leading-[98px] text-center text-primary mb-[70px] ${className}`}>
            {children}
        </h2>
    );
};
export default Heading;
