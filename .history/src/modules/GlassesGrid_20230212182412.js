import React from 'react';

const GlassesGrid = ({children}) => {
    return (
        <div className='grid grid-cols-3'>
            {children}
        </div>
    );
};

export default GlassesGrid;