import React from 'react'
import './Programs.css'
import '../Shared/Services.css'
import { useTranslation } from 'react-i18next'
import Program from './Program/Program'
import Equipment_en from '../../../static/img/Programs/Equipment_en.png'
import Equipment_ch from '../../../static/img/Programs/Equipment_ch.png'
import Equipment_kr from '../../../static/img/Programs/Equipment_kr.png'

import Course_en from '../../../static/img/Programs/Course_en.png'
import Course_ch from '../../../static/img/Programs/Course_ch.png'
import Course_kr from '../../../static/img/Programs/Course_kr.png'

import SwingShort_en from '../../../static/img/Programs/SwingShort_en.png'
import SwingShort_ch from '../../../static/img/Programs/SwingShort_ch.png'
import SwingShort_kr from '../../../static/img/Programs/SwingShort_kr.png'

import SwingLong_en from '../../../static/img/Programs/SwingLong_en.png'
import SwingLong_ch from '../../../static/img/Programs/SwingLong_ch.png'
import SwingLong_kr from '../../../static/img/Programs/SwingLong_kr.png'

function Programs() {
  const [t, i18n] = useTranslation();
  const programs = t('programs', {returnObjects: true});
  const covers = {
    "Equipment" : {
      "en": Equipment_en,
      "ch": Equipment_ch,
      "kr": Equipment_kr,
    },
    "Course" : {
      "en": Course_en,
      "ch": Course_ch,
      "kr": Course_kr,
    },
    "SwingShort" : {
      "en": SwingShort_en,
      "ch": SwingShort_ch,
      "kr": SwingShort_kr,
    },
    "SwingLong" : {
      "en": SwingLong_en,
      "ch": SwingLong_ch,
      "kr": SwingLong_kr,
    }
  };
  return (
    <div className='services'>
      <div className="section">
        <h1 style={{textAlign: 'left'}}>{programs.h0}</h1>
        <Program data={programs.Equipment} img={covers.Equipment[i18n.language]}/>
      </div>
      <div className="section">
        <Program data={programs.Course} img={covers.Course[i18n.language]}/>
      </div>
      <div className="section">
        <Program data={programs.SwingShort} img={covers.SwingShort[i18n.language]}/>
      </div>
      <div className="section">
        <Program data={programs.SwingLong} img={covers.SwingLong[i18n.language]}/>
      </div>
    </div>
  )
}

export default Programs