import React, {Component} from 'react';
import TeamMember from "./TeamMember/TeamMember";

const TeamMemberMain = () => {
    const user1 = {
        name: 'Jasper Ruan',
        role: 'Role',
        partner: true,
        avatar: require('../../../static/img/avatar05.png'),
        tooltip: '1Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user2 = {
        name: 'Angela Chien',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar03.png'),
        tooltip: '2Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user3 = {
        name: 'Ollie Chien',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar07.png'),
        tooltip: 'Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user4 = {
        name: 'Zach Wang',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar07.png'),
        tooltip: 'Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user5 = {
        name: 'Yifei Liu',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar01.png'),
        tooltip: 'Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user6 = {
        name: 'Dilire Ba',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar06.png'),
        tooltip: 'Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user7 = {
        name: 'Yuan Gao',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar02.png'),
        tooltip: 'Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    const user8 = {
        name: 'Shishi Liu',
        role: 'Role',
        partner: false,
        avatar: require('../../../static/img/avatar02.png'),
        tooltip: 'Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me Hover over me'
    }
    return (
        <div className='TeamPage_main_container'>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user1}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user2}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user3}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user4}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user5}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user6}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user7}/>
            </div>
            <div className='TeamPage_single_member_container'>
                <TeamMember user={user8}/>
            </div>
        </div>
    )
};
export default TeamMemberMain;