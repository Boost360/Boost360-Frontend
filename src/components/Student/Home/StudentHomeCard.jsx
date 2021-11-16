import React from "react";
import './StudentHome.css';
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

export default function StudentHomeCard({ title, icon, path }) {
    return (
        <div className="StudentHomeCard">
            <Link to={path}>
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
            </Link>
        </div>
    )
}