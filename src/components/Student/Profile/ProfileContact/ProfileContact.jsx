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
                    <input className="ProfileInput" placeholder="Name" value={profile.name1} onChange={handleChange('name1')}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Relationship" value={profile.relationship1} onChange={handleChange('relationship1')}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Mobile" value={profile.mobile1} onChange={handleChange('mobile1')}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Email" value={profile.email1} onChange={handleChange('email1')}></input>
                </div>
            </div>
            <div className="ProfileContact">
                <p className="contactTitle">* Contact</p>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Name" value={profile.name2} onChange={handleChange('name2')}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Relationship" value={profile.relationship2} onChange={handleChange('relationship2')}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Mobile" value={profile.mobile2} onChange={handleChange('mobile2')}></input>
                </div>
                <div className="ProfileInputSection">
                    <input className="ProfileInput" placeholder="Email" value={profile.email2} onChange={handleChange('email2')}></input>
                </div>
            </div>

        </div>
        
    )
}