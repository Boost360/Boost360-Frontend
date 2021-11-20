import React, { useState } from "react";
import './ProfileContact.css';
import '../ProfileInfo/ProfileInfo.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function ProfileContact({profileInfo, handleChange}) {
    const { t, i18n } = useTranslation();

    

    return(
        <div className="ProfileContactWrapper">
            <div className="ProfileContact">
                <p className="contactTitle">* Contact</p>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Name" value={profileInfo.contact1Name} onChange={(e)=>{handleChange('contact1Name',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Relationship" value={profileInfo.contact1Relationship} onChange={(e)=>{handleChange('contact1Relationship',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Mobile" value={profileInfo.contact1Mobile} onChange={(e)=>{handleChange('contact1Mobile',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Email" value={profileInfo.contact1Email} onChange={(e)=>{handleChange('contact1Email',e.target.value)}}></input>
                </div>
            </div>
            <div className="ProfileContact">
                <p className="contactTitle">* Contact</p>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Name" value={profileInfo.contact2Name} onChange={(e)=>{handleChange('contact2Name',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Relationship" value={profileInfo.contact2Relationship} onChange={(e)=>{handleChange('contact2Relationship',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Mobile" value={profileInfo.contact2Mobile} onChange={(e)=>{handleChange('contact2Mobile',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Email" value={profileInfo.contact2Email} onChange={(e)=>{handleChange('contact2Email',e.target.value)}}></input>
                </div>
            </div>

        </div>
        
    )
}