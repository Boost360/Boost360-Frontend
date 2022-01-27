import React from 'react'
import './Tab.css'
import { useTranslation } from 'react-i18next'
// OVERVIEW : A two-tab navigator to switch between NZ team's content and Korean team.
// CURRANT USAGE : Team.jsx, Coaching.jsx
// PROPS EXAMPLE:
//         1. tab = 0 / tab = 1
//         2. setTab = setter derived from useState() 
//         2. data = { 
//             nzTeam: "New Zealand Team",
//             nzLocation: "Auckland",
//             krTeam: "Korean Team",
//             krLocation: "Seoul, Gangnam"
//             }
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
