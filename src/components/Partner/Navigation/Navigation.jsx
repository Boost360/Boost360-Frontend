import React, {Component} from 'react';
import partner_logo_1 from '../../../static/img/partner.png';


function goToPartnerDetail(partner_detail_id){
}

const Navigation = ({partner}) => {
    
    
    return (
        <div className='partner_page_navigation_container'>
            {partner.map((item) => (
                <div onClick={goToPartnerDetail(item._id)} className='navigation_partner_image_container'>
                    <img src={item.partnerLogo}/>
                </div>
            ))}
        </div>
        
    )
};
export default Navigation;