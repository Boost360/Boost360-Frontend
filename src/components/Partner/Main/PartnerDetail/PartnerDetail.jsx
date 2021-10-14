import React, {Component} from 'react';
import partner_logo from '../../../../static/img/partner.png'

const PartnerDetail = () => {
    return (
        <div className='partner_detail_container'>
            <div className='partner_detail_logo_container'>
                <img src={partner_logo}/>
            </div>
            <div className='partner_detail_content_container'>
                <div className='partner_detail_content_pharagrah'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className='partner_detail_website_link_container'>
                    <a>website link</a>
                </div>
            </div>
        </div>
    )
};
export default PartnerDetail;