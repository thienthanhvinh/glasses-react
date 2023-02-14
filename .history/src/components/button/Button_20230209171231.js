import React from 'react';

const Button = ({type, children}) => {
    return (
        <button type='submit' className='bggre'>
            {children}
        </button>
    );
};

export default Button;