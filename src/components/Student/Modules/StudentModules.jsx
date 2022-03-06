import React from 'react'
import './StudentModules.css'
import Module from './Module/Module';
import Equipment_en from '../../../static/img/Programs/Equipment_en.jpg'
import Course_en from '../../../static/img/Programs/Course_en.jpg'
import SwingShort_en from '../../../static/img/Programs/SwingShort_en.jpg'
import SwingLong_en from '../../../static/img/Programs/SwingLong_en.jpg'

export default function StudentModules() {
    const module_details = [
        {
            title: 'BP Golf Equipment',
            link: 'https://id.articulate.com/',
            img: Equipment_en
        },
        {
            title: 'BP The Golf Course',
            link: 'https://id.articulate.com/',
            img: Course_en
        },
        {
            title: 'BP Building your Short Game',
            link: 'https://id.articulate.com/',
            img: SwingShort_en
        },
        {
            title: 'BP Building your Long Game',
            link: 'https://id.articulate.com/',
            img: SwingLong_en
        }
    ];

    return (
        <div className='studentModules'>
            <div>
            <div className="layout">
                {module_details.map( (detail, i) => (<Module detail={detail} key={i}/>) )}
            </div>
            
            {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p> */}

            </div>
                    
        </div>
    )
}
