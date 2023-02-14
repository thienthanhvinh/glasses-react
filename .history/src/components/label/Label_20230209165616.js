import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} text-sm text-secondary font-semibold block`}>
            {children}
        </label>
    );
};

export default Label;