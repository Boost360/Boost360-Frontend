import React from 'react'
import wechat_en from '../../static/img/wechat_en.jpg'
import wechat_ch from '../../static/img/wechat_ch.jpg'

function WechatModal({ handleClose, lang='en' }) {
    return (
        <div onClick={handleClose} style={{ width: '100vw', height: '100vh', position: 'fixed', top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.5)' }}>
            <img style={{ height: '50vh', padding: '50px' }} src={lang == 'ch' ? wechat_ch : wechat_en} alt="wechat QR code" />
        </div>
    )
}

export default WechatModal
