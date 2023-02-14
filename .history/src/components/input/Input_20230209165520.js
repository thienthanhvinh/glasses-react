import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="w-full px-2 py-2 rounded-lg border border-gray-300 mt-2 outline-none focus:border-gray-400 transition-all dura">

        </input>
    );
};

export default Input;