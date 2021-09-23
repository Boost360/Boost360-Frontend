import React from "react";
import AssociateServiceProviders from './AssociateServiceProviders/AssociateServiceProviders';
import Location from './Location/Location';
import WhatWeDo from './WhatWeDo/WhatWeDo'

const Main = () => {
    return (
        <div className='main_container'>
            <div className='what_we_do_container' id='what_we_do_container'>
                <WhatWeDo/>
            </div>

            <div className='location_container' id='location_container'>
                <Location/>
            </div>

            <div className='associate_service_providers_container' id='associate_service_providers_container'>
                <AssociateServiceProviders/>
            </div>

        </div>
    )
};
export default Main;