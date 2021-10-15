import React, { useState } from "react";
import './ProfileContact.css';
import '../ProfileInfo/ProfileInfo.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function ProfileContact() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit} = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    return(
        <div className="ProfileContact">
            <p className="contactTitle">* Contact</p>
            <div className="ProfileInputSection">
                <input className="ProfileInput" placeholder="Name"></input>
            </div>
            <div className="ProfileInputSection">
                <input className="ProfileInput" placeholder="Relationship"></input>
            </div>
            <div className="ProfileInputSection">
                <input className="ProfileInput" placeholder="Mobile"></input>
            </div>
            <div className="ProfileInputSection">
                <input className="ProfileInput" placeholder="Email"></input>
            </div>

        </div>
    )
}