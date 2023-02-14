import React from 'react';

const GlassesGrid = ({children}) => {
    return (
        <div className='grid grid-cols-4 gap-x-6 px-16'>
            {children}
        </div>
    );
};

export default GlassesGrid;