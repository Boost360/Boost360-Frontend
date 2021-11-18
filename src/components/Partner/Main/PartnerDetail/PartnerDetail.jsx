import React, {Component} from 'react';
import partner_logo from '../../../../static/img/partner.png'

const PartnerDetail = ({partner}) => {
    return (
        <div className='partner_detail_container'>
            <div className='partner_detail_logo_container'>
                <img src={partner.partnerLogo}/>
            </div>
            <div className='partner_detail_content_container'>
                <div className='partner_detail_content_pharagrah'>
                    {partner.partnerInfo}
                </div>
                <div className='partner_detail_website_link_container'>
                    <a href={partner.partnerLink}>website link</a>
                </div>
            </div>
        </div>
    )
};
export default PartnerDetail;