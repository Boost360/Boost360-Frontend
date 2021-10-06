import React from "react";
import './ContactInput.css';
import { useTranslation } from "react-i18next";

export default function ContactInput() {
    const { t, i18n } = useTranslation();
    return(
        <div className="ContactInput-section">
            <div className="ContactInput-info">
                <p>{t('contact.info')}</p>
            </div>
            <div className="ContactInput">
                <input placeholder={t('contact.name')}></input>
                <input placeholder={t('contact.email')}></input>
                <textarea placeholder={t('contact.msg')}></textarea>
                <button>{t('contact.send')}</button>
            </div>
        </div>
    )
}