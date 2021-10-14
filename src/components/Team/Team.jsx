import React, {Component} from 'react';
import TeamNavigation from './TeamNavigation/TeamNavigation';
import TeamImageBanner from './TeamImageBanner/TeamImageBanner';
import TeamMemberMain from './TeamMemberMain/TeamMemberMain';

import './Team.css';

const Team = () => {
    return (
        <div className='about_us_container'>
            <TeamNavigation/>
            <TeamImageBanner/>
            <TeamMemberMain/>
        </div>
    )
};
export default Team;