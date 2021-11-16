import React from 'react'
import './HowItWorks.css'
import Paragraph from '../Paragraph/Paragraph'

function HowItWorks({data, icon=null}) {
    return (
        <div className="howItWorks">
            <h1>{data.h0}</h1>
            <div className="container">
                <Paragraph json={data.p0} gap={2}/>
                <Paragraph json={data.p1} gap={2} prefix={icon}/>
            </div>
        </div>
    )
}

export default HowItWorks
