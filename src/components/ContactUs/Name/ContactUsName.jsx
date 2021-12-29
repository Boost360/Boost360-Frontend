import React from "react";
import './ContactUsName.css';
import {useTranslation} from 'react-i18next';

export default function ContactUsName() {
    const {t} = useTranslation();
    return(
        <div className="ContactName-section">
            <div className="ContactName-name">
                <div>
                    {t('contact.name.first-name')}
                </div>
                <div>
                    {t('contact.name.last-name')}
                </div>
            <p className="nameline"></p>
            </div>
        </div>
    )
}