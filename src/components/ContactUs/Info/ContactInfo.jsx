import React, { useState } from "react";
import './ContactInfo.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";
import WechatModal from "../../WechatModal/WechatModal";

export default function ContactInfo() {
    const { t, i18n } = useTranslation();
    const [showWechat, setShowWechat] = useState(false);
    return (
        <div className="ContactInfo">
            <div className="ContactInfo-section">
                <div>{t('contact.info.mobile')}</div>
                <p>{t('contact.info.mobile-content')}</p>
            </div>
            <div className="ContactInfo-section">
                <div>{t('contact.info.email')}</div>
                <p>{t('contact.info.email-content')}</p>
            </div>
            <div className="ContactInfo-section">
                <div>{t('contact.info.address')}</div>
                <p>{t('contact.info.address-content')}</p>
            </div>
            <IconContext.Provider value={{ size: "24px" }}>
                <div className="ContactInfo-Social">
                    {(i18n.language === 'ch' || i18n.language === 'en') && // display wechat when lang is chinese or english
                        <div className="ContactInfo-SocialIcon">
                            <AiOutlineWechat className='cIcon' onClick={() => setShowWechat(true)} />
                            <p>
                                {t('contact.info.wechat-id')}
                            </p>
                        </div>
                    }
                    {(i18n.language === 'kr' || i18n.language === 'en') && // display wechat when lang is korean or english
                        <div className="ContactInfo-SocialIcon">
                            <RiKakaoTalkLine className='cIcon' onClick={() => window.location = ''} />
                            <p>
                                {t('contact.info.kakao-id')}
                            </p>
                        </div>
                    }
                    <div className="ContactInfo-SocialIcon">
                        <FaInstagram className='cIcon' onClick={() => window.location = 'https://instagram.com/bpgolfacademy?utm_medium=copy_link'} />
                        <p>
                            {t('contact.info.instagram-id')}
                        </p>
                    </div>
                </div>
            </IconContext.Provider>

            {showWechat && <WechatModal handleClose={() => setShowWechat(false)}></WechatModal>}
        </div>
    )
}