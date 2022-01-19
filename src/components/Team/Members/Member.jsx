import React from 'react'
import '../Team.css'
import Paragraph from '../../Services/Shared/Paragraph/Paragraph'
import rhys from '../../../static/img/RhysOgden.png'
import avatar_placeholder from '../../../static/img/avatar.png'
import badge from '../../../static/img/partner.png'
import Skeleton from '@mui/material/Skeleton'


function Member({member}) {
    // Register member name and avatar source here :
    const images = {
        "Rhys Ogden" : rhys
    };
    const avatar = images[member.name] ? images[member.name] : avatar_placeholder;
    return (
        <div className="member">
            <div className="left">
                <img src={avatar} alt={member.name} />
                <div className="name">
                    <p>{member.name}</p> 
                    {member.roleBadge && <img src={badge} alt={`${member.name} badge`} />}
                </div>
                <h2>{member.role}</h2>
            </div>
            <div className="right">
                {member.description ? 
                    <Paragraph json={member.description} gap={2}></Paragraph>
                    :
                    <Skeleton variant="rectangular" height={300} />
                }
            </div>
        </div>
    )
}

export default Member;