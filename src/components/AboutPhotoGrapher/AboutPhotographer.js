import React from 'react';
import './AboutPhotoGrapher.css';

import profile from '../../Images/tin_1920.jpg';
const AboutPhotographer = () => {
    return (
        <div className='mt-5' >
            <h1 className='text-center m-5'>About Photographer</h1>
            <div className='photographer-container '>
                <img className='w-25 ms-5' src={profile} alt="" />
            
                <p className='m-5'>Tin Man Lee believes animals have feelings. He teaches photographers to take sharp photos to move people, so we can save wildlife from their disappearing habitats. His photos have been featured in Nature’s Best, WPOTY, NANPA, and the Smithsonian’s. Click HERE to receive his free guide on how to take sharp photos of fast-moving animals.</p>
            </div>
            
           
            
        </div>
    );
};

export default AboutPhotographer;