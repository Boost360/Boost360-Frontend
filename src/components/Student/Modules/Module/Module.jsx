import React, { useState } from 'react'
import './Module.css'
import LoadingAnimation from './LoadingAnimation'


export default function Module({ detail, i }) {
    const [redirecting, setRedirecting] = useState(false);
    const handleClick = () => {
        setRedirecting(true);
        window.location = detail.link;
    };

    return (
        <div className='module' onClick={handleClick}>
            {redirecting && <LoadingAnimation/>}
            <img src={detail.img} alt={detail.title} />
        </div>
    );
};
