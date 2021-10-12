import React from "react";
import './StudentHome.css';
import { IconContext } from "react-icons/lib";

export default function StudentHomeCard({title, icon}){
    return(
        <div className="StudentHomeCard">
            <div className="StudentHomeCardBoarder">
                <IconContext.Provider value={{ size: "32px" }}>
                        <div className="StudentHome-SocialIcon">
                            {icon}
                        </div>
                </IconContext.Provider>
            </div>
            <div className="StudentHomeCardText">
                {title}
            </div>

        </div>
    )
}