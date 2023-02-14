import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} text-sm text-secondary text-sm`}>
            
        </label>
    );
};

export default Label;