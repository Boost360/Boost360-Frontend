import React from 'react'
import './Keypoint.css'

export default function Keypoint({ title, description, icon }) {
    return (
        <div className='keypoint'>
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}
