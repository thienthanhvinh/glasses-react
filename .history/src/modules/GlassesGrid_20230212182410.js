import React from 'react';

const GlassesGrid = ({children}) => {
    return (
        <div className='grid grid-cols'>
            {children}
        </div>
    );
};

export default GlassesGrid;