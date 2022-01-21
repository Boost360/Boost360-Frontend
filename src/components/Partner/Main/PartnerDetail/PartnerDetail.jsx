import React from 'react';
import {useTranslation} from 'react-i18next'

const PartnerDetail = ({partner}) => {
    const { t, i18n } = useTranslation();
    let lang = i18n.language

    return (
        <div className='partner_detail_container'>
            <div className='partner_detail_logo_container'>
                <img src={partner.partnerLogo}/>
            </div>
            <div className='partner_detail_content_container'>

                <div className='partner_detail_content_pharagrah'>
                  
                    {(() => {
                        switch (lang) {
                            case "en": return partner.partnerInfo;
                            case "ch": return (!partner.partnerInfo_ch ? partner.partnerInfo : partner.partnerInfo_ch);
                            case "kr": return (!partner.partnerInfo_kr ? partner.partnerInfo: partner.partnerInfo_kr);
                            default: return partner.partnerInfo;
                        }
                    })()}
                </div>
                <div className='partner_detail_website_link_container'>
                    <a href={partner.partnerLink}>website link</a>
                </div>
            </div>
        </div>
    )
};
export default PartnerDetail;