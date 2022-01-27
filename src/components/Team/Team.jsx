import React, {useState} from 'react'
import './Team.css'
import {useTranslation} from 'react-i18next'
import Members from './Members/Members'
import Tab from '../Tab/Tab'

function Team() {
    const [tab, setTab] = useState(0);
    const { t, i18n } = useTranslation();
    const [data,setData] = useState({nz:[],kr:[],ch:[]});
    const isKr = i18n.language === "kr";
    React.useEffect(async () => {
        let memberData = await retrieveAllTeams();
        setData(memberData)
       
    }, []);
    return (
        <div className='team'>
            {isKr && <Tab tab={tab} setTab={setTab} data={data}/>}
            {tab === 0 && <Members members={data.nz} lang={i18n.language} />}
            {tab === 1 && <Members members={data.kr} lang={i18n.language} />}

        </div>
    )
}

export default Team
