import React, { useState } from "react";
import './Profile.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContact from "./ProfileContact/ProfileContact";

export default function Profile({user}) {

    const [profile, setProfile] = React.useState({
        avatar: user.avatar,
        firstName: user.firstName,
        secondName: user.secondName,
        ethnicity: user.ethnicity,
        dob: user.dob,
        address: user.address,
        mobile: user.mobile,
        email: user.email,
        medicalCondition: user.medicalCondition,
        club: user.club,
        yearsPlaying: user.yearsPlaying,
        school: user.school,
        schoolYear: user.schoolYear,
        contact1Name: user.contact1Name,
        contact1Relationship: user.contact1Relationship,
        contact1Mobile: user.contact1Mobile,
        contact1Email: user.contact1Email,
        contact2Name: user.contact2Name,
        contact2Relationship: user.contact2Relationship,
        contact2Mobile: user.contact2Mobile,
        contact2Email: user.contact2Email,
    });

    const handleChange = (prop) => (event) => {
        setProfile({ ...profile, [prop]: event.target.profile });
    };

    const handleSubChange = (key,value) => {
        setProfile({ ...profile, [key]:value });
    }


    const handleSave = ()=>{
        console.log(profile)
    }

    return(
        <div className="Profile">
            <div className="ProfileContaniner">
                <ProfileHeader profile={profile} handleChange={handleSubChange}/>
                <div className="ProfileBottom">
                    <ProfileInfo profile={profile} handleChange={handleSubChange}></ProfileInfo>
                    <div className="ProfileContactSection">
                        <ProfileContact profile={profile} handleChange={handleSubChange}></ProfileContact>
                        <button className="ProfileSave" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}