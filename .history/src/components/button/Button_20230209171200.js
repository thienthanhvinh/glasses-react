import React from 'react';

const Button = ({type}) => {
    return (
        <button type='submit' className=''>
            {children}
        </button>
    );
};

export default Button;