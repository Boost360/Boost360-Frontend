import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import './Intro.css'

function Intro({qqwe, graphic}) {
    return (
        <div className='intro'>
            <img src={graphic} alt={graphic}/>
            <h1>{qqwe.h0}</h1>
            <Paragraph json={qqwe.p0} gap={3}/>
        </div>
    )
}

export default Intro
