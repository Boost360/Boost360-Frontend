import React from 'react'
import './Levels.css'
import Paragraph from '../Paragraph/Paragraph'

function Levels({qqwe, ver=0}) {
    const Level = ({level}) => {
        return (
            <div className={ver==0 ? 'level' : 'level_1'}>
                <h1>{level.h0}</h1>
                <Paragraph json={level.p0}/>
            </div>
        )
    }
    console.log('[Levels]', qqwe.levels[0]);
    return (
        <div className='levels'>
            <h1>{qqwe.h0}</h1>
            <Paragraph json={qqwe.p0}/>
            {console.log('Pass paragraph', qqwe.p0)}
            {Object.keys(qqwe.levels ? qqwe.levels : {}).map((key)=>(<Level level={qqwe.levels[key]} key={key}/>))}
        </div>
    )
}

export default Levels
