import React, {Component} from 'react';
import TeamImageBanner from './TeamImageBanner/TeamImageBanner';
import TeamMemberMain from './TeamMemberMain/TeamMemberMain';

import './Team.css';

const Team = () => {
    return (
        <div className='about_us_container'>
            <TeamImageBanner text='Auckland'/>
            <TeamMemberMain/>
        </div>
    )
};
export default Team;