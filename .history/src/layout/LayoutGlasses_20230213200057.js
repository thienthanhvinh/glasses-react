import React from 'react';
import LayoutMenu from './LayoutMenu';

const LayoutGlasses = ({children}) => {
    return (
        <>
         <LayoutMenu></LayoutMenu>
         <LayoutFooter></LayoutFooter>
        </>
    );
};

export default LayoutGlasses;