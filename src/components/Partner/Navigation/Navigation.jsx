import React, {Component} from 'react';



const Navigation = ({partner}) => {
    
    function goToPartnerDetail(partner_id){
        document.getElementById(partner_id).scrollIntoView();
    }

    return (
        <div className='partner_page_navigation_container'>
            {partner.map((item) => (
                <div onClick={()=>{goToPartnerDetail(item._id)}} className='navigation_partner_image_container'>
                    {/* if just use onClick={goToPartnerDetail(item._id)}, the page will print everything, must use an arrow funtion here */}
                    <img src={item.partnerLogo}/>
                </div>
            ))}
        </div>
        
    )
};
export default Navigation;