import React, {Component} from 'react';
import TeamMember from "./TeamMember/TeamMember";
import {retrieveAllTeams} from "../../../api/team/team"
import Skeleton from '@mui/material/Skeleton';
import { margin } from '@mui/system';

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
            
            {
                loading?(
                    <div className="team_loading">
                        <div className="team_loading_avatar">
                            <Skeleton variant="circular" height={200} width={200} />
                            <Skeleton variant="rectangular" height={80} width={200} style={{marginTop:'50px'}}/>
                        </div>
                        <div className="team_loading_avatar">
                            <Skeleton variant="circular" height={200} width={200} />
                            <Skeleton variant="rectangular" height={80} width={200} style={{marginTop:'50px'}}/>
                        </div>
                        <div className="team_loading_avatar">
                            <Skeleton variant="circular" height={200} width={200} />
                            <Skeleton variant="rectangular" height={80} width={200} style={{marginTop:'50px'}}/>
                        </div>
                        <div className="team_loading_avatar">
                            <Skeleton variant="circular" height={200} width={200} />
                            <Skeleton variant="rectangular" height={80} width={200} style={{marginTop:'50px'}}/>
                        </div>
                    </div>
                ):(
                    <div>
                        {user.map((item) => (
                            <div className='TeamPage_single_member_container'>
                            <TeamMember user={item}/>
                        </div>
                        ))}
                    </div>
                )
            }  
        </div>
    )
};
export default TeamMemberMain;