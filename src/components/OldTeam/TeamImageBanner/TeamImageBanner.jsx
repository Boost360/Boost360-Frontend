import React, {Component} from 'react';
import TeamPageBannerImage from '../../../static/img/team-auckland.png';


const TeamImageBanner = ({text}) => {
    return (
        <div className='TeamPage_banner_image'>
            {text}
        </div>
    )
};
export default TeamImageBanner;