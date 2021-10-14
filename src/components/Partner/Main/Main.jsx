import React, {Component} from 'react';
import PartnerDetail from './PartnerDetail/PartnerDetail'

const Main = () => {
    return (
        <div className=''>
            <div id='partner_detail_1'>
                <PartnerDetail/>
            </div>
            <div id='partner_detail_2'>
                <PartnerDetail/>
            </div>
            <div id='partner_detail_3'>
                <PartnerDetail/>
            </div>
            <div id='partner_detail_4'>
                <PartnerDetail/>
            </div>
            <div id='partner_detail_5'>
                <PartnerDetail/>
            </div>
        </div>
    )
};
export default Main;