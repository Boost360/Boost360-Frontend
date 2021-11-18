import React, {Component} from 'react';
import './Partner.css';
import Main from './Main/Main';
import Navigation from "./Navigation/Navigation";
import {getPartners} from '../../api/partner/partner'

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
            <Navigation partner={partners}/>
            <div className='partner_main_container'>
                <Main partner={partners}/>
            </div>
        </div>
    )
};
export default Partner;