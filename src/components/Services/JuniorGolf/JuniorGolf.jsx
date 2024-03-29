import React, { useState } from 'react';
import '../Shared/Services.css';
import { useTranslation } from "react-i18next";

// -----------------------------COMPONENTS-------------------------------
import Intro from '../Shared/Intro/Intro';
import HowItWorks from '../Shared/HowItWorks/HowItWorks';
import Framework from '../Shared/Framework/Framework';
import Levels from '../Shared/Levels/Levels';
import Keypoints from '../Shared/Keypoints/Keypoints';
import Gallery from '../Shared/Gallery/Gallery';
import QA from '../Shared/QA/QA';

// -----------------------------IMAGE / ICON------------------------------
import gallery0 from '../../../static/img/Junior_gallery0.png';
import gallery1 from '../../../static/img/Junior_gallery1.jpeg';
import gallery2 from '../../../static/img/Junior_gallery2.jpeg';
import gallery3 from '../../../static/img/Junior_gallery3.png';
import gallery4 from '../../../static/img/Junior_gallery4.png';
import gallery5 from '../../../static/img/Junior_gallery5.png';
import gallery6 from '../../../static/img/Junior_gallery6.png';
import gallery7 from '../../../static/img/Junior_gallery7.png';




export default function JuniorGolf() {
    const { t, i18n } = useTranslation();
    const juniorGolf = t('juniorGolf', {returnObjects: true });
    const gallery_images = [
        {
            image: gallery2,
            caption: "description" 
        }, 
        {
            image: gallery1,
            caption: "description" 
        }, 
        {
            image: gallery5,
            caption: "description" 
        }, 
        {
            image: gallery0,
            caption: "description" 
        }, 
        {
            image: gallery3,
            caption: "description" 
        }, 
        {
            image: gallery7,
            caption: "description" 
        }, 
        {
            image: gallery4,
            caption: "description" 
        }, 
        {
            image: gallery6,
            caption: "description" 
        },
    ]

    return (
        <div className="services">
            <div className="section junior-academy-intro">
                <Intro data={juniorGolf.Intro} />
            </div>
            {/* <div className="section">
                <HowItWorks data={juniorGolf.HowItWorks} icon={null} />
            </div> */}
            <div className="section" style={{ padding: '0px' }}>
                <Levels data={juniorGolf.Levels}/>
            </div>
            <div className="section" style={{ padding: '0px' }}>
                <Keypoints heading={juniorGolf.Keypoints.h0}
                    select={[0, 1, 2, 3, 4, 5, 16, 7, 20, 9, 10, 21, 12, 13, 14]}/>
            </div>
            <div className="section">
                <Gallery images={gallery_images} />
            </div>
            <div className="section">
                <QA data={juniorGolf.QA} addQA={juniorGolf.addQA[i18n.language]}/>
            </div>
        </div>
    )
}