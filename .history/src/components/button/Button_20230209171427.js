import React from 'react';

const Button = ({type, children, className=''}) => {
    return (
        <button type='submit' className=bg-green-500 ${className}`}>
            {children}
        </button>
    );
};

export default Button;