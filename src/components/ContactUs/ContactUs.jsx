import React from "react";
import './ContactUs.css';
import ContactUsName from "./Name/ContactUsName";
import ContactInfo from "./Info/ContactInfo";
import ContactInput from "./Input/ContactInput";


export default function ContactUs() {
    return(
        <div className="ContactPage">        
            <div className="ContactPage-mask">
                <div className="ContactUsSectionBox">
                    <ContactUsName/>
                    <ContactInfo/>
                    <ContactInput/>
                </div>
            </div>
        </div>
    )
}