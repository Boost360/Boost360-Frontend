import React, {Component} from 'react';
import TeamMember from "./TeamMember/TeamMember";
import {retrieveAllTeams} from "../../../api/team/team"

const TeamMemberMain = () => {

    const [user, setUser] = React.useState([
        {
            name: '',
            role: '',
            partner: false,
            avatar: '',
            tooltip: ''
        }
    ]);

    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let userData = await retrieveAllTeams();
        setUser(userData);
        setLoading(false);
    }, []);

    return (
        <div className='TeamPage_main_container'>
            {user.map((item) => (
                <div className='TeamPage_single_member_container'>
                <TeamMember user={item}/>
            </div>
            ))}
        </div>
    )
};
export default TeamMemberMain;