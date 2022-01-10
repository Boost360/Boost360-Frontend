import React, {useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import './HomePage.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Background_webm from '../../static/img/Home_background.webm';

export default function HomePage() {
    useEffect(() => {
        // set background video playback speed before mount
        document.getElementById('background_video').playbackRate = '1.8';
        return () => {
        }
    }, [])
    return (
        <div className="HomePage">
            <video id='background_video' src={Background_webm} autoPlay loop playsInline muted></video>
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