import React from 'react';
import AboutPhotographer from '../AboutPhotoGrapher/AboutPhotographer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <AboutPhotographer></AboutPhotographer>
        </>
    );
};

export default Home;