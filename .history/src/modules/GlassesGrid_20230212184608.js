import React from 'react';

const GlassesGrid = ({children}) => {
    return (
        <div className='grid grid-cols-4 w-full max-w-[1440px] mx-auto px-16'>
            {children}
        </div>
    );
};

export default GlassesGrid;