import React from 'react';

const Button = ({type, children}) => {
    return (
        <button type='submit' className='bg'>
            {children}
        </button>
    );
};

export default Button;