import React from 'react'
import './Screening.css'
import { useTranslation } from 'react-i18next'
import Intro from '../Shared/Intro/Intro'
import Gallery from '../Shared/Gallery/Gallery'
import QA from '../Shared/QA/QA'
import ScreeningSession from '../Shared/ScreeningSession/ScreeningSession'

// -----------------------------IMAGE------------------------------
import Golfer from '../../../static/img/RemoteLearning_background.png';
import background4 from '../../../static/img/background4.png';
import background5 from '../../../static/img/background5.png';
import background6 from '../../../static/img/background6.png';
import background7 from '../../../static/img/background7.png';
import background8 from '../../../static/img/background8.png';


function Screening() {
  const [t, i18n] = useTranslation();
  const screening = t('screening', {returnObjects: true});
  const gallery_images = [background8, background5, background6, background7, background4];
  const logos = [];
  return (
    <div className="services">
      <div className="section">
        <Intro data={screening.Intro} graphic={Golfer} graphicStyle={{filter: 'hue-rotate(170deg) saturate(70%)', width: '60%', height: 'auto', right: '-5%', bottom: '0%', zIndex: '-4'}} ></Intro>
      </div>
      <div className="section">
        <ScreeningSession data={screening.Swing}></ScreeningSession>
      </div>
      <div className="section">
        <ScreeningSession data={screening.Club}></ScreeningSession>
      </div>
      <div className="section">
        <ScreeningSession data={screening.Movement}></ScreeningSession>
      </div>
      <div className="section">
        <Gallery images={gallery_images}></Gallery>
      </div>
      <div className="section">
        <QA data={screening.QA} />
      </div>
    </div>
  )
}

export default Screening;
