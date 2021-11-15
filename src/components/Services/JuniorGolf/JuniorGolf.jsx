import React, { useState } from 'react';
import '../Shared/Services.css';
import { useTranslation } from "react-i18next";

// -----------------------------COMPONENTS-------------------------------
import Intro from '../Shared/Intro/Intro';
import HowItWorks from '../Shared/HowItWorks/HowItWorks';
import Levels from '../Shared/Levels/Levels';
import Keypoints from '../Shared/Keypoints/Keypoints';
import Gallery from '../Shared/Gallery/Gallery';
import QA from '../Shared/QA/QA';

// -----------------------------IMAGE / ICON------------------------------
import Astronaut from '../../../static/img/Astronaut.png'
import background4 from '../../../static/img/background4.png';
import background5 from '../../../static/img/background5.png';
import background6 from '../../../static/img/background6.png';
import background7 from '../../../static/img/background7.png';
import background8 from '../../../static/img/background8.png';




export default function JuniorGolf() {
    const { t, i18n } = useTranslation();
    const juniorGolf = t('juniorGolf', {returnObjects: true });
    const gallery_images = [background8, background5, background6, background7, background4];

    return (
        <div className="services">
            <div className="section">
                <Intro qqwe={juniorGolf.Intro} graphic={Astronaut} />
            </div>
            <div className="section">
                <HowItWorks qqwe={juniorGolf.HowItWorks} icon={null} />
            </div>
            <div className="section">
                <Levels qqwe={juniorGolf.Levels} />
            </div>
            <div className="section" style={{ padding: '0px' }}>
                <Keypoints heading={juniorGolf.Keypoints.h0}
                    select={[0, 1, 2, 3, 4, 5, 16, 7, 20, 9, 10, 21, 12, 13, 14]}/>
            </div>
            <div className="section">
                <Gallery images={gallery_images} />
            </div>
            <div className="section">
                <QA qqwe={juniorGolf.QA} />
            </div>
        </div>
    )
}