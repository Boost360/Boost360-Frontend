import React from 'react'
import './StudentModules.css'
import Icon_swing from '../../../static/icon/swing.svg';
import Icon_flag from '../../../static/icon/flag.svg';
import Icon_irons from '../../../static/icon/irons.svg';
import Module from './Module/Module';

export default function StudentModules() {
    const module_details = [
        {
            title: 'Golf Equipment',
            icon: Icon_irons,
            link: 'https://id.articulate.com/',
            color: 'var(--palette1)'
        },
        {
            title: 'Golf Course Knowledge',
            icon: Icon_flag,
            link: 'https://id.articulate.com/',
            color: 'var(--palette2)'
        },
        {
            title: 'Golf Swing Technique',
            icon: Icon_swing,
            link: 'https://id.articulate.com/',
            color: 'var(--palette3)'
        }
    ];

    return (
        <div className='studentModules'>
            <div className="layout">
                {module_details.map( (detail, i) => (<Module detail={detail} key={i}/>) )}
            </div>
            
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>        
        </div>
    )
}
