import React from 'react';

const IconEyeToggle = ({open = false, onClick = () => {}}) => {
    if(open) 
    return (
        <span onClick={onClick}>
            
        </span>
    );
};

export default IconEyeToggle;