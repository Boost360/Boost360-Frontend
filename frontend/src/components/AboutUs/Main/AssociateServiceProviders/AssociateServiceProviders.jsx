import React from "react";
import partner_logo from '../../../../static/img/partner.png'

const AssociateServiceProviders = () => {
    return (
        <div className='flex mobile_grid'>
            <div className='left_column'>
                <span className='title_underlined'>Associate service providers</span>
            </div>
            <div className='right_column'>
                <div className='paragraph'>
                    To ensure we give our students the best opportunity to reach their goals, we align ourselves with leaders and specialists in their own fields.
                </div>
                <div className='flex associate_service_providers_image_container'>
                    <div className='associate_service_providers_image_item clear_left'>
                        <img src={partner_logo}/>
                    </div>
                    <div className='associate_service_providers_image_item associate_service_providers_image_item2'>
                        <img src={partner_logo}/>
                    </div>
                    <div className='associate_service_providers_image_item clear_right'>
                        <img src={partner_logo}/>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default AssociateServiceProviders;