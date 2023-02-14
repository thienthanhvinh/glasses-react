import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} text-sm text`}>
            
        </label>
    );
};

export default Label;