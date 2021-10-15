import React, { useState } from "react";
import './ContactInput.css';
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";

export default function ContactInput() {
    const { t, i18n } = useTranslation();
    const { register, handleSubmit} = useForm();
    const [contactDetail, setContactDetail] = useState("");
    const onSubmit = (data) => setContactDetail(JSON.stringify(data));

    return(
        <div className="ContactInput-section">
            <div className="ContactInput-info">
                <p>{t('contact.info')}</p>
            </div>
            <div className="ContactInput">
                <input {...register("Name")} placeholder={t('contact.name')}></input>
                <input {...register("Email")} placeholder={t('contact.email')}></input>
                <textarea {...register("Message")} placeholder={t('contact.msg')}></textarea>
                
                <button onClick={handleSubmit(onSubmit)}>{t('contact.send')}</button>
                {/* in this function, it will handle the submit that I made onClick={handleSubmit(onSubmit)} with handleSubmit and onSubmit */}

            </div>
        </div>
    )
}