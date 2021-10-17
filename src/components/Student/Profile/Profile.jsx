import React, { useState } from "react";
import './Profile.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContact from "./ProfileContact/ProfileContact";
import { profile } from "../../../api/profile/profile";

export default function Profile({user,setUser}) {

    const [profileInfo, setProfile] = React.useState({
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
        setProfile({ ...profileInfo, [prop]: event.target.profileInfo });
    };

    const handleSubChange = (key,value) => {
        setProfile({ ...profileInfo, [key]:value });
    }

    const handleSave = async () => {
        let response = await profile(profileInfo,user._id);
        if (response.status === 200) {
            setUser(response.data)
        }
    }

    return(
        <div className="Profile">
            
            <div className="ProfileContaniner">
                <ProfileHeader profileInfo={profileInfo} handleChange={handleSubChange}/>
                <div className="ProfileBottom">
                    <ProfileInfo profileInfo={profileInfo} handleChange={handleSubChange}></ProfileInfo>
                    <div className="ProfileContactSection">
                        <ProfileContact profileInfo={profileInfo} handleChange={handleSubChange}></ProfileContact>
                        <button className="ProfileSave" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}