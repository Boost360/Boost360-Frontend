import React from 'react'
import './Coaching.css'
import { useTranslation } from 'react-i18next'
import Instructor from '../Shared/Instructor/Instructor'
import Intro from '../Shared/Intro/Intro'
import QA from '../Shared/QA/QA'
import Golfer from '../../../static/img/RemoteLearning_background.png'
import badge from '../../../static/img/partner.png'


function Coaching() {
  const [t, i18n] = useTranslation();
  const coaching = t('coaching', {returnObjects: true});
  return (
    <div className="services">
      <div className="section">
        <Intro data={coaching.Intro} graphic={Golfer} graphicStyle={{filter: 'hue-rotate(280deg) saturate(70%)', width: '60%', height: 'auto', right: '-5%', bottom: '0%', zIndex: '-4'}}></Intro>
      </div>
      <div className="section">
        <Instructor data={coaching.Instructors.Rhys} badge={badge}></Instructor>
      </div>
      <div className="section">
        <Instructor data={coaching.Instructors.TBA}></Instructor>
      </div>
      <div className="section">
        <QA data={coaching.QA}></QA>
      </div>
    </div>
  )
}

export default Coaching;
