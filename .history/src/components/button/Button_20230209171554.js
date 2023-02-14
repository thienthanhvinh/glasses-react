import React from 'react';

const Button = ({type, children, className=''}) => {
    return (
        <button type='submit' className={`bg-green-500 ${className} rounded-lg px-3 py-3`}>
            {children}
        </button>
    );
};

export default Button;