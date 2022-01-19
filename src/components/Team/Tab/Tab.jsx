import React from 'react'
import '../Team.css'
import { useTranslation } from 'react-i18next';

function Tab({tab, setTab, data}) {
    const {t} = useTranslation();
    return (
        <div className="tab_container">
        <div className={tab===0 ? 'active' : 'inactive'} onClick={()=>setTab(0)}>
            {t('team.nzTeam')}
            <br/>
            {t('team.nzLocation')}
        </div>
        <div className={tab===1 ? 'active' : 'inactive'} onClick={()=>setTab(1)}>
            {t('team.krTeam')}
            <br/>
            {t('team.krLocation')}
        </div>
    </div>
    )
}

export default Tab
