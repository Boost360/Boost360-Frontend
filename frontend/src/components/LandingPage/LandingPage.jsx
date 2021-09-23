import React from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import "./LandingPage.css";
import { alpha, styled } from '@mui/material/styles';
import { margin } from "@mui/system";
import logo  from '../../static/img/logo.png';

export default function LandingPage(){
    return(
        <div className="LandingPage">
            <div className="header">
                <div className="icon">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <div className="landingButton">
            <Button variant="outlined" size="large" sx={{marginRight: '100px', color: 'white'}}>Enter Site</Button>
            <Button variant="outlined" size="large" sx={{marginLeft: '100px', color: 'white'}}>Student Login</Button>
            </div>
            
            <div className="languages">
            <ButtonGroup variant="text" aria-label="text button group">
                <Button sx={{color: 'white'}}>English</Button>
                <Button sx={{color: 'white'}}>한국어</Button>
                <Button sx={{color: 'white'}}>中文</Button>
            </ButtonGroup>
            </div>

        </div>

    )
}