import React from 'react';
import Heading from '../components/common/Heading';
import LayoutGlasses from '../layout/LayoutGlasses';

const AboutPage = () => {
    return (
        <>
         <LayoutGlasses>
            <Heading className='mt-14' type='secondary'>About us</Heading>
            <p className='w-1/2 mx-auto text-justify text-primary font-medium mb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt vero odio numquam cumque maxime expedita ipsum iusto eaque, temporibus atque labore quae deleniti modi, distinctio ea pariatur vitae, ex magni. Sint molestiae quia quo ut nulla officiis temporibus eveniet, modi magnam, ad, optio inventore iste voluptatem! Quibusdam, eum. Fugiat, eius!</p>
         </LayoutGlasses>   
        </>
    );
};

export default AboutPage;