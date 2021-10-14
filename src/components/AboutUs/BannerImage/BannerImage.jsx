import React from "react";
import about_us_banner from '../../../static/img/about_us_banner.jpg';

const BannerImage = () => {
    return (
        <div className='banner_image_container'>
            <img className='banner_image' src={about_us_banner}/>
        </div>
    )
};
export default BannerImage;