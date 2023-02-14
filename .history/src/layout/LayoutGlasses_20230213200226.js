import React from 'react';
import LayoutFooter from './LayoutFooter';
import Menu from './Menu';

const LayoutGlasses = ({children}) => {
    return (
        <>
         <Menu></Menu>
            {children}
         <LayoutFooter></LayoutFooter>
        </>
    );
};

export default LayoutGlasses;