import React, { useState } from 'react';
import '../Shared/Services.css';
import { useTranslation } from "react-i18next";

// -----------------------------COMPONENTS-------------------------------
import Intro from '../Shared/Intro/Intro';
import HowItWorks from '../Shared/HowItWorks/HowItWorks';
import Keypoints from '../Shared/Keypoints/Keypoints';
import QA from '../Shared/QA/QA';

// -----------------------------ICON / IMAGE-------------------------------
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Astronaut from '../../../static/img/Astronaut.png'



export default function Membership() {
    const { t, i18n } = useTranslation();
    const membership = t('membership', {returnObjects: true});
    return (
        <div className="services">
            <div className="section">
                <Intro qqwe={membership.Intro} graphic={Astronaut} />
            </div>
            <div className="section">
                <HowItWorks qqwe={membership.HowItWorks} icon={(<AiOutlineCheckCircle size='25px' style={{ position: 'relative', top: '7px', left: '-10px', opacity: '0.7' }} />)} />
            </div>
            <div className="section" style={{ padding: '0px' }}>
                <Keypoints heading={membership.Keypoints.h0}
                    select={[15, 16, 17, 18, 19, 20, 21, 11, 22]}/>
            </div>
            <div className="section">
                <QA qqwe={membership.QA} link='../Membership' />
            </div>
            <div className="section">
                <QA qqwe={membership.Tuition} link='../Membership' />
            </div>
        </div>
    )
}