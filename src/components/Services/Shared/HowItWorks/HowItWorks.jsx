import React from 'react'
import './HowItWorks.css'
import Paragraph from '../Paragraph/Paragraph'

function HowItWorks({qqwe, icon=null}) {
    return (
        <div className="howItWorks">
            <h1>{qqwe.h0}</h1>
            <div className="container">
                <Paragraph json={qqwe.p0} gap={2}/>
                <Paragraph json={qqwe.p1} gap={2} prefix={icon}/>
            </div>
        </div>
    )
}

export default HowItWorks
