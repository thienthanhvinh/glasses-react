import React from 'react';

const HeadlineImage = ({className= '', src = "/head"}) => {
    return (
        <div className={className}>
             <img src="/headline1.png" alt="" />
        </div>
    );
};

export default HeadlineImage;