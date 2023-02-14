import React from 'react';

const HeadlineImage = ({className= '', src = }) => {
    return (
        <div className={className}>
             <img src="/headline1.png" alt="" />
        </div>
    );
};

export default HeadlineImage;