import React from 'react'
import './Screening.css'
import { useTranslation } from 'react-i18next'
import Intro from '../Shared/Intro/Intro'
import Gallery from '../Shared/Gallery/Gallery'
import QA from '../Shared/QA/QA'
import ScreeningSession from '../Shared/ScreeningSession/ScreeningSession'

// -----------------------------IMAGE------------------------------
import gallery0 from '../../../static/img/Screening_gallery0.png';
import gallery1 from '../../../static/img/Screening_gallery1.jpeg';
import gallery2 from '../../../static/img/Screening_gallery2.jpeg';


function Screening() {
  const [t, i18n] = useTranslation();
  const screening = t('screening', {returnObjects: true});
  const gallery_images = [
    {
      image: gallery0,
      caption: "description"
    },
    {
        image: gallery1,
        caption: "description" 
    }, 
    {
        image: gallery2,
        caption: "description" 
    },
  ]
  const logos = [];
  return (
    <div className="services">
      <div className="section screening-intro">
        <Intro data={screening.Intro}></Intro>
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
