import React from 'react'
import wechat from '../../static/img/wechat.jpg'

function WechatModal({ handleClose }) {
    return (
        <div onClick={handleClose} style={{ width: '100vw', height: '100vh', position: 'fixed', top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.5)' }}>
            <img style={{ height: '50vh', padding: '50px' }} src={wechat} alt="wechat QR code" />
        </div>
    )
}

export default WechatModal
