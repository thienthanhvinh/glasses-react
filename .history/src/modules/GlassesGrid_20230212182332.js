import React from 'react';

const GlassesGrid = ({children}) => {
    return (
        <div className='grid grid-cols-4 gap-x-'>
            {children}
        </div>
    );
};

export default GlassesGrid;