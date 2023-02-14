import React from 'react';

const Label = ({htmlFor, children, className = ''}) => {
    return (
        <label htmlFor={htmlFor} className={`${className} dark:text-white text-sm text-secondary font-semibold block cursor-pointer`}>
            {children}
        </label>
    );
};

export default Label;