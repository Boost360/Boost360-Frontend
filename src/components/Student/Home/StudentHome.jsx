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


export default function StudentHome({setUser}){
    const cards = [
        {title: "Profile", icon: <AiOutlineUser />, path:"/student/profile"},
        {title: "Schedule", icon: <AiOutlineProfile />, path:"/student/schedule"}, ,
        {title: "Result", icon: <AiOutlineCheck />, path:"/student/result"},
        {title: "Modules", icon: <AiOutlineSnippets />, path:"/student/modules"},
        {title: "Equipment", icon: <AiOutlineWarning />, path:"/student/equipment"},
        {title: "Video library", icon: <AiOutlineVideoCamera />, path:"/student/video-library"},
        {title: "Development Program", icon: <AiOutlineSnippets />, path: '/student/development-program'},
    ]
    return(
        <div className="StudentHomeMain">
            <div className="StudentHomeContainer">
                <ul>
                    {cards.map((card) =>
                        <StudentHomeCard title={card.title} icon={card.icon} path={card.path}></StudentHomeCard>
                    )}
                    <StudentHomeLogout setUser={setUser}></StudentHomeLogout>
                </ul>
            </div>
        </div>
    )
}