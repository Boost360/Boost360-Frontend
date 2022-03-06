import React, {useState} from 'react'
import './Programs.css'
import { useTranslation } from 'react-i18next'
import Program from './Program/Program'
import LoadingAnimation from '../../Shared/LoadingAnimation'
import Equipment_en from '../../../../static/img/Programs/Equipment_en.jpg'
import Equipment_ch from '../../../../static/img/Programs/Equipment_ch.jpg'
import Equipment_kr from '../../../../static/img/Programs/Equipment_kr.jpg'

import Course_en from '../../../../static/img/Programs/Course_en.jpg'
import Course_ch from '../../../../static/img/Programs/Course_ch.jpg'
import Course_kr from '../../../../static/img/Programs/Course_kr.jpg'

import SwingShort_en from '../../../../static/img/Programs/SwingShort_en.jpg'
import SwingShort_ch from '../../../../static/img/Programs/SwingShort_ch.jpg'
import SwingShort_kr from '../../../../static/img/Programs/SwingShort_kr.jpg'

import SwingLong_en from '../../../../static/img/Programs/SwingLong_en.jpg'
import SwingLong_ch from '../../../../static/img/Programs/SwingLong_ch.jpg'
import SwingLong_kr from '../../../../static/img/Programs/SwingLong_kr.jpg'

function Programs() {
  const [t, i18n] = useTranslation();
  const programs = t('programs', {returnObjects: true});
  const [loading, setLoading] = useState(true);
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
    <div>
      {loading && <LoadingAnimation />}
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
      {loading && setLoading(false)}
    </div>
  )
}

export default Programs