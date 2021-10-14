import React, {Component} from 'react';
import BannerImage from './BannerImage/BannerImage';
import Main from './Main/Main';
import Navigation from './Navigation/Navigation';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about_us_container'>
            <Navigation/>
            <BannerImage/>
            <Main/>
        </div>
    )
};
export default AboutUs;