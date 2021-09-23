import React, {Component} from 'react';
import partner_logo_1 from '../../../static/img/partner.png';

function goToPartnerDetail(event){
    const partner_detail_id = event.target.id;
    switch (partner_detail_id) {
        case 'partner_page_logo_1':
            document.getElementById('partner_detail_1').scrollIntoView();
            break;
        case 'partner_page_logo_2':
            document.getElementById('partner_detail_2').scrollIntoView();
            break;
        case 'partner_page_logo_3':
            document.getElementById('partner_detail_3').scrollIntoView();
            break;
        case 'partner_page_logo_4':
            document.getElementById('partner_detail_4').scrollIntoView();
            break;
        case 'partner_page_logo_5':
            document.getElementById('partner_detail_5').scrollIntoView();
            break;
        default:
            console.log('Error');
    }
}




const Navigation = () => {
    return (
        <div className='navigation_container'>
            <div onMouseEnter={goToPartnerDetail} id='partner_page_logo_1' className='navigation_partner_image_container'>
                <img src={partner_logo_1}/>
            </div>
            <div onMouseEnter={goToPartnerDetail}  className='navigation_partner_image_container' id='partner_page_logo_2' >
                <img src={partner_logo_1}/>
            </div>
            <div onMouseEnter={goToPartnerDetail}  className='navigation_partner_image_container' id='partner_page_logo_3' >
                <img src={partner_logo_1}/>
            </div>
            <div onMouseEnter={goToPartnerDetail}  className='navigation_partner_image_container' id='partner_page_logo_4' >
                <img src={partner_logo_1}/>
            </div>
            <div onMouseEnter={goToPartnerDetail}  className='navigation_partner_image_container' id='partner_page_logo_5' >
                <img src={partner_logo_1}/>
            </div>
        </div>
    )
};
export default Navigation;