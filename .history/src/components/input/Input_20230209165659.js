import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="w-full px-3 py-3 rounded-lg border-2 border-gray-300 mt-2 outline-none focus:border-gray-400 transition-all duration-200 bg-transparent text-sm">

        </input>
    );
};

export default Input;