import React from "react";
import NavBar from "../NavBar/NavBar";
import './HomePage.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Background_png from '../../static/img/Home_background.png';
import Background_webm from '../../static/img/Home_background.webm';

export default function HomePage() {
    return (
        <div className="HomePage">
            <video poster={Background_png} autoPlay loop playsInline muted>
                <source src={Background_webm} type="video/webm" />
            </video>

            <div className="HomePagebody">
            </div>

            <IconContext.Provider value={{ size: "24px" }}>
                <div className="HomePagelink">
                    <div className="HomeIcon">
                        <AiOutlineWechat />
                    </div>
                    <div className="HomeIcon">
                        <RiKakaoTalkLine />
                    </div>
                    <div className="HomeIcon">
                        <FaInstagram />
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}