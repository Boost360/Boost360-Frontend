import React from 'react'
import './Module.css'

export default function Module ({detail, i}) {
    const handleCopy = () => {
        // @todo Can't access clipboard string. 
        // Issue @00001 [12/oct/2021 @Sarah]
        // navigator.clipboard.writeText(detail.link); 
    };
    const handleClick = () => {
        // @todo show redirect modal animation 
        // [12/oct/2021 @Sarah]
        // window.location.href = detail.link;
    };
    return (
        <div className="module" key={i}>
                <div className="title" 
                    style={{backgroundColor: detail.color}}
                    onClick={handleClick}
                >
                        {detail.title}
                </div>

            <div className="container">
                <img 
                    src={detail.icon} 
                    alt={detail.icon} 
                    className="icon" 
                    onClick={handleClick}
                />
            </div>

            <div className="container">
                <div className="copyLink" onClick={handleCopy}>
                    <span className='copy'>LINK</span>
                    <span className='link'>{detail.link}</span>
                </div>
            </div>
        </div>
    );
};
