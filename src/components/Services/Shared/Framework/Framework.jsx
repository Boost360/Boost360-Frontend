import React from 'react'
import './Framework.css'
import Paragraph from '../Paragraph/Paragraph'
import { useTranslation } from 'react-i18next'

function Framework({data, ver=0}) { // 'ver' indicates two different style layouts.
    const {i18n} = useTranslation();
    const Block = ({block}) => {
        return (
            <div className={ver==0 ? 'block' : 'block_1'}>
                <h1>{block.h0}</h1>
                <Paragraph json={block.p0}/>
            </div>
        )
    }
    
    return (
        <div className='framework'>
            <h1>{data.h0}</h1>
            <Paragraph json={data.p0}/>
            {
                Object.keys(data.blocks ? data.blocks : {}).map(
                    (key)=> {
                        // According to the later client specification, hide the 8th 
                        // block ('Golf + English') if the current lang is english.
                        if (i18n.language !== 'en' || key !== "8") {
                            return <Block block={data.blocks[key]} key={key}/>
                        }
                    }
                )
            }
        </div>
    )
}

export default Framework
