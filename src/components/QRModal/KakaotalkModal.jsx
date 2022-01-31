import React from 'react'
import kakaotalk_en from '../../static/img/kakaotalk_en.jpg'
import kakaotalk_kr from '../../static/img/kakaotalk_kr.jpg'

function KakaotalkModal({ handleClose, lang='en' }) {
    return (
        <div onClick={handleClose} style={{ width: '100vw', height: '100vh', position: 'fixed', top: '0px', left: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.5)' }}>
            <img style={{ height: '50vh', padding: '50px' }} src={lang == 'kr' ? kakaotalk_kr : kakaotalk_en} alt="kakaotalk QR code" />
        </div>
    )
}

export default KakaotalkModal
