import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} text-`}>
            
        </label>
    );
};

export default Label;