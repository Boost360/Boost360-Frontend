import React from 'react'
import './Screening.css'
import { useTranslation } from 'react-i18next'
import Intro from '../Shared/Intro/Intro'
import Gallery from '../Shared/Gallery/Gallery'
import QA from '../Shared/QA/QA'
import ScreeningSession from '../Shared/ScreeningSession/ScreeningSession'

// -----------------------------IMAGE------------------------------
import Golfer from '../../../static/img/Screening_background.png';
import background4 from '../../../static/img/background4.png';
import background5 from '../../../static/img/background5.png';
import background6 from '../../../static/img/background6.png';
import background7 from '../../../static/img/background7.png';
import background8 from '../../../static/img/background8.png';


function Screening() {
  const [t, i18n] = useTranslation();
  const screening = t('screening', {returnObjects: true});
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
  const logos = [];
  return (
    <div className="services">
      <div className="section">
        <Intro data={screening.Intro} graphic={Golfer} graphicStyle={{width: '30%', height: 'auto', right: '13%', bottom: '5%', zIndex: '-4'}} ></Intro>
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
