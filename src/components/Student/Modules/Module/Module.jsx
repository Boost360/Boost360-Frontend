import React, { useState } from 'react'
import './Module.css'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Snackbar, Alert } from "@mui/material";

export default function Module({ detail, i }) {
    const [isCopied, setIsCopied] = useState(false);
    const onCopy = () => {
        setIsCopied(true);
    }
    const closeAlert = () => {
        setIsCopied(false);
    }
    const handleClick = () => {
        // @todo show redirect modal animation 
        // [12/oct/2021 @Sarah]
        // window.location.href = detail.link;
    };
    return (

        <div className="module" key={i}>
            <Snackbar anchorOrigin={{ 'vertical': 'bottom', 'horizontal': 'center' }} open={isCopied} autoHideDuration={6000} onClose={closeAlert} >
                <Alert onClose={closeAlert} severity="success" sx={{ width: '100%' }}>
                    Copied to clipboard!
                </Alert>
            </Snackbar>

            <div className="title"
                style={{ backgroundColor: detail.color }}
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
                <CopyToClipboard text={detail.link} onCopy={onCopy}>
                    <div className="copyLink">
                        <span className='copy'>COPY</span>
                        <span className='link'>{detail.link}</span>
                    </div>
                </CopyToClipboard>
            </div>
        </div>
    );
};
