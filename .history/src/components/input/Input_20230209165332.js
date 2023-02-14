import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="w-full px-2 py-1 border border-gray-400 mt-2">

        </input>
    );
};

export default Input;