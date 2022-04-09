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
import Golfer from '../../../static/img/Junior_background.png'
import background4 from '../../../static/img/background9.png';
import background5 from '../../../static/img/background9.png';
import background6 from '../../../static/img/background9.png';
import background7 from '../../../static/img/background9.png';
import background8 from '../../../static/img/background9.png';




export default function JuniorGolf() {
    const { t, i18n } = useTranslation();
    const juniorGolf = t('juniorGolf', {returnObjects: true });
    const gallery_images = [
        {
            image: background8,
            caption: "description" 
        }, 
        {
            image: background7,
            caption: "description" 
        }, 
        {
            image: background6,
            caption: "description" 
        }, 
        {
            image: background5,
            caption: "description" 
        }, 
        {
            image: background4,
            caption: "description" 
        }, 
    ]

    return (
        <div className="services">
            <div className="section">
                <Intro data={juniorGolf.Intro} graphic={Golfer} graphicStyle={{width: '40%', height: 'auto', right: '9%', bottom: '20%', zIndex: '-4'}} />
            </div>
            <div className="section">
                <Gallery images={gallery_images} />
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
                <QA data={juniorGolf.QA} addQA={juniorGolf.addQA[i18n.language]}/>
            </div>
        </div>
    )
}