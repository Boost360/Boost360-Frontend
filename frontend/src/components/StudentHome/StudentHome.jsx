import React from "react";
import StudentHomeCard from "./StudentHomeCard";
import './StudentHome.css';

export default function StudentHome(){
    return(
        <div className="StudentHomeMain">
            <div className="StudentHomeContainer">
                <StudentHomeCard></StudentHomeCard>
                <StudentHomeCard></StudentHomeCard>
                <StudentHomeCard></StudentHomeCard>
                <StudentHomeCard></StudentHomeCard>
                
                <StudentHomeCard></StudentHomeCard>
                <StudentHomeCard></StudentHomeCard>
                <StudentHomeCard></StudentHomeCard>
                <StudentHomeCard></StudentHomeCard>

            </div>
        </div>
    )
}