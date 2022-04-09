import React,{useState} from 'react'
import './Coaching.css'
import { useTranslation } from 'react-i18next'
import Instructor from '../Shared/Instructor/Instructor'
import Intro from '../Shared/Intro/Intro'
import QA from '../Shared/QA/QA'
import badge from '../../../static/img/partner.png'
import Tab from '../../Tab/Tab'


function Coaching() {
  const [t, i18n] = useTranslation();
  const coaching = t('coaching', {returnObjects: true});
  const [tab, setTab] = useState(0);
  const isKr = i18n.language === "kr";
  return (
    <div className="services">
      <div className="section coaching-intro">
        <Intro data={coaching.Intro}></Intro>
      </div>
      {isKr && 
        <div style={{background: 'var(--white)'}}>
          <Tab tab={tab} setTab={setTab} data={coaching.Tab}/>
        </div>
      }
      <div className="section">
        <Instructor data={tab === 0 ? coaching.Instructors.Rhys : coaching.KrInstructors.Rhys} badge={badge}></Instructor>
      </div>
      <div className="section">
        <Instructor data={tab === 0 ? coaching.Instructors.TBA : coaching.KrInstructors.TBA}></Instructor>
      </div>
      <div className="section">
        <QA data={tab === 0 ? coaching.QA : coaching.KrQA}></QA>
      </div>
    </div>
  )
}

export default Coaching;
