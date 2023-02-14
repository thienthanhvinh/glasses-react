import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="w-full max-w-[]">

        </input>
    );
};

export default Input;