import React from "react";
import './ContactInfo.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
    const { t, i18n } = useTranslation();

    return(
        <div className="ContactInfo-section">
            <div className="ContactInfo">
                <div>{t('contact.mobile')}</div>
                <p>0211231232</p>
            </div>
            <div className="ContactInfo">
                <div>{t('contact.email')}</div>
                <p>cykablyat@123.com</p>
            </div>
            <div className="ContactInfo">
                <div>{t('contact.address')}</div>
                <p>{t('contact.address-content')}</p>
            </div>
            <IconContext.Provider value={{ size: "24px" }}>
                <div className="ContactInfo-Social">
                    <div className="ContactInfo-SocialIcon">
                        <AiOutlineWechat className='cIcon'/>
                        <p>
                            cyka_blyat
                        </p>
                    </div>
                    <div className="ContactInfo-SocialIcon">
                        <RiKakaoTalkLine className='cIcon'/>
                        <p>
                            cyka_blyat
                        </p>
                    </div>
                    <div className="ContactInfo-SocialIcon">
                        <FaInstagram className='cIcon'/>
                        <p>
                            cyka_blyat
                        </p>
                    </div>
                </div>
            </IconContext.Provider>

        </div>
    )
}