import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="w-full max-w-[200px] border border-gray-400 mt-2">

        </input>
    );
};

export default Input;