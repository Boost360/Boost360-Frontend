import React, { useState } from "react";
import './ProfileContact.css';
import '../ProfileInfo/ProfileInfo.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function ProfileContact({profile, handleChange}) {
    const { t, i18n } = useTranslation();

    

    return(
        <div>
            <div className="ProfileContact">
                <p className="contactTitle">* Contact</p>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Name" value={profile.contact1Name} onChange={(e)=>{handleChange('contact1Name',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Relationship" value={profile.contact1Relationship} onChange={(e)=>{handleChange('contact1Relationship',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Mobile" value={profile.contact1Mobile} onChange={(e)=>{handleChange('contact1Mobile',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Email" value={profile.contact1Email} onChange={(e)=>{handleChange('contact1Email',e.target.value)}}></input>
                </div>
            </div>
            <div className="ProfileContact">
                <p className="contactTitle">* Contact</p>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Name" value={profile.contact2Name} onChange={(e)=>{handleChange('contact2Name',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Relationship" value={profile.contact2Relationship} onChange={(e)=>{handleChange('contact2Relationship',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Mobile" value={profile.contact2Mobile} onChange={(e)=>{handleChange('contact2Mobile',e.target.value)}}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Email" value={profile.contact2Email} onChange={(e)=>{handleChange('contact2Email',e.target.value)}}></input>
                </div>
            </div>

        </div>
        
    )
}