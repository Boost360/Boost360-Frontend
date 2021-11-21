import React, {Component} from 'react';
import './Partner.css';
import Main from './Main/Main';
import Navigation from "./Navigation/Navigation";
import {getPartners} from '../../api/partner/partner'
import Skeleton from '@mui/material/Skeleton';

const Partner = () => {

    const [partners, setPartner] = React.useState([
        {
            _id: '',
            partnerLogo: '',
            partnerName: '',
            partnerLink: '',
            partnerInfo: ''
        }
    ]);

    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let partnerData = await getPartners();
        setPartner(partnerData);
        setLoading(false);
    }, []);

    return (
        <div className='partner_container'>
            {
                loading?(
                    <div>
                        <Skeleton variant="rectangular" height={120} />
                        <div className="partner_skeleton">
                            <Skeleton variant="rectangular" height={500} />
                        </div>
                    </div>
                ):(
                    <div>
                        <Navigation partner={partners}/>
                        <div className='partner_main_container'>
                            <Main partner={partners}/>
                        </div>
                    </div>
                )
            }  
        </div>
    )
};
export default Partner;