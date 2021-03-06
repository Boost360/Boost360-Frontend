import React, {useEffect, useState} from "react";
import './HomePage.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { GrLinkedinOption } from "react-icons/gr";
import WechatModal from "../QRModal/WechatModal";
import KakaotalkModal from "../QRModal/KakaotalkModal";
import Trapezium from '../../static/img/Home_background.svg';
import Golfer from '../../static/img/Golfer.png';

export default function HomePage() {
    const [showWechat, setShowWechat] = useState(false);
    const [showKakaotalk, setShowKakaotalk] = useState(false);
    return (
        <div className="HomePage">
            <img className="golfer" src={Golfer} alt=""/>
            <div className="HomePageBody"> 
                <h1><em>Boost</em> <br /> Performance</h1>
                <img src={Trapezium} alt=""/>
            </div>

            
            <IconContext.Provider value={{ size: "24px" }}>
                <div className="HomePagelink">
                    <div className="HomeIcon">
                        <AiOutlineWechat  onClick={() => setShowWechat(true)} />
                    </div>
                    <div className="HomeIcon">
                        <RiKakaoTalkLine  onClick={() => setShowKakaotalk(true)} />
                    </div>
                    <div className="HomeIcon">
                        <FaInstagram onClick={() => window.location = 'https://instagram.com/bpgolfacademy?utm_medium=copy_link'} />
                    </div>
                    <div className="HomeIcon">
                        <GrLinkedinOption onClick={() => window.location = 'https://www.linkedin.com/in/rhys-ogden-0197b522b/'} />
                    </div>
                </div>
            </IconContext.Provider>
            {showWechat && <WechatModal handleClose={() => setShowWechat(false)}></WechatModal>}
            {showKakaotalk && <KakaotalkModal handleClose={() => setShowKakaotalk(false)}></KakaotalkModal>}
        </div>
    )
}