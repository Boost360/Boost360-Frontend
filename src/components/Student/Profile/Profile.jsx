import React, { useState } from "react";
import './Profile.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContact from "./ProfileContact/ProfileContact";

export default function Profile() {

    const [profile, setProfile] = React.useState({
        nationality: '',
        dob: '',
        address: '',
        mobile: '',
        email: '',
        medCond: '',
        golfClub: '',
        playYear: '',
        school: '',
        schoolYear: '',
        name1: '',
        relationship1: '',
        mobile1: '',
        email1: '',
        name2: '',
        relationship2: '',
        mobile2: '',
        email2: '',
    });

    const handleChange = (prop) => (event) => {
        setProfile({ ...profile, [prop]: event.target.profile });
        console.log(profile)
    };

    return(
        <div className="Profile">
            <div className="ProfileContaniner">
                <ProfileHeader/>
                <div className="ProfileBottom">
                    <ProfileInfo profile={profile} handleChange={handleChange}></ProfileInfo>
                    <div className="ProfileContactSection">
                        <ProfileContact profile={profile} handleChange={handleChange}></ProfileContact>
                        <button className="ProfileSave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}