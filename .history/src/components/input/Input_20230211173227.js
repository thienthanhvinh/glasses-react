import React from 'react';
import { useController } from 'react-hook-form';

const Input = ({type, placeholder, name, control, ...rest}) => {
    const {field} = useController({
        control, name, defaultValue: "",
    });
    return (
        <input type={type} name={name} id={name} placeholder={placeholder} {...field} {...rest} className="w-full px-4 py-4 rounded-lg border-2 border-gray-300 mt-2 outline-none focus:border-gray-400 transition-all duration-200 bg-transparent text-sm"
        
        />
    );
};

export default Input;