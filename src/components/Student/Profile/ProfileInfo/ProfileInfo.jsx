import React, { useState } from "react";
import './ProfileInfo.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function ProfileInfo() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit} = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    return(
        <div className="ProfileInfo">
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input className="ProfileInput" placeholder="Address"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input className="ProfileInput" placeholder="Mobile"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input className="ProfileInput" placeholder="Email"></input>
            </div>
            <div className="ProfileInputSection">
                <input className="ProfileInput" placeholder="Medical condition"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input className="ProfileInput" placeholder="Golf club"></input>
            </div>
            <div className="ProfileInputSection">
                <input className="ProfileInput" placeholder="School"></input>
            </div>
        </div>
    )
}