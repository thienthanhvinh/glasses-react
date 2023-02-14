import React from 'react';

const Button = ({type, children}) => {
    return (
        <button type='submit' className='bg-green-600'>
            {children}
        </button>
    );
};

export default Button;