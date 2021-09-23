import React from "react";

const Location = () => {
    return (
        <div className='flex mobile_grid'>
            <div className='left_column'>
                <span className='title_underlined'>Location</span>
            </div>
            <div className='right_column'>
                <div className='paragraph'>
                    Waitakere Gold Course: 35 Falls Road, <br/> Waitakere, Auckland, New Zealand
                </div>
                <div className='location_map_container'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102131.58739300423!2d174.47556420128257!3d-36.87571037994611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d6c7f4d76e31b%3A0xb4372e2c9def7953!2s35%20Falls%20Road%2C%20Wait%C4%81kere%2C%20Auckland%200781!5e0!3m2!1sen!2snz!4v1632221589526!5m2!1sen!2snz"
                        style={{border:0}}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    )
};
export default Location;