import React from "react";
import StudentHomeCard from "./StudentHomeCard";
import StudentHomeLogout from "./StudentHomeLogout";
import './StudentHome.css';

// icons
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineProfile } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineSnippets } from 'react-icons/ai';
import { AiOutlineWarning } from 'react-icons/ai';
import { AiOutlineVideoCamera } from 'react-icons/ai';


export default function StudentHome(){
    const cards = [
        {title: "Profile", icon: <AiOutlineUser />},
        {title: "Schedule", icon: <AiOutlineProfile />},
        {title: "Result", icon: <AiOutlineCheck />},
        {title: "Modules", icon: <AiOutlineSnippets />},
        {title: "Equipment", icon: <AiOutlineWarning />},
        {title: "Video library", icon: <AiOutlineVideoCamera />},
        {title: "Development Program", icon: <AiOutlineSnippets />},
    ]
    return(
        <div className="StudentHomeMain">
            <div className="StudentHomeContainer">
                <ul>
                    {cards.map((card) =>
                        <StudentHomeCard title={card.title} icon={card.icon}></StudentHomeCard>
                    )}
                    <StudentHomeLogout></StudentHomeLogout>
                </ul>
            </div>
        </div>
    )
}