import React from 'react'
import './Framework.css'
import Paragraph from '../Paragraph/Paragraph'

function Framework({data, ver=0}) {
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
            {Object.keys(data.blocks ? data.blocks : {}).map((key)=>(<Block block={data.blocks[key]} key={key}/>))}
        </div>
    )
}

export default Framework
