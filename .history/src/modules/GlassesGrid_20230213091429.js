import React from 'react';

const GlassesGrid = ({children, className = ''}) => {
    return (
        <div className='grid grid-cols-4 gap-x-6 px-16 ${c'>
            {children}
        </div>
    );
};

export default GlassesGrid;