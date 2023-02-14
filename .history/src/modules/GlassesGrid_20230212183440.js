import React from 'react';

const GlassesGrid = ({children}) => {
    return (
        <div className='grid grid-cols-4 px-20'>
            {children}
        </div>
    );
};

export default GlassesGrid;