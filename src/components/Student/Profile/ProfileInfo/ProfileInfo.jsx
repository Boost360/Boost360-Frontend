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
                <p className="ProfileMustInput"> </p>
                <select className="ProfileSelect" {...register("Ethnicity")}>
                    <option value="" disabled selected>Ethnicity</option>
                    <option value="human">Human</option>
                    <option value="alien">Alien</option>
                    <option value="other">other</option>
                </select>
            </div>
            
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input {...register("Address")} className="ProfileInput" placeholder="Address"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input {...register("Mobile")} className="ProfileInput" placeholder="Mobile"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input {...register("Email")} className="ProfileInput" placeholder="Email"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput"> </p>
                <input {...register("MedicalCondition")} className="ProfileInput" placeholder="Medical condition"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <input {...register("GolfClub")} className="ProfileInput" placeholder="Golf club"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput">*</p>
                <select className="ProfileSelect" {...register("YearPlay")}>
                    <option value="" disabled selected>Years playing golf</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="other">other</option>
                </select>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput"> </p>
                <input {...register("School")} className="ProfileInput" placeholder="School"></input>
            </div>
            <div className="ProfileInputSection">
                <p className="ProfileMustInput"> </p>
                <select className="ProfileSelect" {...register("SchoolYear")}>
                    <option value="" disabled selected>School year</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="other">other</option>
                </select>
            </div>
        </div>
    )
}