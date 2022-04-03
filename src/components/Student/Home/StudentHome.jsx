import React from "react";
import StudentHomeCard from "./StudentHomeCard";
import StudentHomeLogout from "./StudentHomeLogout";
import './StudentHome.css';

// icons
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineProfile } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineSnippets } from 'react-icons/ai';
import { AiTwotoneCalendar } from 'react-icons/ai';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';


export default function StudentHome({setUser}){
    const cards = [
        {title: "Profile", icon: <AiOutlineUser />, path:"/student/profile"},
        {title: "Schedule", icon: <AiTwotoneCalendar />, path:"/student/schedule"}, ,
        {title: "Result", icon: <AiOutlineCheck />, path:"/student/results"},
        {title: "Modules", icon: <BsBook />, path:"/student/modules"},
        {title: "Lessons", icon: <AiOutlineProfile />, path:"/student/lesson"},
        {title: "Video Library", icon: <AiOutlineVideoCamera />, path:"/student/video-library"},
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