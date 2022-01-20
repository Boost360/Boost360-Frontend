import React from 'react'
import '../Team.css'
import badge from '../../../static/img/partner.png'


function Member({ member, lang }) {

    return (
        <div className="member">
            <div className="left">
                <img src={member.avatar} alt={member.name} />
                <div className="name">
                    <p>{member.name}</p>
                    {member.PGA && <img src={badge} alt={`${member.name} badge`} />}
                </div>
                <h2>{member.role}</h2>
            </div>
            <div className="right">
                <p style={{ whiteSpace: 'pre-wrap' }}>
                    {(() => {
                        switch (lang) {
                            case "en": return member.description;
                            case "ch": return (!member.description_ch ? member.description : member.description_ch);
                            case "kr": return (!member.description_kr ? member.description : member.description_kr);
                            default: return member.description;
                        }
                    })()}
                </p>
            </div>
        </div>
    )
}

export default Member;