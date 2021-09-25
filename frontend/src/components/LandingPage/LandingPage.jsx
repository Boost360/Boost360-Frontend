import React from "react";
import "./LandingPage.css";
import logo  from '../../static/img/logo.png';
import { Link } from "react-router-dom";

export default function LandingPage(){
    return(
        <div className="LandingPage">
            <div className="LandingPage-mask">
            <div className="LandingPageheader">
                <div className="LandingPageicon">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className="buttonArea">
                <div className="enterButton">
                    <Link className="landingButton" to="/site"><span>Enter Site</span></Link> 
                    <Link className="landingButton"><span>Student Login</span></Link>
                </div>                
                <div className="languagesection">
                <a>English</a>
                <p/>
                <a>한국어</a>
                <p/>
                <a>中文</a>
            </div>
            </div>
            </div>
        </div>

    )
}