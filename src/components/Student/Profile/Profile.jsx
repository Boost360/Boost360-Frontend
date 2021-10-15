import React, { useState } from "react";
import './Profile.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileContact from "./ProfileContact/ProfileContact";

export default function Profile() {

    const { register, handleSubmit} = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    return(
        <div className="Profile">
            <div className="ProfileContaniner">
                <ProfileHeader/>
                <div className="ProfileBottom">
                    <ProfileInfo></ProfileInfo>
                    <div className="ProfileContactSection">
                        <ProfileContact></ProfileContact>
                        <ProfileContact></ProfileContact>
                        <button className="ProfileSave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}