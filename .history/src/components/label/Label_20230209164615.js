import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} text- text-secondary font-medium`}>
            {children}
        </label>
    );
};

export default Label;