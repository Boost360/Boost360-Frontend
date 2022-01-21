import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import './Intro.css'

function Intro({data, graphic=null, graphicStyle={}}) {
    return (
        <div className="intro">
            {graphic && <img src={graphic} alt={graphic} style={graphicStyle}/>}
            {data.h0 && <h1>{data.h0}</h1>}
            {data.p0 &&  <Paragraph json={data.p0} gap={1}/>}
            {data.content &&  <p>{data.content}</p>}
            {data.note && <h3>{data.note}</h3>}
        </div>
    )
}

export default Intro
