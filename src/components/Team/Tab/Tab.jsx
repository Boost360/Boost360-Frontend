import React from 'react'
import '../Team.css'

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

export default Tab
