import React from "react";
import NavBar from "../NavBar/NavBar";
import './HomePage.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function HomePage() {
    return (
        <div className="HomePage">

            <div className="HomePagebody">
                <div className="messageHome">
                    <p><span>B</span>oost your <span>P</span>erformance</p>
                </div>
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