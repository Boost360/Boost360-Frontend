import React, {Component} from 'react';
import Avatar from '../../../../static/img/avatar05.png';
import RoleBadge from '../../../../static/img/partner.png';

const TeamMember = (props) => {
    let badge_class;
    if (props.user.partner) {
        badge_class = 'TeamPage_member_badge'
    } else {
        badge_class = 'TeamPage_badge_display_none'
    }
    return (
        <div className='TeamPage_single_member'>
            <div className="TeamPage_tooltip">
                Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me
            </div>
            <div className='TeamPage_member_avatar'>
                <img src={props.user.avatar.default}/>
            </div>

            <div className='TeamPage_name_container'>
                <div className='TeamPage_member_name'>
                    {props.user.name}
                </div>
                <div className={badge_class}>
                    <img src={RoleBadge}/>
                </div>
            </div>
            <div className='TeamPage_role_container'>
                <div className='TeamPage_member_role'>
                    {props.user.role}
                </div>
            </div>

        </div>
    )
};
export default TeamMember;