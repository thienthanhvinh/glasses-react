import React from 'react';

const Input = ({type, placeholder, name, ...rest}) => {
    return (
        <input type={type} name={name} id={name} className="">

        </input>
    );
};

export default Input;