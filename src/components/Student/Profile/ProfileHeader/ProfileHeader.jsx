import React, { useState } from "react";
import './ProfileHeader.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function ProfileHeader() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit} = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    return(
        <div className="ProfileHeader">
            <a className="ProfileAvatar"></a>
            <div className="ProfileNameSection">
                <div className="ProfileTite">Prisdent</div>
                <div className="ProfileName">Holy</div>
                <div className="ProfileName">Moly</div>
            </div>
            
        </div>
    )
}