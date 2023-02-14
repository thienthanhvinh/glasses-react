import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="w-full px-2 py-2 rounded- border border-gray-400 mt-2">

        </input>
    );
};

export default Input;