import React from "react";
import "./LandingPage.css";
import logo  from '../../static/img/logo.png';

export default function LandingPage(){
    return(
        <div className="LandingPage">
            <div className="LandingPageheader">
                <div className="LandingPageicon">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className="buttonArea">
                <div className="enterButton">
                    <button className="landingButton"><span>Enter Site</span></button> 
                    <button className="landingButton"><span>Student Login</span></button>
                </div>                
                <div className="languages">
                <a>English</a>
                <p>|</p>
                <a>한국어</a>
                <p>|</p>
                <a>中文</a>
            </div>
            </div>
        </div>

    )
}