import React from 'react';

const Button = ({type, children}) => {
    return (
        <button type='submit' className='bg-green-500 text-'>
            {children}
        </button>
    );
};

export default Button;