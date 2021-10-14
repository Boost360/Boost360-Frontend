import React from "react";
import './StudentHome.css';
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

export default function StudentHomeCard({title, icon, path}){
    return(
        <div className="StudentHomeCard">
            <div className="StudentHomeCardBoarder">
                <Link to={path}>
                <IconContext.Provider value={{ size: "32px" }}>
                        <div className="StudentHome-SocialIcon">
                            {icon}
                        </div>
                </IconContext.Provider>
                </Link>
            </div>
            <div className="StudentHomeCardText">
                {title}
            </div>

        </div>
    )
}