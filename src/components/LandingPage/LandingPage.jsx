import React from "react";
import "./LandingPage.css";
import logo from '../../static/img/logo.png';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LandingPage({user}) {
    const { t, i18n } = useTranslation()


    const handleChangeLang = (lang) => {
        i18n.changeLanguage(lang)


    }

    return (
        <div className="LandingPage">
            <div className="LandingPage-mask">
                <div className="LandingPageheader">
                    <div className="LandingPageicon">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="buttonArea">
                    <div className="enterButton">
                        <Link className="landingButton" to="/index"><span>{t("landing.enter")}</span></Link>
                        {user? <Link className="landingButton" to="/student/home"><span>{t("landing.home")}</span></Link>:
                         <Link className="landingButton" to="/login"><span>{t("landing.login")}</span></Link>}
                       
                    </div>
                    <div className="languagesection">
                        <a onClick={()=>{handleChangeLang('en')}}>English</a>
                        <p />
                        <a onClick={()=>{handleChangeLang('kr')}}>한국어</a>
                        <p />
                        <a onClick={()=>{handleChangeLang('ch')}}>中文</a>
                    </div>
                </div>
            </div>
        </div>

    )
}