import React, { useState } from "react";
import "./LandingPage.css";
import logo from '../../static/img/logo/bottom_text_white.svg';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import GolfAnimation from './GolfAnimation';
// import Background_png from '../../static/img/Landing_background.png';
// import Background_mp4 from '../../static/img/Landing_background.mp4';
// import Background_webm from '../../static/img/Landing_background.webm';

export default function LandingPage({user}) {
    const { t, i18n } = useTranslation()
    const [lang, setLang] = useState(i18n.language);

    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang)
        setLang(lang);

    }

    return (
        <div className="LandingPage">
            {/* <video poster={Background_png} autoPlay loop playsInline muted>
                <source src={Background_webm} type="video/webm"/>
                <source src={Background_mp4} type="video/mp4"/>
            </video> */}
            {/* <GolfAnimation></GolfAnimation> */}
            <div className="LandingPage-mask">
                <div className="buttonArea">
                    <div className="LandingPageicon">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="enterButton">
                        <Link className="landingButton" to="/remote-learning"><span>{t("landing.enter")}</span></Link>
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