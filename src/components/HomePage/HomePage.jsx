import React, {useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import './HomePage.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Background_webm from '../../static/img/Home_background.webm';
import WechatModal from "../WechatModal/WechatModal";

export default function HomePage() {
    useEffect(() => {
        // set background video playback speed before mount
        document.getElementById('background_video').playbackRate = '1.8';
        return () => {
        }
    }, [])
    const [showWechat, setShowWechat] = useState(false);
    return (
        <div className="HomePage">
            <video id='background_video' src={Background_webm} autoPlay loop playsInline muted></video>
            <IconContext.Provider value={{ size: "24px" }}>
                <div className="HomePagelink">
                    <div className="HomeIcon">
                        <AiOutlineWechat  onClick={() => setShowWechat(true)} />
                    </div>
                    <div className="HomeIcon">
                        <RiKakaoTalkLine onClick={() => window.location = ''} />
                    </div>
                    <div className="HomeIcon">
                        <FaInstagram onClick={() => window.location = 'https://instagram.com/bpgolfacademy?utm_medium=copy_link'} />
                    </div>
                </div>
            </IconContext.Provider>
            {showWechat && <WechatModal handleClose={() => setShowWechat(false)}></WechatModal>}
        </div>
    )
}