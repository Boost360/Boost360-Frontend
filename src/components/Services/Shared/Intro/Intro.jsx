import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import './Intro.css'

function Intro({data, graphic}) {
    return (
        <div className='intro'>
            <img src={graphic} alt={graphic}/>
            <h1>{data.h0}</h1>
            <Paragraph json={data.p0} gap={3}/>
        </div>
    )
}

export default Intro
