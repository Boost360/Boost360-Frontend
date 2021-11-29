import React, { useState } from "react";
import "./LandingPage.css";
import logo from '../../static/img/logo/bottom_text_white.svg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GolfAnimation from './GolfAnimation'

export default function LandingPage({user}) {
    const { t, i18n } = useTranslation()
    const [lang, setLang] = useState(i18n.language);

    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang)
        setLang(lang);

    }

    return (
        <div className="LandingPage">
            <GolfAnimation></GolfAnimation>
            <div className="LandingPage-mask">
                <div className="buttonArea">
                    <div className="LandingPageicon">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="enterButton">
                        <Link className="landingButton" to="/index"><span>{t("landing.enter")}</span></Link>
                        {user? <Link className="landingButton" to="/student/home"><span>{t("landing.home")}</span></Link>:
                         <Link className="landingButton" to="/login"><span>{t("landing.login")}</span></Link>}
                       
                    </div>
                    <div className="languagesection">
                        <a onClick={()=>{handleChangeLang('en')}} className={lang === 'en' ? 'highlight' : ''}>English</a>
                        <p />
                        <a onClick={()=>{handleChangeLang('kr')}} className={lang === 'kr' ? 'highlight' : ''}>한국어</a>
                        <p />
                        <a onClick={()=>{handleChangeLang('ch')}} className={lang === 'ch' ? 'highlight' : ''}>中文</a>
                    </div>
                </div>
            </div>
        </div>

    )
}