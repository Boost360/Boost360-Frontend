import React from "react";
import './ContactInput.css';

export default function ContactInput() {
    return(
        <div className="ContactInput-section">
            <div className="ContactInput-info">
                <p>If you have any questions about our services, please fill in the box below, we are happy to help.</p>
            </div>
            <div className="ContactInput">
                <input placeholder="Name"></input>
                <input placeholder="Email"></input>
                <textarea placeholder="Message"></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}