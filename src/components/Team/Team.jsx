import React, {useState} from 'react'
import './Team.css'
import Paragraph from '../Services/Shared/Paragraph/Paragraph'
import {useTranslation} from 'react-i18next'
import avatar from '../../static/img/avatar00.png'
import avatar_placeholder from '../../static/img/avatar.png'
import badge from '../../static/img/partner.png'

function Member({member}) {
    return (
        <div className="member">
            <div className="left">
                {/* TODO can not decode string path to image */}
                {member.avatar === '0' ? <img src={avatar} alt={member.name}/> : <img src={avatar_placeholder} alt={member.name}/> }
                <div className="name">
                    <p>{member.name}</p> 
                    {member.badge && <img src={badge} alt={`${member.name} badge`} />}
                </div>
                <h2>{member.role}</h2>
            </div>
            <div className="right">
                <Paragraph json={member.description} gap={2}></Paragraph>
            </div>
        </div>
    )
}
function Members({members}) {
    return (
        <div className="members">
            {Object.values(members).map((member) => 
                <Member member={member}/>
            )}
        </div>        
    )
}

function Tab({tab, setTab, data}) {
    return (
        <div className="tab_container">
        <div className={tab===0 ? 'active' : 'inactive'} onClick={()=>setTab(0)}>
            {data.nzTeam}
            <br/>
            {data.nzLocation}
        </div>
        <div className={tab===1 ? 'active' : 'inactive'} onClick={()=>setTab(1)}>
            {data.krTeam}
            <br/>
            {data.krLocation}
        </div>
    </div>
    )
}
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
