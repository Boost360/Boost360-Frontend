import React from "react";
import './ContactInfo.css';
import { AiOutlineWechat } from 'react-icons/ai';
import { RiKakaoTalkLine } from 'react-icons/ri';
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

export default function ContactInfo() {
    return(
        <div className="ContactInfo-section">
            <div className="ContactInfo">
                <div>Mobile</div>
                <p>0211231232</p>
            </div>
            <div className="ContactInfo">
                <div>Email</div>
                <p>cykablyat@123.com</p>
            </div>
            <div className="ContactInfo">
                <div>Address</div>
                <p>123 Cyka rd, Moscow</p>
            </div>
            <IconContext.Provider value={{ size: "24px" }}>
                <div className="ContactInfo-Social">
                    <div className="ContactInfo-SocialIcon">
                        <AiOutlineWechat />
                        <p>
                            cyka_blyat
                        </p>
                    </div>
                    <div className="ContactInfo-SocialIcon">
                        <RiKakaoTalkLine />
                        <p>
                            cyka_blyat
                        </p>
                    </div>
                    <div className="ContactInfo-SocialIcon">
                        <FaInstagram />
                        <p>
                            cyka_blyat
                        </p>
                    </div>
                </div>
            </IconContext.Provider>

        </div>
    )
}