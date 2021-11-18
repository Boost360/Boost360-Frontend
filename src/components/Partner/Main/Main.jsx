import React, {Component} from 'react';
import PartnerDetail from './PartnerDetail/PartnerDetail'


const Main = ({partner}) => {
    
    return (
        <div className=''>
            {partner.map((item) => (
                <div id={item._id}>
                    <PartnerDetail partner={item}/>
                </div>
            ))}
        
        </div>
    )
};
export default Main;