import React, {Component} from 'react';
import './Partner.css';
import Main from './Main/Main';
import Navigation from "./Navigation/Navigation";

const Partner = () => {
    return (
        <div className='partner_container'>
            <Navigation/>
            <div className='partner_main_container'>
                <Main/>
            </div>
        </div>
    )
};
export default Partner;