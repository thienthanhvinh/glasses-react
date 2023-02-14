import React from 'react';
import LayoutFooter from './LayoutFooter';
import LayoutMenu from './Menu';

const LayoutGlasses = ({children}) => {
    return (
        <>
         <LayoutMenu></LayoutMenu>
            {children}
         <LayoutFooter></LayoutFooter>
        </>
    );
};

export default LayoutGlasses;