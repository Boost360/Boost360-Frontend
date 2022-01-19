import React, {useState} from 'react'
import './Team.css'
import {useTranslation} from 'react-i18next'
import Members from './Members/Members'
import Tab from './Tab/Tab'

function Team() {
    const [tab, setTab] = useState(0);
    const { t, i18n } = useTranslation();
    const data = t('team', {returnObjects: true})
    const isKr = i18n.language === "kr";
    return (
        <div className='team'>
            {isKr && <Tab tab={tab} setTab={setTab} data={data}/>}
            {tab === 0 && <Members members={data.nzMembers}/>}
            {tab === 1 && <Members members={data.krMembers}/>}
        </div>
    )
}

export default Team
